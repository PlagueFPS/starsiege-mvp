export interface MarketingFormState {
  message?: string | null
  errors?: {
    email?: string[]
    agreement?: string[]
  }
}

export interface CreatorFormState {
  message?: string | null
  errors?: {
    name?: string[]
    email?: string[]
    discordID?: string[]
    youtube?: string[]
    twitch?: string[]
    facebook?: string[]
    twitter?: string[]
    tiktok?: string[]
    instagram?: string[]
    essay?: string[]
    agreeToTerms?: string[]
    agreeToAge?: string[]
  }
}