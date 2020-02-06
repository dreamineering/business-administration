module.exports = {
  title: 'Gensolve',
  description: 'Create more value from time',
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  plugins: [['@vuepress/google-analytics', { ga: '' }], 'flowchart'],
  themeConfig: {
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: true,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: true,
    nav: [
      {
        text: 'Demo',
        link: '/demo/'
      },
      {
        text: 'Get Started',
        link: '/practice-journey/'
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
        text: 'Fundamentals',
        link: '/business-fundamentals/'
      },
      {
        text: 'Control Centre',
        link: '/control-centre/'
      },
      {
        text: 'Success Stories',
        link: '/success-stories/'
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
      './demo/',
      './practice-journey/',
      './features/',
      './roles/',
      './business-fundamentals/',
      './control-centre/',
      './success-stories/',
      './glossary/',
      './support/'
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
