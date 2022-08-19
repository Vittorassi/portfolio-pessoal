<script>
  import { onMount } from "svelte";
  import { Router, Route } from 'svelte-navigator';
  
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  
  import { routes } from "./router/routes";

  import { messageAlreadyShown, subMsgAlreadyShown } from './stores/globals';

  onMount(() => {
    const url = window.location.pathname;

    if (url !== '/') {
      subMsgAlreadyShown.update(() => true);
      messageAlreadyShown.update(() => true);
    }
  });
</script>

<Router>
  <div class="main-wrapper">
    <Header />
  
    <div class="main-content">
      {#each routes as route}
        {#await route.content() then Module}
          <Route path={route.path} component={Module} primary={false}/>
        {/await}
      {/each}
    </div>
    
    <Footer />
  </div>
</Router>

<style lang="scss">
  .main-content {
    width: 100%;
  }
</style>
