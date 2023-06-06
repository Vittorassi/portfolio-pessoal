<script>
  export let btn_link = null;
  export let btn_name = null;
</script>

{#if btn_link}
  <div class="social-media-button">
    <div class="btn-wrap">
      <a href="{btn_link}" class="text-main" target="_blank">
        <slot name="btn_icon" />
        {btn_name}
      </a>
    </div>
  </div>
{/if}

<style lang="scss">
  @use '../scss/global.scss';
  a {
    text-decoration: none;
    transition: 0.35s;

    &:hover {
      color: #B5B5BF;
      transition: 0.35s;
    }
  }

  .social-media-button {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
</style>