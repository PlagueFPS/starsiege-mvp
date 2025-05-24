import { env } from '@/env'
import Image from 'next/image';
import Link from "next/link"
import { Fragment } from "react"
import { cn } from '@/lib/utils';

export const IS_BOLD = 1;
export const IS_ITALIC = 1 << 1;
export const IS_STRIKETHROUGH = 1 << 2;
export const IS_UNDERLINE = 1 << 3;
export const IS_CODE = 1 << 4;
export const IS_SUBSCRIPT = 1 << 5;
export const IS_SUPERSCRIPT = 1 << 6;
export const IS_HIGHLIGHT = 1 << 7;

const WEBSITE_URL = env.NEXT_PUBLIC_WEBSITE_URL
const dev_url = 'http://localhost:3000'

function generateTextAlign(node) {
  if (node.format === 'right') return 'text-right'
  if (node.format === 'center') return 'text-center'
  else return ''
}

export default function RichTextRenderer({ children, parentNode = {} }) {
  return (children?.map((node, i) => {
    const classNames = {
      h1: 'mt-6 text-5xl font-bold',
      h2: 'mt-5 text-4xl font-bold',
      h3: 'mt-4 text-3xl font-bold',
      h4: 'mt-3 text-2xl font-bold',
      h5: 'mt-2 text-xl font-bold',
      h6: 'mt-1 text-lg font-bold',
      p: 'text-base',
      ul: 'list-disc',
      ol: 'list-decimal',
      li: 'list-item',
      blockquote: 'font-bold text-lg text-gray-600',
      a: 'text-blue-500 underline',
    }
    if (!node) {
      return null;
    }

    switch(node.type) {
      case 'text': {
        let text = node.text ? <span className=''>{node.text}</span> : <span className='opacity-0'>&nbsp;</span>;

        if (node.format & IS_BOLD) {
          text = (
            <strong key={i}>
              {text}
            </strong>
          );
        }

        if (node.format & IS_CODE) {
          text = (
            <code key={i}>
              {text}
            </code>
          );
        }

        if (node.format & IS_ITALIC) {
          text = (
            <em key={i}>
              {text}
            </em>
          );
        }

        if (node.format & IS_UNDERLINE) {
          text = (
            <span
              className='underline'
              key={i}
            >
              {text}
            </span>
          );
        }

        if (node.format & IS_STRIKETHROUGH) {
          text = (
            <span
              className='line-through'
              key={i}
            >
              {text}
            </span>
          );
        }

        return (
          <Fragment key={i}>
            {text}
          </Fragment>
        );
      }
      case 'heading': {
        if (node.tage === 'h1') {
          return (
            <h1 className={`${classNames.h1}`} key={ i }>
              { RichTextRenderer({ children: node.children })}
            </h1>
          )
        }
        else if (node.tag === 'h2') { 
          return (
            <h2 className={`${classNames.h2}`} key={ i }>
              { RichTextRenderer({ children: node.children })}
            </h2>
          )
        }
        else if (node.tag === 'h3') {
          return (
            <h3 className={`${classNames.h3}`} key={ i }>
              { RichTextRenderer({ children: node.children })}
            </h3>
          )
        }
        else {
          return (
            <node.tag key={ i }>
              { RichTextRenderer({ children: node.children })}
            </node.tag>
          )
        }
      }
      case 'upload': {
        return (
          <figure key={i}>
            <Image 
              src={ node.value.url }
              alt={ node.value.alt ?? "" }
              width={ node.value.width }
              height={ node.value.height }
              blurDataURL={ node.value.blurHash }
              placeholder="blur"
              sizes='80ch'
              quality={ 100 }
              className={cn(node?.value?.alt?.replace(/\s/g, ''))}
            />
            <figcaption>
              { node.value.description ?? node.value.alt }
            </figcaption>
          </figure>
        )
      }
      case 'list': {
        if (node.listType === 'bullet') {
          return (
            <ul className={`${classNames.ul}`} key={i}>
              {RichTextRenderer({ children: node.children, parentNode: node })}
            </ul>
          );
        } else if (node.listType === 'check') {
          return (
            <ul className={`${classNames.ul} list-none`} key={i}>
              {RichTextRenderer({ children: node.children, parentNode: node })}
            </ul>
          );
        } else if (node.listType === 'number') {
          return (
            <ol className={`${classNames.ol}`} key={i}>
              {RichTextRenderer({ children: node.children, parentNode: node })}
            </ol>
          )
        }
      }
      case 'listitem': {
        if (node.checked) {
          return (
            <li className={`${classNames.li} flex gap-1`} key={i}>
              <div className='line-through'>
                {RichTextRenderer({ children: node.children })}
              </div>
            </li>
          )
        } else if (parentNode.listType === 'check') {
          return (
            <li className={`${classNames.li} flex gap-1`} key={i}>
              <div className=''>
                {RichTextRenderer({ children: node.children })}
              </div>
            </li>
          )
        } else {
          return (
            <li className={`${classNames.li}`} key={i}>
              {RichTextRenderer({ children: node.children })}
            </li>
          );
        }
      }
      case 'quote': {
        return (
          <blockquote className={`${classNames.blockquote}`} key={ i }>
            <em>
              { RichTextRenderer({ children: node.children }) }
            </em>
          </blockquote>
        )
      }
      case 'link': {
        if (node.fields.url.startsWith(WEBSITE_URL)) {
          return (
            <Link href={ node.fields.url } key={ i }>
              { RichTextRenderer({ children: node.children })}
            </Link>
          )
        }
        else if (node.fields.url.startsWith(dev_url)) {
          return (
            <Link href={ node.fields.url.replace(dev_url, WEBSITE_URL)} key={ i }>
              { RichTextRenderer({ children: node.children })}
            </Link>
          )
        }
        else {
          return (
            <a href={ node.fields.url } target="_blank" rel="noopener noreferrer" key={ i }>
              { RichTextRenderer({ children: node.children })}
            </a>
          )
        }
      }
      case 'table': {
        return RichTextRenderer({ children: node.children })
      }
      case 'relationship': {
        return RichTextRenderer({ children: node.children })
      }
      default:
        return (
          <p className={`${classNames.p} ${generateTextAlign(node)}`} key={i}>
            { RichTextRenderer({ children: node.children })}
          </p>
        )
    }
  }).filter((node) => node !== null))
}