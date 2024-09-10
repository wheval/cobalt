import React from 'react'

type Props = {
    title?: string
}

const Button = (props: Props) => {
  return (
    <button className="border-1 border bg-[#09090B] leading-6 text-sm px-4 py-2 rounded-full border-[#383D41]">{props?.title || "Default"}</button>
  )
}

export default Button