<script>
  import { Router, Route } from 'svelte-navigator';

  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  import Home from './routes/Home.svelte';
  import About from './routes/About.svelte';
</script>

<Router>
  <Header />

  <div class="main-content">
    <Route path="/" component={Home} />

    <Route path="about" component={About} />
  </div>
  <Footer />
</Router>

<style lang="scss">
  // Global styles shall be written in css/globals/FILE_NAME.scss
  @use 'scss/global.scss';
  .main-content {
    width: 100%;
  }
</style>
