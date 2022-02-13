<script lang="ts">
  import {
    correctWord,
    guesses,
    history,
    input,
    knownLetterPlacement,
    knownLetterExist,
    guessedLetters
  } from './../stores/gameStore'
  import PreviousGuesses from '$lib/Entry/PreviousGuesses.svelte'
  import Guess from '$lib/Entry/Guess.svelte'
  import Keyboard from '$lib/Keyboard/Keyboard.svelte'
  import dictionary from './dictionary'
  import Error from '$lib/Entry/Error.svelte'

  let error = ''

  const newWord = () => {
    return dictionary[Math.floor(Math.random() * dictionary.length)]
  }

  const isInDictionary = word => {
    return dictionary.includes(word)
  }

  $correctWord = newWord()

  const handleKeydown = event => {
    if (event.key === 'Backspace') {
      $input = $input.slice(0, -1)
    } else if (event.key === 'Enter') {
      handleSubmit($input)
    } else if ($input.length < 5 && event.key.length === 1) {
      $input += event.key
    }
  }

  const handleSubmit = word => {
    error = ''
    if (word.length === 5) {
      if (isInDictionary(word)) {
        $input = ''
        if (word === $correctWord) {
          $guesses.push(word)
          $history.push({
            guesses: $guesses,
            correctWord: $correctWord
          })
          $history = $history
          $guesses = []
          $correctWord = newWord()
          $knownLetterExist = []
          $knownLetterPlacement = []
          $guessedLetters = ""
        } else {
          $guessedLetters = $guessedLetters.concat(word)
          for (let i = 0; i < word.length; i++) {
            if ($correctWord.includes(word[i])) {
              $knownLetterExist = $knownLetterExist.concat(word[i])
              if (word[i] === $correctWord[i]) {
                $knownLetterPlacement = $knownLetterPlacement.concat(word[i])
              }
            }
          }
          $guesses.push(word)
          $guesses = $guesses
        }
      } else {
        error = 'not a word'
      }
    } else {
      error = 'word is not long enough'
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="wrapper">
  <PreviousGuesses />
  <Error {error} />
  <Guess input={$input} />
  <Keyboard {handleSubmit} />
</div>

<style lang="postcss">
  .wrapper {
    @apply flex flex-col items-center justify-center;
  }
</style>
