module.exports = {
  title: 'Gensolve',
  description: 'Practice Management Solutions',
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  plugins: [['@vuepress/google-analytics', { ga: '' }]],
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
        text: 'Journey',
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
      './support/'
    ]
  }
};
