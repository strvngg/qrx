import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "qrx",
  description: "Editing Resources",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content Creators', link: '/content-creators' }
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'Content Creators', link: '/content-creators' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/' }
    ]
  }
})
