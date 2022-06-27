<script lang="coffee">
logToConsole = (msg) => console.log(msg)
</script>

<div class="about-title">This is an about page</div>

<button on:click="{logToConsole('Funciona')}">Click me</button>

<style lang="scss">
.about-title {
  font-size: 20px;
}
</style>