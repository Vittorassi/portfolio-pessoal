<script>
  import { fade } from 'svelte/transition'

  let fadeMsg = "Welcome";
</script>


<div class="home-wrap">
  <div class="head-message">
    {#each fadeMsg as char, i}
      <span
        in:fade="{{delay: 1000 + i * 250, duration: 800}}"
      >
        {char}
      </span>
    {/each}
  </div>
</div>


<style lang="scss">
  .home-wrap {
    margin-top: 10px;

    & .head-message {
      text-align: center;
      color: white; //hard-coded-color
    }
  }
</style>