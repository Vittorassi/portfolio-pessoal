<script>
  import SMB from "./SocialMediaButton.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/index";
</script>

<footer class="main-footer">
  <p
    class="footer-notes">
    ® 2022 Otávio Luis Vittorassi da Silva all rights reserved | Social media:
    <SMB
      btn_link="https://twitter.com/OVittorassi"
      btn_name="Twitter"
    >
      <Fa icon={faTwitter} slot="btn_icon" />
    </SMB>
  </p>
</footer>

<style lang="scss">
  @use '../scss/global.scss';
  footer {
    background: #282828; //hard-coded-color
    width: 100%;
    padding: 20px 0;
    position: absolute;
    bottom: 0;
    animation-name: initial_fade;
    animation-duration: 6s;

    & .footer-notes {
      margin: 0;
      text-align: center;
      color: white; //hard-coded-color
    }
  }
</style>