<script lang="ts">
  import i18n from '../boot/i18n';
  
  function getAge() {
    const myBirthday = new Date("2001-07-01T12:00:00");
    const today = new Date();

    let age = today.getFullYear() - myBirthday.getFullYear();
    const month = today.getMonth() - myBirthday.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < myBirthday.getDate())) {
      age--;
    }

    return age;
  };

  function changeCareer (career: string) {
    let careerName = careerOptions.find((careerOpt) => careerOpt.path === career).path;
    
    activeCareer = careerName;
  }

  const careerOptions = [
    {
      path: "CIMOL",
      name: "CIMOL"
    },
    {
      path: "ESTACIO",
      name: "Estácio"
    },
    {
      path: "GIGA_NET",
      name: "Giga Net"
    },
    {
      path: "W2A",
      name: "W2A Brasil"
    },
    {
      path: "MINHA_VISITA",
      name: "Minha Visita"
    }
  ];

  let activeCareer = 'CIMOL';
</script>

<div class="about-wrap">
  <div class="main-info flex row">

    <div class="profile-pic-wrap">
      <img
        class="profile-pic"
        src="/eu_mesmo.png"
        alt="Otávio Luis Vittorassi da Silva"
      >

      <div class="sub-info">
        <div class="name-and-stuff">
          <p class="full-name text-main text-center">
            { i18n.options.messages.ABOUT.FULL_NAME }
          </p>
          <p class="age text-sub text-center">
            {getAge()} { i18n.options.messages.ABOUT.YEARS }
          </p>
        </div>
      </div>
    </div>

    <div class="about-me-info">
      <p class="about-me-text-main text-main">
        { i18n.options.messages.ABOUT.ABOUT_ME_1 }
      </p>
      <p class="about-me-text-main text-main">
        { i18n.options.messages.ABOUT.ABOUT_ME_2 }
      </p>
    </div>

  </div>

  <div class="career-wrap">
    <div class="career-title text-main line-through">
      Career
    </div>
    
    <div class="career-main flex row">
      <div class="career-menu flex column">
        {#each careerOptions as option}
          <div class="{ activeCareer === option.path ? "career-option active" : "career-option" }" on:click={() => changeCareer(option.path)}>
            {option.name}
          </div>
        {/each}
      </div>

      <div class="career-text text-main flex column">
        <div class="title">
          { @html i18n.options.messages.ABOUT.CAREER[activeCareer].TITLE }
        </div>

        <div class="from-to">
          { i18n.options.messages.ABOUT.CAREER[activeCareer].FROM_TO }
        </div>

        <ul class="description">
          { #each i18n.options.messages.ABOUT.CAREER[activeCareer].DESCRIPTION as descPart}
            <li class="description-part">
              { descPart }
            </li>
          {/each }
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss';
  .about-wrap {
    width: 75vw;
    margin: auto;
    & .main-info {
      margin-top: 3rem;
      & .profile-pic-wrap {
        padding-right: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        & .profile-pic {
          height: 200px;
          width: 200px;
          border-radius: 100%;
        }

        & .sub-info {
          & .name-and-stuff {

            & .full-name {
              font-size: 1.5rem;
              font-weight: 600;
            }
          }
        }
      }

      & .about-me-info {
        align-self: center;
        & .about-me-text-main {
          text-align: justify;
        }
      }
    }

    & .career-wrap {
      padding: 2rem 0 2rem 0;
      & .career-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }

      & .career-main {
        gap: 0.5rem;
        & .career-menu {
          width: 20%;

          & .career-option {
            padding: 1rem;
            cursor: pointer;
            transition: 0.3s;
            transition-timing-function: ease-out;
            color: white; //hard-coded-color
            position: relative;

            &:hover {
              cursor: pointer;
              background: #404040; //hard-coded-color
              transition: 0.3s;
              transition-timing-function: ease-in;
            }

            &::after {
              display: block;
              content: "";
              position: absolute;
              background-color: #BB86FC;
              width: 3px;
              height: 100%;
              bottom: 0;
              left: 0;
              transform: scaleY(0);
              transition: transform 250ms ease-in-out;
            }

            &.active{
              &:after {
                transform: scaleY(1);
              }
            }
          }
        }

        & .career-text {
          width: 80%;

          & .title {
            font-size: 1.5rem;
          }

          & .from-to {
            color: #b5b5bf;
            font-style: italic;
            margin-bottom: 1rem;
          }

          & .description {

            & .description-part {
              padding-bottom: 1rem;
              
              &:last-child {
                padding-bottom: 0px;
              }
            }
          }
        }
      }
    }
  }
</style>