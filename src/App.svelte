<script>
  import { onMount } from "svelte";
  import { Router, Route } from 'svelte-navigator';
  
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  
  import { routes } from "./router/routes";

  import { globalLanguage, messageAlreadyShown, subMsgAlreadyShown } from './stores/globals';

  let currLang = 'en-US';

  globalLanguage.subscribe((value) => {
    currLang = value;
  });

  onMount(() => {
    const url = window.location.pathname;

    if (url !== '/') {
      subMsgAlreadyShown.update(() => true);
      messageAlreadyShown.update(() => true);
    }
  });
</script>

{#key currLang}
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
{/key}


<style lang="scss">
  .main-wrapper {
    height: calc(100% - 9.5rem);

    & .main-content {
      width: 100%;
      background-color: #181818;
      min-height: 100%;
      position: relative;
    }
  }
</style>
