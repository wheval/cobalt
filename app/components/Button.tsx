import React from 'react'

type Props = {
    title?: string
}

const Button = (props: Props) => {
  return (
    <button className="border-1 border bg-[#09090B] leading-6 text-sm px-4 py-1.5 rounded-full border-custom-grey">{props?.title || "Default"}</button>
  )
}

export default Button