import { writable } from 'svelte/store';

const DEFAULT_THEME = 'DARK';
const THEMES = ['DARK', 'LIGHT'];
const darkColors = {
  'background': '#121212',
  'nav-background': '#282828',
  'nav-background-hover': '#404040'
}

export let themeManager = writable();