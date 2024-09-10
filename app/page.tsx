import React from 'react'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Body from './sections/Body'
import Test from './components/Test/Test'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Nav />
      <Hero />
      <Body />
      <Test />
    </div>
  )
}

export default page