<script>
  export let btn_link = null;
  export let btn_name = null;
</script>

{#if btn_link && btn_name}
  <div class="social-media-button">
    <div class="btn-wrap">
      <a href="{btn_link}">
        <slot name="btn_icon" />
        {btn_name}
      </a>
    </div>
  </div>
{/if}

<style>
  
</style>