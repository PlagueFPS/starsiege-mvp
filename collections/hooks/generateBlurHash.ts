import { CollectionBeforeValidateHook } from "payload";
import sharp from "sharp";

const imagePattern = /\.(jpe?g|png|gif|webp|bmp|tiff?)$/i

export const generateBlurHash: CollectionBeforeValidateHook = async ({ collection, req: { file, payload }, data }) => {
  if (collection.slug !== 'media' || !file || !data) return

  try {
    // Convert to AVIF if not already AVIF
    if (file.mimetype !== 'image/avif') {
      payload.logger.info(`Converting ${file.name} to avif`)
      file.data = await sharp(file.data).avif({ effort: 4, quality: 75 }).toBuffer()
      file.mimetype = 'image/avif'
      file.name = file.name.replace(imagePattern, '.avif')
      file.size = file.data.byteLength
      data.mimeType = 'image/avif'
      data.filename = file.name
      payload.logger.info('Conversion finished.')
    }

    // Generate blur hash for all images
    const resizedImage = await sharp(file.data)
      .resize(10, 10, { fit: 'inside' })
      .toBuffer()
    const blurHash = resizedImage.toString('base64')
    payload.logger.info('Blur Hash successfully created')

    return {
      ...data,
      blurHash: `data:image/avif;base64,${blurHash}`,
      file,
    }
  } catch (error) {
    payload.logger.error('Error generating blur hash:', error)
    throw error
  }
}