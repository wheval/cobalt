import React from 'react'
import Card from '../components/Card'

type Props = {}

const Body = (props: Props) => {
  return (
    <>
    <section className='mt-20'>
        <div className='flex justify-between w-[90%] m-auto py-5'>
            <h2 className='font-bold text-4xl bg-clip-text text-transparent bg-gradient-text w-[17ch] mb-6 leading-tight tracking-[-1.2px]'>Who said finance has to be boring?</h2>
            <p className='w-[50%]'>
                With Cobalt, managing your business finances is effortless, 
                empowering, and anything but boring. Our intuitive platform brings 
                clarity to your cash flow, simplifies your financial decision-making, and 
                puts the power of advanced financial management right at your 
                fingertips. <span className='text-[#E4E4E7]'>Say no to spreadsheets and tools designed in the 80s.</span>
            </p>
        </div>
    </section>
    <section className='mt-40'>
        <div className='flex flex-col justify-between w-[90%] m-auto py-5'>
            <h2 className='font-bold text-4xl bg-clip-text text-transparent bg-gradient-text w-[17ch] mb-6 leading-tight tracking-[-1.2px]'>Everything you need.
                                            Nothing you don't
            </h2>
            <p className='w-[50%]'>
            Financial management and visibility in one place. Experience <span className='text-[#E4E4E7]'>a flexible toolkit</span>  that makes every task feel like a breeze.
            </p>

            <div className='mt-16 flex gap-8'>
                <Card 
                    imgSrc='insight.svg'
                    title='Insights at your fingertips' 
                    paragraph='All your data and finances in one place to provide quick answers and make decisions instantly.'
                    height={326}
                    width={384}
                    />
                <Card 
                    imgSrc='manage.svg'
                    title='Manage in real time' 
                    paragraph='Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.'
                    height={326}
                    width={384}
                    />
                <Card 
                    imgSrc='important.svg'
                    title='Important business alerts' 
                    paragraph='Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
                    height={326}
                    width={384}
                    />
            </div>

        </div>
    </section>
    </>
)
}

export default Body