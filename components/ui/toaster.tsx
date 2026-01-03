"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { CheckCircle, AlertCircle, Info, ShoppingCart } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  const getToastIcon = (variant?: string, title?: string) => {
    if (variant === "destructive") return <AlertCircle className="h-4 w-4 text-red-400" />
    if (variant === "success" || title?.includes("Added to Cart") || title?.includes("Submitted")) {
      return title?.includes("Added to Cart") ? (
        <ShoppingCart className="h-4 w-4 text-nano-blue" />
      ) : (
        <CheckCircle className="h-4 w-4 text-green-400" />
      )
    }
    return <Info className="h-4 w-4 text-blue-400" />
  }

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast key={id} variant={variant} {...props}>
          <div className="grid gap-1">
            {title && (
              <ToastTitle>
                {getToastIcon(variant, title?.toString())}
                {title}
              </ToastTitle>
            )}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
