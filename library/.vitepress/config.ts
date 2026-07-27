import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TAW-RL",
  description: "The 900th Tactical Air Wing Resources Library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Library', link: '/home' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'CQB', link: '/training/cqb', items: [
            {
              text: 'CQB Principles', link: '/training/cqb/principles'
            },
            {
              text: 'The Fatal Funnel', link: '/training/cqb/fatal-funnel'
            },
            {
              text: 'Fields of Fire', link: '/training/cqb/fields-of-fire'
            },
            {
              text: 'Slicing the Pie', link: '/training/cqb/slicing-the-pie'
            },
            {
              text: 'Hallways', link: '/training/cqb/hallways'
            },
            {
              text: 'Verbal Signals', link: '/training/cqb/verbal-signals'
            },
          ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
