// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const codeTheme = require('./src/theme/monokai');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pluto',
  tagline: 'A superset of Lua 5.4 — with unique features, optimizations, and improvements.',
  url: 'https://pluto-lang.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PlutoLang', // Usually your GitHub org/user name.
  projectName: 'Pluto', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pluto',
        logo: {
          alt: 'Pluto Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/PlutoLang/Pluto',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Ryan Starrett. Built with Docusaurus.`,
      },
      prism: {
        theme: codeTheme,
        additionalLanguages: ['cpp'],
        magicComments: [
          {
            className: 'code-block-error-line',
            line: 'ERROR:',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  trailingSlash: false
};

module.exports = config;
