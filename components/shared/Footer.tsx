import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
   <footer className="border-t-0">
    <div className="flex-center wrapper flex-between flex felx-col
    gap-4 p-5 text-center sm:flex-row">
      <Link href='/'>
        <Image 
        src='/assets/images/logo.svg'
        alt="logo"
        width={128}
        height={38}
        />
      </Link>
      <p>2023 Evently. All Rights reserved.</p>
    </div>

   </footer>
  )
}

export default Footer