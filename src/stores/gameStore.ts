import { writable } from 'svelte/store'

export const history = writable([])
export const correctWord = writable('')
export const input = writable('')
export const guesses = writable([])
export const knownLetterPlacement = writable([])
export const knownLetterExist = writable([])
export const guessedLetters = writable("")