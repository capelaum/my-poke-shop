import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'

export function Header() {
  return (
    <header className="w-full bg-stone-100 grid place-items-center">
      <nav className="max-w-7xl w-full flex justify-between px-5 py-2">
        <div className="flex justify-center w-48 h-14 ">
          <Image src={Logo} alt="Logo" />
        </div>

        <ul className="flex justify-between items-center text-stone-800">
          <li className="pr-5 font-bold">
            <Link href="#">Home</Link>
          </li>

          <li className="pr-5 font-bold">
            <Link href="#">About</Link>
          </li>

          <li className="font-bold">
            <Link href="#">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
