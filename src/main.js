import App from './App.svelte';
import * as boot from './boot';

const app = new App({
  target: document.getElementById('app')
});

setTimeout(() => {
  boot.init();
}, 1);

export default app;
