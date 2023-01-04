<script>
  import { messageAlreadyShown, subMsgAlreadyShown } from '../stores/globals';
  import { fade, fly } from 'svelte/transition';
  import i18n from '../boot/i18n';

  let fadeMsg = i18n.options.messages.HOME.WELCOME;
  let countMsg = "";
  let msgShown;
  let subMsgShown;
  
  messageAlreadyShown.subscribe((value) => {
    msgShown = value;
  });

  subMsgAlreadyShown.subscribe((value) => {
    subMsgShown = value;
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

  function stopSubMsg() {
    subMsgAlreadyShown.update(() => true);
  }

  function stopMsg() {
    messageAlreadyShown.update(() => true);
  }
</script>


<div class="home-wrap">
  <div class="head-message">
    <div class="main-message text-title">
      {#each fadeMsg as char, i}
        <span
          in:fade="{{delay: !msgShown ? 1000 + i * 250 : 0, duration: !msgShown ? 800 : 0}}"
          on:introend="{() => showMsg(char)}"
        >
          {char}
        </span>
      {/each}
    </div>
    {#if msgShown}
      <div
        in:fly="{{delay: !subMsgShown ? 500 : 0, y: -20, duration: !subMsgShown ? 800 : 0 }}"
        class="sub-message text-sub"
      >
        <span
          in:fade="{{ delay: 0, duration: !subMsgShown ? 800 : 0 }}"
          on:introend="{() => stopSubMsg()}"
        >
          { i18n.options.messages.HOME.SUB_MSG }
        </span>
      </div>
    {/if}
  </div>
  <div class="main-home-content flex items-center">
    {#if subMsgShown}
      <div
        in:fade="{{delay: 550, duration: 500}}"
        class="main-home-wrapper flex column items-center"
      >
        <span class="my-name text-title">
          { i18n.options.messages.HOME.NAME }
        </span>
        <span class="my-description text-sub">
          { i18n.options.messages.HOME.WORK }
        </span>
      </div>
    {/if}
  </div>
</div>


<style lang="scss">
  @use '../scss/global.scss';
  .home-wrap {
    padding-top: 50px;

    & .head-message {
      text-align: center;

      & .main-message {
        font-size: 30px;
      }

      & .sub-message {
        font-size: 18px;
      }
    }

    & .main-home-content {
      height: 65vh;

      & .main-home-wrapper {
        width: 100%;

        & .my-name {
          font-size: 40px;
        }

        & .my-description {
          font-size: 30px;
        }
      }
    }
  }
</style>