import styles from './FAQ.module.css'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { getFAQs } from '@/data/faq'
import RichTextRenderer from '../RichText/RichTextRenderer'

export default async function FAQ() {
  const faqs = await getFAQs()

  return (
    <Accordion type='single' collapsible className='flex flex-col gap-10'>
      { faqs.map(faq => (
        <AccordionItem key={ faq.id } value={ faq.id.toString() } className={ styles.faq }>
          <AccordionTrigger className={ styles.faqTitle }>{ faq.title }</AccordionTrigger>
          <AccordionContent>
            <RichTextRenderer content={ faq.content } />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}