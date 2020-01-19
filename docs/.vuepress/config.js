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
        link: '/fundamentals/'
      },
      {
        text: 'Direction',
        link: '/direction/'
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
      './practice-journey/',
      './features/',
      './roles/',
      './fundamentals/',
      './direction/',
      './success-stories/',
      './support/'
    ]
  }
};
