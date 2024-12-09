import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jrsn.ppun",
  description: "Just a portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'About Me', link: '/about' },         
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jerson2000' }
    ]
  }
})
