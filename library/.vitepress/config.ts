import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ajtf-resources/",
  title: "TAW-RL",
  description: "The 900th Tactical Air Wing Resources Library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Training', link: '/training/' },
      { text: 'Regulations', link: '/regulations/' }
    ],

    sidebar: [
      {
        text: 'Training Materials',
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
      },
      {
        text: 'Regulations & Procedure',
        items: [
          { text: 'Uniforms', link: '/regulations/uniforms', items: [
            {
              text: '44th Mechanized Infantry Battalion', items: [
                {
                  text: '150th Shock Company', link: '/tba'
                },
                {
                  text: '320th Mechanized Infantry Company', link: '/tba'
                }
              ]
            },
            {
              text: '900th Tactical Air Wing', items: [
                {
                  text: '6th Combat Support Squadron', link: '/tba'
                },
                {
                  text: '200th Airborne Squadron', link: '/tba'
                }
              ]
            }
          ] }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
