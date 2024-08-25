import Image from "next/image"
import Button from "./Button"

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className="max-w-screen-xl m-auto flex justify-between p-4 items-center">
        <Image src="logo.svg" width={90} height={24} alt="Cobalt logo" />
        <div className="flex gap-4 items-center">
            <div><span className="text-sm">Blog</span></div>
            <Button title="Join the Waitlist" />
        </div>
    </nav>
  )
}

export default Nav