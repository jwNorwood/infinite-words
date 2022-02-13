<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  import { setContext } from 'svelte'
  import Game from '$lib/Game.svelte'
  import ToggleTheme from '$lib/Settings/ToggleTheme.svelte'

  setContext('currentPage', '/')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
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
