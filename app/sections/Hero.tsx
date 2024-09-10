import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section>
        <div className="flex flex-col py-16 max-w-[70%] m-auto items-center justify-center text-center">
             <div className="flex flex-col items-center justify-center">
                <h1 className='font-bold text-6xl bg-clip-text text-transparent bg-gradient-text w-[15ch] mb-6 leading-tight tracking-[-1.8px]'>Unleash the power of intuitive finance</h1>
                <p>Say goodbye to the outdated financial tools. Every small business owner, </p>
                <p>regardless of the background, can now manage their business like a pro. Simple.</p>
                <p className='mb-8'>Intuitive. And never boring. </p>
            </div>
            <div>
                <Button title='Join the Watilist' />
                <div className='mt-4 text-sm flex items-center gap-4 flex-col'>
                    <div className='cursor-pointer px-4'><span>Learn More</span></div>
                    <Image alt='' width={18} height={18} src="arrow-down.svg" />
                </div>
            </div>
            <div className='py-5'>
                <Image src="dash.svg" width={1216} height={720.08} alt='Cobalt Dashboard Image'/>
            </div>
        </div>
    </section>
    )
}

export default Hero