import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path
  if (process.env.NETLIFY_URL)
    return `https://${process.env.NETLIFY_URL}${path}`
  return `http://localhost:${
    process.env.PORT ?? 3000
  }${path}`
}

export function constructMetadata({
  title = "Garúa",
  description = "Description",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@guerrajovane"
    },
    icons,
    metadataBase: new URL('https://garua.netlify.app'),
    // themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}