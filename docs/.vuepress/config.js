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
        text: 'Functionality',
        link: '/functionality/'
      },
      {
        text: 'Roles',
        link: '/roles/'
      },
      {
        text: 'Operations',
        link: '/operations/'
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
      './functionality/',
      './roles/',
      './operations/',
      './direction/',
      './success-stories/'
    ]
  }
};
