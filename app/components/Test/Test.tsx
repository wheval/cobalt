"use client"
import React, { useEffect, useRef } from 'react';
import Card from '../Card';
import './Test.styles.css';

type Props = {};

const Test = (props: Props) => {
  // Use a ref to track the parent div containing all the cards
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parentDiv = cardContainerRef.current;

    if (parentDiv) {
      // Loop over all child cards and add event listeners
      Array.from(parentDiv.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          child.addEventListener('mousemove', handleMouseMove);
        }
      });
    }

    // Clean up the event listeners on unmount
    return () => {
      if (parentDiv) {
        Array.from(parentDiv.children).forEach((child) => {
          if (child instanceof HTMLElement) {
            child.removeEventListener('mousemove', handleMouseMove);
          }
        });
      }
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;

    // Calculate the position of the mouse relative to the card
    const rect = target.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    // Update the background gradient dynamically
    target.style.backgroundImage = `radial-gradient(300px circle at ${xPos}px ${yPos}px, rgba(255,255,255,0.06), transparent 40%)`;
  };

  return (
    <section className="w-full relative">
      <div
        ref={cardContainerRef}
        className="flex card-container relative mx-auto justify-center flex-wrap my-36 gap-2"
      >
        <Card
          title="Important business alerts"
          paragraph="Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click."
          height={100}
          width={100}
        />
        <Card
          title="Task Reminders"
          paragraph="Get notified about task deadlines and progress updates."
          height={100}
          width={100}
        />
        <Card
          title="Project Updates"
          paragraph="Stay up to date with your project milestones."
          height={100}
          width={100}
        />
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Test;
