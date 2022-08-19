<script>
  import { subMsgAlreadyShown } from "../stores/globals";
  import { fade } from "svelte/transition";
  import NavMenu from "./NavMenu.svelte";

  let subMsgShown;

  subMsgAlreadyShown.subscribe((value) => {
    subMsgShown = value;
  });
</script>

{#if subMsgShown}
  <header
    class="main-header"
    in:fade={{delay: 500, duration: 1200}}
  >
    <NavMenu />
  </header>
{:else}
  <div style="height: 65px;"></div>
{/if}

<style lang="scss">
  @use '../scss/global.scss';

  header {
    background: #282828;
    width: 100%;
  }
</style>