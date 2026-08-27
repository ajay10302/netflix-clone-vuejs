import { toast } from 'vue3-toastify'

export const useToast = () => {
  const toastOptions = {
    autoClose: 1000,
    theme: 'dark' as const,
  }

  const showError = (message: string) => {
    toast.error(message, toastOptions)
  }

  const showSuccess = (message: string) => {
    toast.success(message, toastOptions)
  }

   const showWarning = (message: string) => {
    toast.warning(message, toastOptions)
  }

  return {
    showError,
    showSuccess,
    showWarning
  }
}