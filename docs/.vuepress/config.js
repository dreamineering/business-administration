module.exports = {
  title: 'Gensolve',
  description: 'Practice Management Solutions',
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  plugins: [['@vuepress/google-analytics', { ga: '' }]],
  themeConfig: {
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
      }
    ],
    displayAllHeaders: true,
    sidebar: [
      '/',
      './practice-journey/',
      './features/',
      './roles/',
      './foundations/',
      './direction/',
      './success-stories/'
    ]
  }
};
