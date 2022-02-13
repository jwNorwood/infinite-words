<script lang="ts">
  import Letter from '$lib/Keyboard/Letter.svelte';
  import Delete from './Delete.svelte';
  import Enter from './Enter.svelte';
  export let handleSubmit = (e: KeyboardEvent) => {
    e.preventDefault();
    console.log(e.key);
  };
</script>

<div class="row">
  <Letter letter="q" />
  <Letter letter="w" />
  <Letter letter="e" />
  <Letter letter="r" />
  <Letter letter="t" />
  <Letter letter="y" />
  <Letter letter="u" />
  <Letter letter="i" />
  <Letter letter="o" />
  <Letter letter="p" />
</div>
<div class="row">
  <Letter letter="a" />
  <Letter letter="s" />
  <Letter letter="d" />
  <Letter letter="f" />
  <Letter letter="g" />
  <Letter letter="h" />
  <Letter letter="j" />
  <Letter letter="k" />
  <Letter letter="l" />
</div>
<div class="row">
  <Enter {handleSubmit} />
  <Letter letter="z" />
  <Letter letter="x" />
  <Letter letter="c" />
  <Letter letter="v" />
  <Letter letter="b" />
  <Letter letter="n" />
  <Letter letter="m" />
  <Delete />
</div>

<style lang="postcss">
  .row {
    @apply flex;
  }
</style>
