<script lang="ts">
  export let handleSubmit
  
  import { theme } from '../../stores/store'
  $: dark = $theme === 'dark'
</script>

<div class="letter" class:dark on:click={handleSubmit}>Enter</div>

<style lang="postcss">
  .letter {
    @apply bg-gray-100 w-16 h-10 rounded-md flex items-center justify-center m-1 capitalize font-bold;
  }
  .dark.letter {
    @apply bg-gray-700;
  }
</style>
