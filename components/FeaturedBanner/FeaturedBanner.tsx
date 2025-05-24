import styles from './FeaturedBanner.module.css'
import Image from 'next/image'
import Brandmark from '@/public/images/brandmark.webp'
import { Button } from '../ui/button'

export default function FeaturedBanner() {
  return (
    <header className={ styles.container }>
      <div className={ styles.featuredBanner }>
        <div className={ styles.featuredImage }>
          <video className='h-full w-full object-cover opacity-75' loop autoPlay playsInline muted poster='/images/DeadzoneAnimaticPoster_720.jpg'>
            <source src='/DeadzoneCinematic.mp4' type='video/mp4' />
          </video>
        </div>
        <div className={ styles.featuredDetails }>
          <picture className={ styles.featuredBrandmark }>
            <Image 
              src={ Brandmark } 
              alt='Deadzone Brandmark'
              sizes='(min-width: 480px) 448px, calc(92.5vw + 23px)'
              className='h-auto w-auto px-4 max-w-[480px]'
              placeholder='blur'
            />
          </picture>
          <span className='text-white text-base font-bold mb-4 italic capitalize'>The corridor extraction shooter.</span>
          <div className='flex justify-center items-center gap-4 px-4 w-full'>
            <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
              <a  
                href="https://www.youtube.com/watch?v=ipV2NmMEAtM" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Trailer
              </a>
            </Button>
            <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
              <a 
                href="https://store.steampowered.com/app/2170420/Starsiege_Deadzone/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                  Download Now!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}