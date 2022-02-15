<script lang="ts">
  import Guess from '$lib/Entry/Guess.svelte'
  import { fade, blur, fly, slide, scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { history, correctWord, guesses } from '../../stores/gameStore'
  $: lastCorrectWord = $history.length >= 1 ? $history[$history.length - 1].correctWord : null
</script>

{#if !!lastCorrectWord}
  {#each [lastCorrectWord] as correctWord, index (index)}
    <div animate:flip in:blur out:blur>
      <Guess input={correctWord} {correctWord} />
    </div>
  {/each}
{/if}

{#each $guesses as guess, i (i)}
  <div animate:flip in:slide out:fly>
    <Guess input={guess} correctWord={$correctWord} />
  </div>
{/each}
<style lang="postcss">
</style>
