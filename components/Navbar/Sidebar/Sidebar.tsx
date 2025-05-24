import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { ArrowRightToLine, HelpCircle, Joystick, Newspaper, Twitch, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Brandmark from '@/public/images/brandmark.webp'
import Steam from '@/svgs/Steam'
import EpicGames from '@/svgs/EpicGames'
import Discord from '@/svgs/Discord'
import Youtube from '@/svgs/Youtube'
import Twitter from '@/svgs/Twitter'
import Reddit from '@/svgs/Reddit'

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden' title='Toggle Nav' asChild>
        <Button>
          <Menu size={ 40 } className='text-secondary hover:rotate-180' />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col p-0 bg-primary border-zinc-800 focus:border-zinc-800 text-secondary'>
        <SheetHeader className='flex flex-row items-center gap-5 text-secondary border-b border-zinc-700 w-full p-2'>
          <SheetClose asChild>
            <Button className='text-secondary px-1' title='Close Nav'>
              <ArrowRightToLine size={ 40 } />
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Link href='/'>
              <Image
                src={ Brandmark }
                alt='Deadzone Brandmark'
                className='h-auto w-auto'
                sizes='(min-width: 380px) 272px, calc(60vw + 56px)'
                placeholder='blur'
              />
            </Link>
          </SheetClose>
        </SheetHeader>
          <div className='flex flex-col flex-grow items-start gap-4 px-2 text-xl font-orbitron w-full'>
            <SheetClose asChild>
              <Button variant="ghost" className='hover:bg-zinc-800' asChild>
                <Link href='/faq' className='flex items-center justify-center gap-2'>
                  <HelpCircle size={ 30 } className='text-secondary' />
                  <p className='text-gray-100 text-xl font-normal'>FAQ</p>
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="ghost" className='hover:bg-zinc-800' asChild>
                <Link href='/news' className='flex gap-2'>
                  <Newspaper size={ 30 } className='text-secondary' />
                  <p className='text-gray-100 text-xl font-normal'>News</p>
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="ghost" className='hover:bg-zinc-800' asChild>
                <Link href='/creators' className='flex gap-2'>
                  <Joystick size={ 30 } className='text-secondary' />
                  <p className='text-gray-100 text-xl font-normal'>Creators</p>
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="ghost" className='hover:bg-zinc-800' asChild>
                <Link href='/twitch-drops' className='flex gap-2'>
                  <Twitch size={ 30 } className='text-secondary' />
                  <p className='text-gray-100 text-xl font-normal'>Twitch Drops</p>
                </Link>
              </Button>
            </SheetClose>
          </div>
          <SheetFooter className='text-secondary flex flex-row justify-evenly items-center w-full px-1 mb-12'>
            <a href="https://t.co/Y8hxzsupf7" target="_blank" rel="noopener noreferrer">
              <Steam />
            </a>
            <a href="https://store.epicgames.com/en-US/p/starsiege-deadzone" title='Check out our Epic Games Page' target="_blank" rel="noreferrer">
              <EpicGames className='transition-all fill-secondary' />
            </a>
            <a href="https://t.co/deetM4zfye" target="_blank" rel="noopener noreferrer">
              <Discord />
            </a>
            <a href="https://www.youtube.com/@starsiegedeadzone" target="_blank" rel="noopener noreferrer">
              <Youtube />
            </a>
            <a href="https://twitter.com/PlayDEADZONE" target="_blank" rel="noopener noreferrer">
              <Twitter className='h-7 w-auto'/>
            </a>
            <a href="https://www.reddit.com/r/StarsiegeDeadzone/" target="_blank" rel="noopener noreferrer">
              <Reddit />
            </a>
          </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}