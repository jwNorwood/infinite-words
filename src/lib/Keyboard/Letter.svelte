<script lang="ts">
  export let letter = ''
  import { theme } from '../../stores/store'
  import {
    input,
    knownLetterPlacement,
    knownLetterExist,
    guessedLetters,
  } from '../../stores/gameStore'
  
  $: dark = $theme === 'dark'

  $: correctPosition = $knownLetterPlacement.includes(letter)
  $: inWord = $knownLetterExist.includes(letter)
  $: used = $guessedLetters.includes(letter)

  const clickLetter = () => {
    if ($input.length < 5) {
      $input = $input + letter
    }
  }
</script>

<div class="letter" class:inWord class:correctPosition class:used class:dark on:click={clickLetter}>
  {letter}
</div>

<style lang="postcss">
  .letter {
    @apply bg-gray-100 w-8 h-10 rounded-md flex items-center justify-center m-1 capitalize font-bold;
  }
  .dark.letter {
    @apply bg-gray-700;
  }
  .used {
    @apply bg-gray-300;
  }
  .dark.used {
    @apply bg-gray-900;
  }
  .letter.inWord {
    @apply bg-yellow-200;
  }
  .dark.letter.inWord {
    @apply bg-yellow-700;
  }
  .letter.correctPosition {
    @apply bg-green-200;
  }
  .dark.letter.correctPosition {
    @apply bg-green-700;
  }
</style>
