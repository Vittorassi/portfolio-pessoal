<script>
  import i18n from '../boot/i18n';

  const msg = i18n.options.messages;
</script>

<div class="main-contact flex column items-center justify-center">
  <span class="contact-title">{msg.CONTACTS.TITLE}</span>

  <span class="contact-message">{msg.CONTACTS.SUB}</span>

  <span class="contact-quote">{msg.CONTACTS.QUOTE}</span>

  <div class="contact-submit">
    <a href="mailto:otavio.vittorassi@gmail.com" rel="noopener noreferrer" target="_blank" id="submit-btn">{msg.CONTACTS.SAY_HELLO}</a>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss';
  .main-contact {
    // margin: 18px auto 40px;
    // max-width: 1024px;
    // padding: 0 1rem;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & .contact-title {
      font-size: 2.5rem;
      color: white;
      font-weight: 600;
      // margin-top: 2rem;
    }

    & .contact-message {
      // margin: 2rem 1rem 0.5rem 1rem;
      color: white;
      font-size: 1.25rem;
      text-align: center;
      padding-top: 2rem;
    }

    & .contact-quote {
      // margin-bottom: 2rem;
      color: #b5b5bf;
      font-style: italic;
      text-align: center;
      padding-bottom: 2rem;
    }

    & .contact-submit {
        width: 100%;
        display: flex;
        justify-content: center;

        & #submit-btn {
          width: 50%;
          text-align: center;
          padding: 1rem;
          font-size: 1rem;
          color: white;
          background-color: #BB86FC;
          cursor: pointer;
          transition: all 250ms ease-in-out;
          border: none;
          text-decoration: none;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
  }
</style>