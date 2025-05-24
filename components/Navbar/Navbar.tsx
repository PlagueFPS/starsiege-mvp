import Image from 'next/image'
import Link from 'next/link'
import Brandmark from '@/public/images/brandmark.webp'
import Sidebar from './Sidebar/Sidebar'
import NavMenu from './NavMenu/NavMenu'

export default function Navbar() {
  return (
    <header>
      <nav className='fixed top-0 z-50 flex justify-between items-center w-full bg-primary border-b border-gray-600 px-2 h-20'>
        <Link href='/'>
          <Image
            src={ Brandmark }
            alt='Deadzone Brandmark'
            className='h-16 w-auto'
            sizes='(min-width: 380px) 272px, calc(60vw + 56px)'
            placeholder='blur'
          />
        </Link>
        <NavMenu />
        <Sidebar />
      </nav>
    </header>
  )
}
