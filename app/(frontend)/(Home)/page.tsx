import styles from './Home.module.css'
import { Metadata } from "next";
import MarketingForm from '@/components/MarketingForm/MarketingForm';
import FeaturedBanner from '@/components/FeaturedBanner/FeaturedBanner';
import { Button } from '@/components/ui/button';
import { getPage } from '@/data/pages';
import { env } from '@/env';

export const generateMetadata = async () => {
  const { title, description } = await getPage('official-website')

  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}`,
      type: 'website',
      title: title,
      description: description,
      images: [
        {
          url: `${env.NEXT_PUBLIC_WEBSITE_URL}/DeadzoneAnimaticPoster_1080.jpg`,
          width: 1920,
          height: 1080
        }
      ]
    },
    twitter: {
      title: title,
      description: description,
      card: 'summary_large_image'
    },
  }

  return metadata
}


export default function Home() {
  return (
    <>
      <FeaturedBanner />
      <div className='flex flex-col justify-center items-center gap-8 w-full'>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>What is Starsiege: Deadzone</h2>
          <div className={ styles.sectionContent }>
            <p className={ styles.sectionText }>
              Starsiege: Deadzone is a corridor extraction shooter set in the far reaches of space. 
              Delve into derelict space stations overrun by hostile Cybrids in search of valuable resources. 
              Group up with 2 squadmates, fight against other Raiders, and escape alive.
            </p>
          </div>
        </section>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>Become a Raider</h2>
          <div className={ styles.sectionContent }>
            <p className={ styles.sectionText }>
              Join our discord to be involved with the community, find people to play with, provide game feedback, report issues,
              and more!
            </p>
          </div>
          <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
            <a  
              href="https://discord.gg/svzgDdaJy4" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join the Discord
            </a>
          </Button>
        </section>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>Stay Connected</h2>
          <div className={ styles.sectionContent }>
            <p className={ styles.sectionText }>
              Sign up today to receive the latest Starsiege: Deadzone news, updates, offers, and more by email.
            </p>
          </div>
          <MarketingForm />
        </section>
        <section className={ styles.section }>
          <h2 className={ styles.sectionTitle }>Download & Play for Free</h2>
          <div className={ styles.sectionContent }>
            <p className={ styles.sectionText }>
              Starsiege: Deadzone is currently in Early Access and is Free to play on Steam and Epic Games
            </p>
          </div>
          <Button asChild className='bg-secondary text-primary hover:bg-gray-100'>
            <a  
              href="https://store.steampowered.com/app/2170420/Starsiege_Deadzone/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Now!
            </a>
          </Button>
        </section>
      </div>
    </>
  )
}
