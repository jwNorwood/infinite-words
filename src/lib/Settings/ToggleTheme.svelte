<script lang="ts">
  import Button from '$lib/Button.svelte'
  import { theme } from '../../stores/store'
  $: dark = $theme === 'dark'
  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark'

    document.querySelector('html').classList.toggle('dark')
  }
</script>

<Button action={toggleTheme} {dark} light={!dark}>Toggle Theme</Button>
