<script lang="ts">
  import Guess from '$lib/Entry/Guess.svelte'
  import { history, correctWord, guesses } from "../../stores/gameStore"
  $: lastCorrectWord = $history.length >= 1 ? $history[$history.length - 1].correctWord : null
</script>



{#if !!lastCorrectWord}
  <Guess input={lastCorrectWord} previous correctWord={lastCorrectWord} />
{/if}

{#each $guesses as guess}
  <Guess input={guess} correctWord={$correctWord} previous />
{/each}
 
<style lang="postcss">
</style>
 