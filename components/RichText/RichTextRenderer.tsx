import type { SerializedEditorState, SerializedLexicalNode } from "lexical"
import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react"
import { checkText } from "@/utils/payload-utils"
import Link from "next/link"
import Image from "next/image"

interface RichTextRendererProps {
  content: SerializedEditorState<SerializedLexicalNode>
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    text: ({ node }) => node.text,
    link: ({ node }) => {
      const url = node.fields.url
      const value = checkText(node.children[0])
      if (url?.startsWith('/') && !node.fields.newTab) {
        return (
          <Link href={ url }>
            { value }
          </Link>
        )
      }
      else {
        return (
          <a href={ url } target="_blank" rel="noopener noreferrer">
            { value }
          </a>
        )
      }
    },
    upload: ({ node }) => {
      return (
        <figure>
          <Image 
            src={ node.fields.url }
            alt={ node.fields.alt ?? "" }
            width={ node.fields.width }
            height={ node.fields.height }
            blurDataURL={ node.fields.blurHash }
            placeholder="blur"
            quality={ 100 }
            className={ node.fields.filename.replace(/\s/g, '')}
          />
          <figcaption>
            { node.fields.description }
          </figcaption>
        </figure>
      )
    },
  })

  return <RichText data={ content } converters={ jsxConverters } />
}
