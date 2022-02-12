<script lang="ts">
  import CreateAccount from '$lib/Forms/CreateAccount.svelte'
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  import { setContext } from 'svelte'
  setContext('currentPage', '/create-account')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
  image=""
/>

<Page>
  <h1 class="text-5xl font-extrabold mb-2">Sign Up</h1>
  <p class="text-xl mb-4">Create an account to play free poker.</p>
  <CreateAccount />
</Page>

<style lang="postcss">
</style>
