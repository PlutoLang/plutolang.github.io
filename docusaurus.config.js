// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const fs = require('node:fs');
const remarkShikiTwoSlash = require('remark-shiki-twoslash').default;
const rehypeRaw = require('rehype-raw').default;

const rehypeRawOptions = {
  passThrough: ['mdxjsEsm', 'mdxJsxTextElement', 'mdxJsxFlowElement', 'mdxFlowExpression']
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pluto',
  tagline: 'A superset of Lua 5.4 with a focus on general-purpose programming.',
  url: 'https://pluto-lang.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  plugins: [require.resolve("@easyops-cn/docusaurus-search-local")],

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
          rehypePlugins: [[rehypeRaw, rehypeRawOptions]], // fix for MDX compilation courtesy of kamranayub: https://github.com/shikijs/twoslash/issues/125#issuecomment-2692325341
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'docusaurus-preset-shiki-twoslash',
      {
        theme: 'monokai-patched',
        langs: [
          'c',
          'cpp',
          'lua',
          {
            id: 'pluto',
            name: 'pluto',
            scopeName: 'source.pluto',
            path: require.resolve('./src/theme/Pluto.tmLanguage.json'),
          }
        ],
        themes: [
          require('./src/theme/monokai-patched.json'),
        ],
      }
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
            href: 'https://discord.gg/jASXBzdcnT',
            label: 'Discord',
            position: 'right',
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
        copyright: `Copyright © ${new Date().getFullYear()} PlutoLang. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  trailingSlash: false,
  scripts: [
    { src: '/custom.js', async: true }
  ]
};

module.exports = config;
