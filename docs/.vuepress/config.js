module.exports = {
  title: 'Gensolve',
  description: 'we value your time',
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  plugins: [['@vuepress/google-analytics', { ga: '' }], 'flowchart'],
  themeConfig: {
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: true,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: true,
    nav: [
      {
        text: 'Start your journey',
        link: '/journey/'
      },
      {
        text: 'Features',
        link: '/features/'
      },
      {
        text: 'Roles',
        link: '/roles/'
      },
      {
        text: 'Control',
        link: '/control/'
      },
      {
        text: 'Growth',
        link: '/growth/'
      },
      {
        text: 'Success',
        link: '/success/'
      },
      {
        text: 'Glossary',
        link: '/glossary/'
      },
      {
        text: 'Support',
        link: '/support/'
      }
    ],
    displayAllHeaders: true,
    sidebar: [
      '/',
      './journey/',
      './features/',
      './roles/',
      './control/',
      './growth/',
      './success/',
      './support/',
      './glossary/'
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      });
    }
  }
};
