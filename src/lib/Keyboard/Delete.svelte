<script lang="ts">
  import { input } from '../../stores/gameStore'
  import { theme } from '../../stores/store'
  $: dark = $theme === 'dark'

  const deleteLetter = () => {
    console.log('delete')
    $input = $input.slice(0, -1)
  }
</script>

<div class="letter" class:dark on:click={deleteLetter}>Del</div>

<style lang="postcss">
  .letter {
    @apply bg-gray-100 w-16 h-10 rounded-md flex items-center justify-center m-1 capitalize font-bold;
  }
  .dark.letter {
    @apply bg-gray-700;
  }
</style>
