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
      handleSubmit()
    } else if ($input.length < 5 && event.key.length === 1) {
      $input += event.key
    }
  }

  const handleSubmit = () => {
    error = ''
    if ($input.length === 5) {
      if (isInDictionary($input)) {
        if ($input === $correctWord) {
          $guesses.push($input)
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
          $guessedLetters = $guessedLetters.concat($input)
          for (let i = 0; i < $input.length; i++) {
            if ($correctWord.includes($input[i])) {
              $knownLetterExist = $knownLetterExist.concat($input[i])
              if ($input[i] === $correctWord[i]) {
                $knownLetterPlacement = $knownLetterPlacement.concat($input[i])
              }
            }
          }
          $guesses.push($input)
          $guesses = $guesses
        }
        $input = ''
      } else {
        error = 'not a word'
      }
    } else {
      error = `${$input} is not long enough`
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
