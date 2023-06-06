<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons/index";
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
      class="footer-notes text-main flex items-center text-center">
      <div>
        <p class="designed-by">
          Designed & Built by Otávio Vittorassi
        </p>
        <p class="copyright-note">
          Copyright © 2023. All rights are reserved
        </p>
      </div>

      <div class="social-lang">
        <span class="social-media-buttons flex">
          <SMB
            btn_link="https://www.linkedin.com/in/otavio-vittorassi-da-silva/"
            btn_name=""
          >
            <Fa icon={faLinkedin} slot="btn_icon" />
          </SMB>
          <SMB
            btn_link="https://github.com/Vittorassi"
            btn_name=""
          >
            <Fa icon={faGithub} slot="btn_icon" />
          </SMB>
          <SMB
            btn_link="https://www.instagram.com/otaviovittorassi"
            btn_name=""
          >
            <Fa icon={faInstagram} slot="btn_icon" />
          </SMB>
        </span>

        <div class="change-language-wrap">
          <select bind:value={ selectedLang } on:change={() => i18n.changeLanguage(selectedLang)}>
            {#each i18n.allowedLanguages as lang}
              <option value={ lang }>
                { lang }
              </option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </footer>
{/if}

<style lang="scss">
  @use '../scss/global.scss';

  footer {
    background: #282828; //hard-coded-color
    width: 100%;

    & .footer-notes {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem 2rem;

      & .designed-by {
        margin: 0;
        font-size: 1.2rem;
      }

      & .copyright-note {
        margin: 0;
        color: #b5b5bf;
        font-style: italic;
      }

      & .social-lang {
        & .social-media-buttons {
          align-items: center;
          font-size: 1.5rem;
        }

        & .change-language-wrap {
        }
      }
    }
  }
</style>