"use client"
import Image from 'next/image'
import React, { forwardRef } from 'react';

type Props = {
  imgSrc?: string,
  title: string, 
  paragraph: string,
  alt?: string,
  height: number,
  width: number,
}

const Card = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div 
    ref={ref}
    className="card min-h-[250px] border cursor-pointer border-[#353537] overflow-hidden rounded-2xl bg-[#18181B]"
  >
    <div>
      { props?.imgSrc && <Image 
        src={props.imgSrc || ""} 
        alt={props.alt || "image"} 
        width={props.width} 
        height={props.height} 
      />}
    </div>
    <div className="p-6 pt-3 flex flex-col gap-3 w-[35ch]">
      <h3 className="text-[#E4E4E7] text-lg">{props.title}</h3>
      <p className="text-sm">{props.paragraph}</p>
    </div>
  </div>
));

export default Card;
