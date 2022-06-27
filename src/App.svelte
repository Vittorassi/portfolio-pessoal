<script lang="coffee">
  import { Router, Route } from 'svelte-navigator'

  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'

  import Home from './routes/Home.svelte'
  import About from './routes/About.svelte'
</script>

<Router>
  <Header />

  <main>
    <Route path="/">
      <Home />
    </Route>

    <Route path="about" component={About} />
  </main>
  <Footer />
</Router>

<style lang="scss">
  main {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1024px;
  }
</style>
