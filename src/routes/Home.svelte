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

  function downloadCV() {
    const link = document.createElement('a');

    link.href = '/vittorassi-otavio-cv.pdf';
    link.download = 'vittorassi-otavio-cv.pdf';
    link.click();
    link.remove();
  }
</script>


<div class="home-wrap">
  <div class="head-message">
    <div class="main-message text-main">
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
        <span class="my-name text-main">
          { i18n.options.messages.HOME.NAME }
        </span>
        <span class="my-description text-sub">
          { i18n.options.messages.HOME.WORK }
        </span>
      </div>
    {/if}
  </div>
  <div class="download-cv-wrap">
    {#if subMsgShown}
      <button in:fade="{{delay: 550, duration: 500}}" id="download-cv-btn" on:click={ () => downloadCV() }>{ i18n.options.messages.HOME.DOWNLOAD_CV }</button>
    {/if}
  </div>
</div>


<style lang="scss">
  @use '../scss/global.scss';
  .home-wrap {
    padding-top: 3rem;

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
      height: 45vh;

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

    & .download-cv-wrap {
      text-align: center;
      padding-bottom: 3rem;
      & #download-cv-btn {
        width: 30%;
        text-align: center;
        padding: 1rem;
        font-size: 1rem;
        color: white;
        background-color: #BB86FC;
        cursor: pointer;
        transition: all 250ms ease-in-out;
        border: none;
        text-decoration: none;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  @media only screen and (max-width: 426px) {
    #download-cv-btn {
      width: 70% !important;
    }
  }
</style>