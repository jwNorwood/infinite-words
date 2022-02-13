<script>
  import Nav from '$lib/Nav.svelte'
  import NavItem from '$lib/NavItem.svelte'
  import { getContext } from 'svelte'
  const currentPage = getContext('currentPage')
</script>

<Nav>
  <NavItem href="/" active={currentPage === "/"} name="Home" />
</Nav>
