<script>
    import { useNavigate } from 'svelte-navigator';

    const navigate = useNavigate();

    let activeMenu = 'home';
</script>

<header class="">
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
  header {
    background: #eeeeee;
    width: 100%;

    & .menu-nav-header {
      display: flex;
      justify-content: space-evenly;

      & .nav-item {
        width: 100%;
        padding: 20px 0;
        text-align: center;
        transition: 0.3s;
        transition-timing-function: ease-out;
        
        &:hover {
          cursor: pointer;
          background: #dddddd;
          transition: 0.3s;
          transition-timing-function: ease-in;
        }

        &::after {
          display:block;
          content: '';
          border-bottom: solid 3px #019fb6;
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