export const routes = [
  {
    name: 'home',
    path: '/',
    content: async () => (await import("../routes/Home.svelte")).default,
    state: {}
  },
  {
    name: 'about',
    path: '/about',
    content: async () => (await import("../routes/About.svelte")).default,
    state: {}
  },
  {
    name: 'contacts',
    path: '/contacts',
    content: async () => (await import("../routes/Contacts.svelte")).default,
    state: {}
  },
]