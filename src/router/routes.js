import i18n from "../boot/i18n"

export const routes = [
  {
    name: i18n.options.routes.HOME,
    path: '/',
    content: async () => (await import("../routes/Home.svelte")).default,
    state: {}
  },
  {
    name: i18n.options.routes.ABOUT,
    path: '/about',
    content: async () => (await import("../routes/About.svelte")).default,
    state: {}
  },
  {
    name: i18n.options.routes.CONTACTS,
    path: '/contacts',
    content: async () => (await import("../routes/Contacts.svelte")).default,
    state: {}
  },
]