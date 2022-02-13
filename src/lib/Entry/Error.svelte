<script lang="ts">
  export let error = ''
</script>

{#if !!error.length}
  <div class="error">
    {error}
  </div>
{/if}

<style lang="postcss">
  .error {
    @apply bg-red-400 font-bold text-center text-white p-3 rounded-lg capitalize;
  }
</style>
