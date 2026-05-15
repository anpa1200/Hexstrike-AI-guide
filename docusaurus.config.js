// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HexStrike AI',
  tagline: 'AI-Driven Penetration Testing & Security Research',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://anpa1200.github.io',
  baseUrl: '/Hexstrike-AI-guide/',

  organizationName: 'anpa1200',
  projectName: 'Hexstrike-AI-guide',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anpa1200/Hexstrike-AI-guide/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/anpa1200/Hexstrike-AI-guide/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'HexStrike AI',
        logo: {
          alt: 'HexStrike AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/anpa1200/Hexstrike-AI-guide',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://medium.com/@1200km',
            label: 'Medium',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting Started',
            items: [
              { label: 'Installation', to: '/docs/getting-started/installation' },
              { label: 'Overview', to: '/docs/getting-started/overview' },
              { label: 'Full PT Guide', to: '/docs/full-pt-walkthroughs/full-pt-guide' },
            ],
          },
          {
            title: 'Attack Techniques',
            items: [
              { label: 'Network Discovery', to: '/docs/attack-techniques/network-discovery' },
              { label: 'Web Application', to: '/docs/attack-techniques/web-application' },
              { label: 'Active Directory', to: '/docs/attack-techniques/active-directory' },
              { label: 'Password Recovery', to: '/docs/password-recovery/modern-cracking' },
            ],
          },
          {
            title: 'Author',
            items: [
              { label: 'About & Support', to: '/docs/about' },
              { label: 'Medium', href: 'https://medium.com/@1200km' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/andrey-pautov' },
              { label: 'GitHub', href: 'https://github.com/anpa1200' },
              { label: '☕ Buy Me a Coffee', href: 'https://paypal.me/anpa1200' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andrey Pautov. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
