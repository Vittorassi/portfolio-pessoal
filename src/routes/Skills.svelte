<script lang="ts">
  import i18n from "../boot/i18n";

  import ProgressBar from "../components/ProgressBar.svelte";

  let firstLoad = true;

  const msg = i18n.options.messages;

  function findTranslation(path: String) {

    const pathParts = path.split('.');

    let foundTranslation = '';

    let msgBak = msg;

    try {
      for (let index = 0; index < pathParts.length; index++) {
        const part = pathParts[index];
        
        if (typeof msgBak[part] === 'object') {
          msgBak = msgBak[part];
        } else {
          return msgBak[part];
        }
      }
    } catch (error) {
      console.log('Translation not found', path);

      return path;
    }

    return foundTranslation;
  }

  const skillGroups = [
    {
      name: 'langs',
      i18nPath: 'SKILLS.LANGS',
      content: [
        {
          name: 'HTML',
          grade: 10
        },
        {
          name: 'CSS',
          grade: 9
        },
        {
          name: 'JavaScript',
          grade: 9
        },
        {
          name: 'SQL',
          grade: 8
        },
        {
          name: 'PHP',
          grade: 8
        },
        {
          name: 'C',
          grade: 5
        },
        {
          name: 'Java',
          grade: 4
        },
        {
          name: 'PL/SQL',
          grade: 6
        }
      ]
    },

    {
      name: 'frames',
      i18nPath: 'SKILLS.FRAMES',
      content: [
        {
          name: 'WordPress',
          grade: 8
        },
        {
          name: 'Quasar',
          grade: 8
        },
        {
          name: 'Svelte',
          grade: 7
        }
      ]
    },

    {
      name: 'libs',
      i18nPath: 'SKILLS.LIBS',
      content: [
        {
          name: 'jQuery',
          grade: 9
        },
        {
          name: 'VueJS',
          grade: 8
        },
        {
          name: 'React',
          grade: 6
        }
      ]
    }
  ];

</script>

<div class="main-skills flex column">
  {#each skillGroups as group}
    <div class="skill-group">
      <span class="group-name">{ findTranslation(group.i18nPath) }</span>

      <div class="content-wrap">
        {#each group.content as content}
          <ProgressBar progress_grade="{content.grade}" progress_name="{content.name}" />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  @use '../scss/global.scss';

  .main-skills {
    max-width: 75vw;
    margin: auto;
    padding-top: 3rem;

    .skill-group {
      .group-name {
        color: white;
      }

      .content-wrap {
        margin: 0.5rem 0 2rem 0;
        background-color: #282828;
        border-radius: 0.5rem;
        padding: 1.25rem;
      }

      &:last-child {
        margin-bottom: 3rem;
      }
    }
  }

</style>