"use client"
import styles from './MarketingForm.module.css'
import { useRef, useEffect, useActionState } from 'react'
import { submitMarketingForm } from '@/utils/actions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { FormError } from '@/components/ui/FormError'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import SubmitButton from '@/components/ui/SubmitButton'
import { toast } from '../ui/use-toast'

export default function MarketingForm() {
  const [state, formAction] = useActionState(submitMarketingForm, { message: '' })
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
      <div className='space-y-2'>
        <Label htmlFor="email">
          <Input
            type="email" 
            name="email"
            id='email'
            aria-label='email'
            aria-describedby='email-error'
            placeholder='e.g community@prophecygames.com'
            required
            className={ styles.input } 
          />
        </Label>
        { state.errors?.email ? (
          <FormError id='email-error'>
            { state.errors.email.map(error => (
              <p key={ error }>{ error }</p>
            ))}
          </FormError>
        ) : null}
        <p className='text-gray-400'>
          Prophecy Games will be responsible for your personal data. For more information please check our 
          <a 
            className='text-secondary underline hover:no-underline ml-0.5' 
            href="https://www.prophecygames.com/_files/ugd/5b40a3_7851ad35f7f94d7996308f2c580ab15e.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          Privacy Policy
          </a>
        </p>
      </div>
      <div className={cn('space-y-2', styles.checkbox)}>
        <Checkbox 
          name='agreement' 
          id="agreement" 
          className='border-secondary data-[state=checked]:bg-secondary'
          value='Yes'
          aria-describedby='agreement-error'
          aria-labelledby='agreement-label'
        />
        <Label id='agreement-label' htmlFor="agreement" className='text-gray-400'>
          I would like to recieve news, special offers and other information from Prophecy Games and I am 16 years old or older
        </Label>
      </div>
      { state.errors?.agreement ? (
        <FormError id='agreement-error'>
          { state.errors.agreement.map(error => (
            <p key={ error }>{ error }</p>
          ))}
        </FormError>
      ) : null}
      <SubmitButton text='Subscribe' pendingText='Subscribing...' />
    </form>
  )
}