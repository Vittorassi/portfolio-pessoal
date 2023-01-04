import { writable } from 'svelte/store';

export const messageAlreadyShown = writable(false);
export const subMsgAlreadyShown = writable(false);
export const language = writable('en-US');