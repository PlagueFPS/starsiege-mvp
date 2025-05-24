"use client"
import styles from './CreatorForm.module.css'
import { useEffect, useRef, useActionState } from 'react'
import { submitCreatorForm } from '@/utils/actions'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FormError } from '../ui/FormError'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import SubmitButton from '../ui/SubmitButton'
import { toast } from '../ui/use-toast'

export default function CreatorForm() {
  const [state, formAction] = useActionState(submitCreatorForm, { message: '' })
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: 'Successfully submitted form',
        description: state.message,
        toastType: 'success'
      })
      formRef.current?.reset()
    }
    else if (state.errors) {
      toast({
        variant: 'destructive',
        title: 'Failed to submit form',
        description: state.message,
        toastType: 'error'
      })
    }
  }, [state])

  return (
    <form action={ formAction } className={ styles.form } ref={ formRef }>
      <h2 className={ styles.title }>Creator sign up form</h2>
      <p className={ styles.disclaimer }>* If you do not have an account/channel, please leave field empty.</p>
      <div className='space-y-2'>
        <Label htmlFor='name' className={ styles.label }>Name</Label>
        <Input 
          type='text'
          name='name'
          id='name'
          aria-label='name'
          aria-describedby='name-error'
          placeholder='e.g. John Smith'
          required
          className={ styles.input }
        />
        { state.errors?.name ? (
          <FormError id='name-error'>
            { state.errors.name.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email' className={ styles.label }>Email</Label>
        <Input 
          type='email'
          name='email'
          id='email'
          aria-label='email'
          aria-describedby='email-error'
          placeholder='e.g. community@prophecygames.com'
          required
          className={ styles.input }
        />
        { state.errors?.email ? (
          <FormError id='email-error'>
            { state.errors.email.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='discordID' className={ styles.label }>Discord ID</Label>
        <Input 
          type='text'
          name='discordID'
          id='discordID'
          aria-label='discordID'
          aria-describedby='discordID-error'
          placeholder='e.g. username'
          required
          className={ styles.input }
        />
        { state.errors?.discordID ? (
          <FormError id='discordID-error'>
            { state.errors.discordID.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='youtube' className={ styles.label }>Youtube Channel</Label>
        <Input 
          type='url'
          name='youtube'
          id='youtube'
          aria-label='youtube'
          aria-describedby='youtube-error'
          placeholder='e.g. https://www.youtube.com/@starsiegedeadzone'
          className={ styles.input }
        />
        { state.errors?.youtube ? (
          <FormError id='youtube-error'>
            { state.errors.youtube.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='twitch' className={ styles.label }>Twitch Channel</Label>
        <Input 
          type='url'
          name='twitch'
          id='twitch'
          aria-label='twitch'
          aria-describedby='twitch-error'
          placeholder='e.g. https://www.twitch.tv/starsiege'
          className={ styles.input }
        />
        { state.errors?.twitch ? (
          <FormError id='twitch-error'>
            { state.errors.twitch.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='facebook' className={ styles.label }>Facebook Channel</Label>
        <Input 
          type='url'
          name='facebook'
          id='facebook'
          aria-label='facebook'
          aria-describedby='facebook-error'
          placeholder='e.g. https://www.facebook.com/gaming/starsiege'
          className={ styles.input }
        />
        { state.errors?.facebook ? (
          <FormError id='facebook-error'>
            { state.errors.facebook.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='twitter' className={ styles.label }>Twitter Account</Label>
        <Input 
          type='url'
          name='twitter'
          id='twitter'
          aria-label='twitter'
          aria-describedby='twitter-error'
          placeholder='e.g. https://www.twitter.com/starsiege'
          className={ styles.input }
        />
        { state.errors?.twitter ? (
          <FormError id='twitter-error'>
            { state.errors.twitter.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='tiktok' className={ styles.label }>TikTok Account</Label>
        <Input 
          type='url'
          name='tiktok'
          id='tiktok'
          aria-label='tiktok'
          aria-describedby='tiktok-error'
          placeholder='e.g. https://www.tiktok.com/@starsiegedeadzone'
          className={ styles.input }
        />
        { state.errors?.tiktok ? (
          <FormError id='tiktok-error'>
            { state.errors.tiktok.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='instagram' className={ styles.label }>Instagram Account</Label>
        <Input 
          type='url'
          name='instagram'
          id='instagram'
          aria-label='instagram'
          aria-describedby='instagram-error'
          placeholder='e.g. https://www.instagram.com/StarsiegeDeadzone'
          className={ styles.input }
        />
        { state.errors?.instagram ? (
          <FormError id='instagram-error'>
            { state.errors.instagram.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='essay' className={ styles.label }>Why are you interested in creating content for Starsiege: Deadzone?</Label>
        <Textarea 
          name='essay'
          id='essay'
          placeholder="Tell us why you're interested"
          maxLength={ 256 }
          required
          className={ styles.input }
        />
        { state.errors?.essay ? (
          <FormError id='essay-error'>
            { state.errors.essay.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className={ styles.checkbox }>
        <Checkbox 
          name='agreeToTerms'
          id='agreeToTerms'
          aria-describedby='agreeToTerms-error'
          aria-labelledby='agreeToTerms-label'
          value='Yes'
          required
          className='border-secondary data-[state=checked]:bg-secondary'
        />
        <Label htmlFor='agreeToTerms' id='agreeToTerms-label' className='text-gray-300 font-semibold font-orbitron'>
          I agree to the
          <a 
            className='text-secondary underline hover:no-underline ml-0.5' 
            href="https://uploads-ssl.webflow.com/638e4732afaf632ed5c776ac/64778e0beed09d0b61399071_ToS%20Agreement.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Creator Program Terms & Conditions
          </a>
        </Label>
        { state.errors?.agreeToTerms ? (
          <FormError id='agreeToTerms-error'>
            { state.errors.agreeToTerms.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <div className={ styles.checkbox }>
        <Checkbox 
          name='agreeToAge'
          id='agreeToAge'
          aria-describedby='agreeToAge-error'
          aria-labelledby='agreeToAge-label'
          value='Yes'
          required
          className='border-secondary data-[state=checked]:bg-secondary'
        />
        <Label htmlFor='agreeToAge' id='agreeToAge-label' className='text-gray-300 font-semibold font-orbitron'>
          I agree that I am over 18+ years of age
        </Label>
        { state.errors?.agreeToAge ? (
          <FormError id='agreeToAge-error'>
            { state.errors.agreeToAge.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
      </div>
      <SubmitButton className='w-full text-lg' />
    </form>
  )
}