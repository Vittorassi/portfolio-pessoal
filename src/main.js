import App from './App.svelte';
import * as boot from './boot';

boot.init();

const app = new App({
  target: document.getElementById('app')
});

export default app;
