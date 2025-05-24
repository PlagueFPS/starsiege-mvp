"use client"
import { useFormStatus } from 'react-dom'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "className" | "aria-disabled" | "disabled"> {
  className?: string
  text?: string
  pendingText?: string
}

export default function SubmitButton({ className, pendingText = 'Submitting', text = 'Submit', ...props }: Props) {
  const { pending } = useFormStatus()

  return (
    <>
      <Button 
        className={cn(`bg-secondary text-primary hover:bg-gray-100 w-fit font-semibold`, className)} 
        type='submit' 
        aria-disabled={ pending } 
        disabled={ pending }
        { ...props }
      >
        { pending ? pendingText : text }
      </Button>
    </>
  )
}
