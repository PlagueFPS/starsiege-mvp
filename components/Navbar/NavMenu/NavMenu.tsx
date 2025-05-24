import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import NavLink from '../NavLink/NavLink'
import { HelpCircle, Joystick, Newspaper, Twitch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NEWS_ROUTES } from '@/utils/NewsRoute'

export default function NavMenu() {
  return (
    <NavigationMenu className='hidden lg:flex'>
      <NavigationMenuList className='flex gap-2 items-center px-4 h-full font-orbitron'>
        <NavigationMenuItem>
          <NavLink href='/faq'>
            <HelpCircle size="34" className='text-secondary' />
            <span className='text-gray-100'>FAQ</span>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='flex items-center gap-2 h-fit p-4 bg-primary cursor-pointer text-lg rounded-md hover:bg-zinc-800'>
            <Newspaper size="34" className='text-secondary' />
            <span className='text-gray-100 font-normal'>News</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-primary'>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]'>
              { NEWS_ROUTES.map(route => (
                <li key={ route.href }>
                  <NavLink href={ route.href }  className='flex-col justify-center items-start'>
                    <h2 className='text-base font-medium leading-none text-secondary font-orbitron'>
                      { route.title }
                    </h2>
                    <p className='line-clamp-2 text-sm leading-snug text-gray-100'>
                      { route.description }
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink href='/creators'>
            <Joystick size="34" className='text-secondary' />
            <span className='text-gray-100'>Creators</span>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink href='/twitch-drops'>
            <Twitch size="34" className='text-secondary' />
            <span className='text-gray-100'>Twitch Drops</span>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className='bg-secondary text-primary hover:bg-gray-100' asChild>
            <a href="https://t.co/Y8hxzsupf7" target="_blank" rel="noopener noreferrer">
              <span>Download Now!</span>
            </a>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
