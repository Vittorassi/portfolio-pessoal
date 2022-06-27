<script lang="coffee">
    import { Link } from 'svelte-navigator'
</script>

<header>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
</header>

<style>
  header {
    background: #eeeeee;
    width: 100%;
    margin: 20px auto;
    padding: 20px;
    max-width: 1024px;
  }
</style>