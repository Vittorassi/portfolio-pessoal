import { writable } from 'svelte/store';

export const messageAlreadyShown = writable(false);
export const subMsgAlreadyShown = writable(false);