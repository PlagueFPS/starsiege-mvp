import { z } from "zod";

export const MarketingGoogleFormSchema = z.object({
  "entry.156560111": z.string().email() // email
})

export const MarketingFormSchema = z.object({
  email: z.string().email(),
  agreement: z.string().optional()
})

export const CreatorGoogleFormSchema = z.object({
  "entry.442059430": z.string(), // name
  "entry.1650829789": z.string().email(), // email
  "entry.949417705": z.string(), // discordID
  "entry.940349775": z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('youtube.com'), {
    message: 'Please enter a youtube URL'
  }), // youtube
  "entry.1349213176": z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('twitch.tv'), {
    message: 'Plase enter a twitch URL'
  }), // twitch
  "entry.1165850270": z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('facebook.com/gaming'), {
    message: 'Please enter a facebook gaming URL'
  }), // facebook
  "entry.2048569348": z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('twitter.com') || value?.includes('x.com'), {
    message: 'Please enter a twitter URL'
  }), // twitter
  "entry.556072406": z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('tiktok.com'), {
    message: 'Please enter a TikTok URL'
  }), // tiktok
  "entry.1221670095": z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('instagram.com'), {
    message: 'Please enter a Instagram URL'
  }), // instagram
  "entry.524359854": z.string().max(256, "Must be 256 characters or shorter"), // essay
  "entry.2047662044": z.string(), // agree to terms
  "entry.745317325": z.string() // agree to age
})

export const CreatorFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  discordID: z.string(),
  youtube: z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => value?.includes('youtube.com'), {
    message: 'Please enter a Youtube URL'
  }),
  twitch: z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('twitch.tv'), {
    message: 'Please enter a Twitch URL'
  }),
  facebook: z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('facebook.com/gaming'), {
    message: 'Please enter a Facebook gaming URL'
  }),
  twitter: z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('twitter.com') || value?.includes('x.com'), {
    message: 'Please enter a Twitter URL'
  }),
  tiktok: z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('tiktok.com'), {
    message: 'Please enter a TikTok URL'
  }),
  instagram: z.union([z.string().length(0, "Must be a url or empty"), z.string().url()]).optional().refine(value => !value || value?.includes('instagram.com'), {
    message: 'Please enter a Instagram URL'
  }),
  essay: z.string().max(256, "Must be 256 characters or shorter"),
  agreeToTerms: z.string(),
  agreeToAge: z.string()
})

export interface CreatorGoogleForm extends z.infer<typeof CreatorGoogleFormSchema> {}
export interface MarketingGoogleForm extends z.infer<typeof MarketingGoogleFormSchema> {}


