"use server"
import type { MarketingFormState, CreatorFormState } from '@/types/FormStates'
import {
  MarketingFormSchema, 
  CreatorFormSchema,
  MarketingGoogleFormSchema, 
  CreatorGoogleFormSchema,
  type MarketingGoogleForm, 
  type CreatorGoogleForm,
} from "@/types/validationSchemas"


export async function submitMarketingForm(prevState: MarketingFormState, formData: FormData) {
  const validatedFields = MarketingFormSchema.safeParse(Object.fromEntries(formData))
  if (!validatedFields.success) return {
    message: 'Invalid Fields. Failed to submit form',
    errors: validatedFields.error.flatten().fieldErrors
  }
  const marketingGoogleForm: MarketingGoogleForm = {
    "entry.156560111": validatedFields.data.email
  }
  try {
    const data = MarketingGoogleFormSchema.parse(marketingGoogleForm)
    const encodedFormData = new URLSearchParams(data).toString()
    await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSedcnz9h9Fjz_fXJTBZT9oAkZJtVl50Y55RlK_EmKbNWiaE4w/formResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedFormData
    })
    return { message: 'Thank you for submitting! Your submission has been received.' }
  }
  catch(e) {
    if (e instanceof Error) return { message: e.message }
    else return { 
      message: 'Failed to submit form, this is most likely an issue on our end, if you experience this error again please report the issue' 
    }
  }
}

export async function submitCreatorForm(prevState: CreatorFormState, formData: FormData) {
  const validatedFields = CreatorFormSchema.safeParse(Object.fromEntries(formData))
  if (!validatedFields.success) return {
    message: 'Invalid Fields. Failed to submit form.',
    errors: validatedFields.error.flatten().fieldErrors
  }
  // Assign client data to Google Form IDs
  const creatorGoogleForm: CreatorGoogleForm = {
    "entry.442059430": validatedFields.data.name, 
    "entry.1650829789": validatedFields.data.email, 
    "entry.949417705": validatedFields.data.discordID, 
    "entry.940349775": validatedFields.data.youtube, 
    "entry.1349213176": validatedFields.data.twitch, 
    "entry.1165850270": validatedFields.data.facebook, 
    "entry.2048569348": validatedFields.data.twitter,
    "entry.556072406": validatedFields.data.tiktok, 
    "entry.1221670095": validatedFields.data.instagram, 
    "entry.524359854": validatedFields.data.essay, 
    "entry.2047662044": validatedFields.data.agreeToTerms, 
    "entry.745317325": validatedFields.data.agreeToAge
  }
  try {
    const data = CreatorGoogleFormSchema.parse(creatorGoogleForm)
    const encodedFormData = new URLSearchParams(data).toString()
    await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfx_Zch37zg6jZNXWKzLL4bAfoHM1GmdLsKkBFkw6HX0pL2_Q/formResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedFormData
    })
    return { message: 'Thank you for submitting! Your submission has been received.' }
  }
  catch(e) {
    if (e instanceof Error) return { message: e.message }
    else return { 
      message: 'Failed to submit form, this is most likely an issue on our end, if you experience this error again please report the issue' 
    }
  }
}