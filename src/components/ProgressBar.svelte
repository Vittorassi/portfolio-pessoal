<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  export let progress_name = null;
  export let progress_grade = null;

  const progress = tweened(0, {
    duration: 1000,
    easing: cubicOut
  });

  onMount(() => {
    progress.set(progress_grade/10);
  });
</script>

<div class="progress-bar-wrap">
  <div class="content-box">

    <div class="content-header flex row justify-between">
      <span class="content-name">{progress_name}</span>
      <span class="content-grade">{progress_grade}</span>
    </div>

    <div class="grade-box">
      <div class="grade-progress" style="width: {$progress * 100}%;" />
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss';

  .progress-bar-wrap {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0px;
    }
    
    & .content-box {
      margin-bottom: 0.5rem;
  
      &:last-child {
        margin-bottom: 0px;
      }
  
      & .content-header {
        color: white;
        margin-bottom: 1rem;
  
        & .content-name {
          justify-self: flex-end;
        }
  
        & .content-grade {
          align-self: flex-end;
        }
      }
  
      & .grade-box {
        height: 1rem;
        border-radius: 1.25rem;
  
        & .grade-progress {
          height: 0.5rem;
          border-radius: 1.25rem;
          background-color: #BB86FC;
        }
      }
    }
  }
</style>