<script lang="ts">
  import { theme } from '../../stores/store'
  export let letter = ''
  export let correctWord = ''
  export let index = 0

  let correct = false
  let misplaced = false
  let incorrect = false
  $: dark = $theme === 'dark'

  const updateClasses = word => {
    correct = false
    misplaced = false
    incorrect = false

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        if (i === index) {
          correct = true
        } else {
          misplaced = true
        }
      } else if (!word.includes(letter)) {
        incorrect = true
      }
    }
  }

  $: letter, updateClasses(correctWord)
</script>

<div class="letter" class:correct class:misplaced class:incorrect class:dark>
  {letter}
</div>

<style lang="postcss">
  .dark.letter {
   @apply bg-gray-700;
  }
  .letter {
    @apply font-bold border-2 p-3 w-16 h-16 text-center bg-gray-50 border-gray-800 rounded-lg uppercase bg-gray-50;
  }
  .letter.misplaced {
    @apply bg-yellow-300;
  }
  .dark.letter.letter.misplaced {
    @apply bg-yellow-700;
  }
  .letter.correct {
    @apply bg-green-300;
  }  
  .dark.letter.letter.correct {
    @apply bg-green-700;
  }
  .letter.incorrect {
    @apply bg-gray-300;
  }
  .dark.letter.incorrect {
    @apply bg-gray-900;
  }
</style>
