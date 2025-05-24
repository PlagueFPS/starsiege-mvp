import styles from './Footer.module.css'
import Image from 'next/image'
import ProphecyLogo from '@/public/images/Prophecy-Games-Logo.webp'
import EpicGames from '@/svgs/EpicGames'
import Twitter from '@/svgs/Twitter'
import Steam from '@/svgs/Steam'
import Discord from '@/svgs/Discord'
import Youtube from '@/svgs/Youtube'
import Reddit from '@/svgs/Reddit'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <>
      <footer className={ styles.footer }>
        <div className={ styles.container}>
          <div className={ styles.contentContainer }>
            <div className={ styles.content }>
              <span className={ styles.contentTitle }>Download For Free!</span>
              <div className={ styles.contentLinks }>
                <div className={ styles.contentLink }>
                  <a 
                    href="https://store.steampowered.com/app/2170420/Starsiege_Deadzone/"
                    title='Check out our Steam Page'
                    aria-label="Check out our Steam Page" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Steam />
                  </a>
                </div>
                <div className={ styles.contentLink }>
                  <a 
                    href="https://store.epicgames.com/en-US/p/starsiege-deadzone"
                    title='Check out our Epic Games Page' 
                    aria-label="Check out our Epic Games Page" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <EpicGames />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={ styles.middleContainer }>
            <div className={ styles.logoContainer }>
              <a 
                href="https://www.prophecygames.com/"
                title='See what Prophecy Games is all about'
                aria-label='See what Prophecy Games is all about' 
                target='_blank' 
                rel='noreferrer'
              >
                <picture className={ styles.logo }>
                  <Image 
                    src={ ProphecyLogo } 
                    alt='Prophecy Games Logo'
                    sizes='(min-width: 420px) 360px, 92vw'
                    placeholder='blur'
                  />
                </picture>
              </a>
            </div>
            <ul className={ styles.list }>
              <li>
              <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
                <a href="#" aria-label='support' target="_blank" rel="noreferrer">
                  <span>Support</span>
                </a>
              </Button>
              </li>
              <li>
              <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
                <a href="https://www.prophecygames.com/careers" aria-label='careers' target="_blank" rel="noreferrer">
                  <span>Careers</span>
                </a>
              </Button>
              </li>
              <li>
              <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
                <a href="https://www.prophecygames.com/about" aria-label='About Us' target="_blank" rel="noreferrer">
                  <span>About Us</span>
                </a>
              </Button>
              </li>
              <li>
              <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
                <a href="https://www.prophecygames.com/_files/ugd/5b40a3_7851ad35f7f94d7996308f2c580ab15e.pdf" aria-label='Privacy Notice' target="_blank" rel="noreferrer">
                  <span>Privacy Notice</span>
                </a>
              </Button>
              </li>
            </ul>
          </div>
          <div className={ styles.bottomContainer }>
          <div className={ styles.socialsContainer }>
            <div className={ styles.socialLink }>
              <Button asChild variant="ghost" className='hover:bg-zinc-800 py-6 px-2'>
                <a href="https://store.steampowered.com/app/2170420/Starsiege_Deadzone/" className={ styles.socialLink } title="Check out our Steam Page" target="_blank" rel="noreferrer">
                  <Steam />
                </a>
              </Button>
              <Button asChild variant="ghost" className='hover:bg-zinc-800 py-6 px-2'>
                <a href="https://store.epicgames.com/en-US/p/starsiege-deadzone" className={ styles.socialLink } title="Check out our Epic Games Page" target="_blank" rel="noreferrer">
                  <EpicGames />
                </a>
              </Button>
              <Button asChild variant="ghost" className='hover:bg-zinc-800 py-6 px-2'>
                <a href="https://discord.gg/7Ewbt6f7MP" className={ styles.socialLink } title="Join our Discord Server" target="_blank" rel="noreferrer">
                  <Discord />
                </a>
              </Button>
              <Button asChild variant="ghost" className='hover:bg-zinc-800 py-6 px-2'>
                <a href="https://www.youtube.com/watch?v=J7TW6iE_BAk&t=2s" className={ styles.socialLink } title="Subscribe to our Youtube Channel" target="_blank" rel="noreferrer">
                  <Youtube />
                </a>
              </Button>
              <Button asChild variant="ghost" className='hover:bg-zinc-800 py-6 px-2'>
                <a href="https://twitter.com/PlayDEADZONE" className={ styles.socialLink } title="Follow us on our Twitter" target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
              </Button>
              <Button asChild variant="ghost" className='hover:bg-zinc-800 py-6 px-2'>
                <a href="https://www.reddit.com/r/StarsiegeDeadzone/" className={ styles.socialLink } title="Check out our official subreddit" target="_blank" rel="noreferrer">
                  <Reddit />
                </a>
              </Button>
            </div>
          </div>
          <div className={ styles.copyrightContainer }>
            <span className={ styles.copyright }>Copyright &copy;<span className={ styles.copyright }>{ new Date().getFullYear() }</span><span className={ styles.copyright }>, Prophecy Games Inc. All Rights Reserved.</span></span>
            <span className={ styles.copyright }>Epic Games and the Epic Games logo are trademarks or registered trademarks of Epic Games, Inc. in the U.S and elsewhere</span>
            <span className={ styles.copyright }>
              Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.
            </span>
          </div> 
        </div>
      </div>
    </footer>
  </>
  )
}