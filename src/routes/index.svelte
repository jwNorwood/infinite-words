<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  import { setContext } from 'svelte'
  import Game from '$lib/Game.svelte'
  import ToggleTheme from '$lib/Settings/ToggleTheme.svelte'

  setContext('currentPage', '/')
</script>

<Meta
  description="Wordle clone with unlimited attempts and unlimited words, with a dark mode that is easy on your eyes. Based on the popular daily word guessing game game."
  title="Wordle Infinite"
  keywords="casual game, word game, wordle"
  image=""
/>

<Page>
  <div>
    <ToggleTheme />
  </div>
  <Game />
</Page>

<style lang="postcss">
</style>
