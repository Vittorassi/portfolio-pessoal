import { writable } from 'svelte/store';

export const messageAlreadyShown = writable(false);
export const subMsgAlreadyShown = writable(false);
export const globalLanguage = writable('en-US');
export const globalRoutes = writable({
  HOME: 'Home',
  ABOUT: 'About',
  CONTACTS: 'Contacts'
});