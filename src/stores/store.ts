import { localStore } from './localStore'

export const theme = localStore('theme', 'dark')
export const websiteUrl = localStore('websiteUrl', 'https://www.example.com')
