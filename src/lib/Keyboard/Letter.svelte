<script lang="ts">
  export let letter = ''
  import {
    input,
    knownLetterPlacement,
    knownLetterExist,
    guessedLetters,
  } from '../../stores/gameStore'

  $: correctPosition = $knownLetterPlacement.includes(letter)
  $: inWord = $knownLetterExist.includes(letter)
  $: used = $guessedLetters.includes(letter)

  const clickLetter = () => {
    if ($input.length < 5) {
      $input = $input + letter
    }
  }
</script>

<div class="letter" class:inWord class:correctPosition class:used on:click={clickLetter}>
  {letter}
</div>

<style lang="postcss">
  .letter {
    @apply bg-gray-100 w-10 h-10 rounded-md flex items-center justify-center m-1 capitalize font-bold;
  }
  .used {
    @apply bg-gray-300;
  }
  .letter.inWord {
    @apply bg-yellow-200;
  }
  .letter.correctPosition {
    @apply bg-green-200;
  }
</style>
