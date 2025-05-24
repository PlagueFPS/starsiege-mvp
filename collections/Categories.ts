import { formatSlug } from "@/utils/payload-utils";
import { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title'
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
    }
  ]
}