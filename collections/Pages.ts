import type { CollectionConfig } from "payload";
import { formatSlug } from "@/utils/payload-utils";

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  defaultPopulate: {
    title: true,
    slug: true,
    description: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [formatSlug('title')]
      }
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    }
  ]
}