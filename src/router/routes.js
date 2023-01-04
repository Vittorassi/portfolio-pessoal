import { globalRoutes } from "../stores/globals";

let localRoutes = {};

globalRoutes.subscribe((value) => {
  localRoutes = value;
});

export const routes = [
  {
    name: () => localRoutes.HOME,
    path: '/',
    content: async () => (await import("../routes/Home.svelte")).default,
    state: {}
  },
  {
    name: () => localRoutes.ABOUT,
    path: '/about',
    content: async () => (await import("../routes/About.svelte")).default,
    state: {}
  },
  {
    name: () => localRoutes.CONTACTS,
    path: '/contacts',
    content: async () => (await import("../routes/Contacts.svelte")).default,
    state: {}
  },
]