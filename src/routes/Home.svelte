<script>
  import { messageAlreadyShown } from '../stores/globals';
  import { fade } from 'svelte/transition'

  let fadeMsg = "Welcome.";
  let countMsg = "";
  let msgShown;
  
  messageAlreadyShown.subscribe((value) => {
    msgShown = value;
  });

  /**
  * @param {string} letter
  */
  function showMsg(letter) {
    countMsg += letter;

    if (countMsg === fadeMsg) {
      stopMsg();
    }

    return letter;
  }

  function stopMsg() {
    messageAlreadyShown.update((val) => !val);
  }
</script>


<div class="home-wrap">
  <div class="head-message">
    {#each fadeMsg as char, i}
      <span
        in:fade="{{delay: !msgShown ? 1000 + i * 250 : 0, duration: !msgShown ? 800 : 0}}"
      >
        {showMsg(char)}
      </span>
    {/each}
  </div>
</div>


<style lang="scss">
  .home-wrap {
    margin-top: 10px;

    & .head-message {
      text-align: center;
      color: white; // hard-coded-color
      font-size: 40px;
    }
  }
</style>