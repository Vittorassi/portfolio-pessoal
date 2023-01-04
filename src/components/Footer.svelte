<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons/index";
  import { fade } from "svelte/transition";
  
  import SMB from "./SocialMediaButton.svelte";
  import i18n from "../boot/i18n";
  import { subMsgAlreadyShown } from "../stores/globals";

  let subMsgShown;
  let selectedLang = i18n.options.locale;

  subMsgAlreadyShown.subscribe((value) => {
    subMsgShown = value;
  });
</script>

{#if subMsgShown}
  <footer
    class="main-footer"
    in:fade={{delay: 500, duration: 1200}}
  >
    <div
      class="footer-notes text-title flex justify-center text-center">
      <p class="copyright-note">
        { i18n.options.messages.FOOTER.COPYRIGHT }
      </p>
      <span class="social-media-buttons flex">
        <SMB
          btn_link="https://twitter.com/OVittorassi"
          btn_name="Twitter"
        >
          <Fa icon={faTwitter} slot="btn_icon" />
        </SMB>
        <SMB
          btn_link="https://github.com/Vittorassi"
          btn_name="GitHub"
        >
          <Fa icon={faGithub} slot="btn_icon" />
        </SMB>
        <SMB
          btn_link="https://www.instagram.com/otaviovittorassi"
          btn_name="Instagram"
        >
          <Fa icon={faInstagram} slot="btn_icon" />
        </SMB>
      </span>
    </div>
    <div class="change-language-wrap">
      <select bind:value={ selectedLang } on:change={() => i18n.changeLanguage(selectedLang)}>
        {#each i18n.allowedLanguages as lang}
          <option value={ lang }>
            { lang }
          </option>
        {/each}
      </select>
    </div>
  </footer>
{/if}

<style lang="scss">
  @use '../scss/global.scss';
  footer {
    background: #282828; //hard-coded-color
    width: 100%;
    padding: 20px 0;
    position: absolute;
    bottom: 0;

    & .footer-notes {
      margin: 0;

      & .copyright-note {
        margin: 0;
        padding-right: 5px;
      }
    }
  }
</style>