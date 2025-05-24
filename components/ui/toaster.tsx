"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, toastType, ...props }) {
        return (
          <Toast key={id} {...props} className={cn('bg-primary', {
            'text-red-400': toastType === 'error',
            'text-green-400 border-green-400': toastType === 'success'
          }, props.className)}>
            <div className="grid gap-1">
              {title && <ToastTitle>{ title }</ToastTitle>}
              {description && (
                <ToastDescription className={cn('text-gray-100')}>
                  { description }
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className={cn({
            'text-green-400 border border-green-400 hover:bg-green-400': toastType === 'success',
            'text-red-400 border border-red-400 hover:bg-red-400': toastType === 'error'
            })} />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
