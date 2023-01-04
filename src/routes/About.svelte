<script>
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
  }
</script>

<div class="about-wrap">
  <div class="main-info">
    <div class="profile-pic-wrap">
      <img
        class="profile-pic"
        src="src/assets/eu_mesmo.png"
        alt="Otávio Luis Vittorassi da Silva"
      >
    </div>
    <div class="about-me-info">
      <p class="about-me-text-main text-title">
        { i18n.options.messages.ABOUT.ABOUT_ME_1 }
      </p>
      <p class="about-me-text-main text-title">
        { i18n.options.messages.ABOUT.ABOUT_ME_2 }
      </p>
    </div>
  </div>
  <div class="sub-info">
    <div class="name-and-stuff">
      <p class="full-name text-title text-center">
        { i18n.options.messages.ABOUT.FULL_NAME }
      </p>
      <p class="age text-sub text-center">
        {getAge()} { i18n.options.messages.ABOUT.YEARS }
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss';
  .about-wrap {
    width: 60vw;
    margin: auto;
    padding-top: 50px;
    & .main-info {
      display: flex;
      flex-direction: row;
      & .profile-pic-wrap {
        padding-right: 30px;
        & .profile-pic {
          height: 200px;
          width: 200px;
          border-radius: 100%;
        }
      }

      & .about-me-info {
        align-self: center;
        & .about-me-text-main {
          text-align: justify;
        }
      }
    }

    & .sub-info {
      & .name-and-stuff {
        width: 200px;

        & .full-name {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
  }
</style>