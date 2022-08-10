<script>
    import { useNavigate } from 'svelte-navigator';
    import { fade } from 'svelte/transition';

    const navigate = useNavigate();

    let activeMenu = 'home';
</script>

<header
  class="main-header"
>
  <div class="menu-nav-header">
    
    <div
      class="{ activeMenu === 'home' ? 'nav-item active' : 'nav-item' }"
      on:click="{
        () => {
          activeMenu = 'home';
          navigate('/', { state: {} });
        }
      }"
    >
      Home
    </div>

    <div
      class="{ activeMenu === 'about' ? 'nav-item active' : 'nav-item' }"
      on:click="{
        () => {
          activeMenu = 'about';
          navigate('about', { state: {} });
        }
      }"
    >
      About
    </div>
    
  </div>
</header>

<style lang="scss">
  @use '../scss/global.scss';

  header {
    background: #282828;
    width: 100%;
    animation-name: initial_fade;
    animation-duration: 6s;

    & .menu-nav-header {
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
  }
</style>