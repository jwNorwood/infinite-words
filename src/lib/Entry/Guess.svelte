<script lang="ts">
  export let input = ''
  $: emptyLetters = 5 - (!!input.length ? input.length : 0)
  import Letter from '$lib/Entry/Letter.svelte'

  export let correctWord = ''
</script>

<div class="guess">
  {#each input as letter, i}
    <Letter {letter} {correctWord} index={i} />
  {/each}
  {#if emptyLetters > 0}
    {#each Array(emptyLetters) as empty}
      <Letter letter={''} />
    {/each}
  {/if}
</div>

<style lang="postcss">
  .guess {
    @apply flex gap-3 my-4;
  }
</style>
