<script lang="ts">
  export let handleSubmit
</script>

<div class="letter" on:click={handleSubmit}>Enter</div>

<style lang="postcss">
  .letter {
    @apply bg-gray-100 w-16 h-10 rounded-md flex items-center justify-center m-1 capitalize font-bold;
  }
</style>
