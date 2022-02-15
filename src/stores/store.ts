import { localStore } from './localStore'

export const theme = localStore('theme', 'light')
export const websiteUrl = localStore('websiteUrl', 'https://www.example.com')
