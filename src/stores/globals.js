import { writable } from 'svelte/store';

export const messageAlreadyShown = writable(false);
export const subMsgAlreadyShown = writable(false);
export const navMenus = writable({
  home: {
    route: '/',
    component: 'Home'
  },
  about: {
    route: 'about',
    component: 'About'
  }
})