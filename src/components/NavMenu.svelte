<script>
  import { useNavigate } from 'svelte-navigator';

  import { routes } from "../router/routes";

  const navigate = useNavigate();

  let activeMenu = routes.find(route => route.path === window.location.pathname).path;
</script>

<div class="menu-nav-header">

  {#each routes as route}
    <div
      class="{ activeMenu === route.path ? 'nav-item active' : 'nav-item' }"
      on:click="{
        () => {
          activeMenu = route.path;
          navigate(route.path, { state: {} });
        }
      }"
    >
      {route.name.replace(/^\w/, (c) => c.toUpperCase())}
    </div>
  {/each}
  
</div>

<style lang="scss">
  @use '../scss/global.scss';
  .menu-nav-header {
    display: flex;
    justify-content: space-evenly;

    & .nav-item {
      width: 100%;
      padding: 20px 0;
      text-align: center;
      transition: 0.3s;
      transition-timing-function: ease-out;
      color: white; //hard-coded-color
      
      &:hover {
        cursor: pointer;
        background: #404040; //hard-coded-color
        transition: 0.3s;
        transition-timing-function: ease-in;
      }

      &::after {
        display:block;
        content: '';
        border-bottom: solid 3px #BB86FC; //hard-coded-color
        transform: scaleX(0) translateY(20px);
        transition: transform 250ms ease-in-out;
      }

      &.active{
        &:after {
          transform: scaleX(1) translateY(20px);
        }
      }

      & :global(a) {
        text-decoration: none;
      }
    }
  }
</style>