<script>
  import SMB from "./SocialMediaButton.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons/index";
  import { subMsgAlreadyShown } from "../stores/globals";
  import { fade } from "svelte/transition";

  let subMsgShown;

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
        ® 2022 Otávio Luis Vittorassi da Silva all rights reserved | Social media:
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