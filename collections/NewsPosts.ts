import { formatSlug } from "@/utils/payload-utils";
import { CollectionConfig } from "payload";

export const NewsPosts: CollectionConfig = {
  slug: 'newsPosts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: "text",
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      index: true,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [formatSlug('title')]
      }
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      index: true,
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
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
      required: true,
    }
  ]
}