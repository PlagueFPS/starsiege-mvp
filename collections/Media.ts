import type { CollectionConfig } from 'payload'
import { generateBlurHash } from './hooks/generateBlurHash'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'blurHash',
      label: 'Blur Hash',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      }
    }
  ],
  upload: true,
  hooks: {
    beforeValidate: [generateBlurHash],
  }
}
