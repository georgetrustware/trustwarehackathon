import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const middleEllipsis = (str, len) => {
  if (!str) return ''

  return `${str.substr(0, len)}...${str.substr(str.length - len, str.length)}`
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function fileToBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export function base64ToFile(base64, filename) {
  const arr = base64.split(',') || []
  const matchResult = arr[0]?.match(/:(.*?);/)?.[1]
  const mimeType = matchResult ? matchResult[1] : ''
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mimeType })
}
