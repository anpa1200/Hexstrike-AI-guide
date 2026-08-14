// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {execFileSync} from 'node:child_process';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

function gitLastModifiedDate(relativePath) {
  try {
    const value = execFileSync('git', ['log', '-1', '--format=%cs', '--', relativePath], {
      cwd: process.cwd(),
      encoding: 'utf8',
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : undefined;
  } catch {
    // A shallow export or a non-Git build must not invent a timestamp.
    return undefined;
  }
}

const homepageLastmod = gitLastModifiedDate('src/pages/index.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1200km',
  titleDelimiter: '|',
  tagline: 'AI-Driven Penetration Testing & Security Research',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://1200km.com',
  baseUrl: '/Hexstrike-AI-guide/',

  scripts: [{src: 'https://1200km.com/assets/docusaurus-ecosystem.js?v=20260614-3', defer: true}],
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
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anpa1200/Hexstrike-AI-guide/tree/main/',
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          createSitemapItems: async ({defaultCreateSitemapItems, ...params}) => {
            const items = await defaultCreateSitemapItems(params);
            return items.map((item) => {
              const pathname = new URL(item.url).pathname.replace(/\/+$/, '');
              const isHomepage = pathname === '/Hexstrike-AI-guide';
              return isHomepage && homepageLastmod
                ? {...item, lastmod: item.lastmod || homepageLastmod}
                : item;
            });
          },
        },
        gtag: {trackingID: 'G-TMTG21RVHM', anonymizeIP: true},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'authorized_labs_only',
        content: 'All techniques in this guide are for <strong>authorized lab environments only</strong>. Never test against systems you do not own or have explicit written permission to test.',
        backgroundColor: '#1e293b',
        textColor: '#f8b400',
        isCloseable: true,
      },
      image: 'img/hexstrike-articles/hexstrike-ai-a-force-multiplier-for-red-teams-and-a-dangerous-shift-in-the-threat-landscape/0-3aT5ccS08ZmUK0Y6.png',
      metadata: [
        {
          property: 'og:site_name',
          content: '1200km — Andrey Pautov Security Research',
        },
        {
          name: 'keywords',
          content: 'HexStrike AI, AI penetration testing, autonomous pentesting, MCP hacking, Cursor AI security, LLM attack chains, AI red team, pentesting automation, offensive AI, Andrey Pautov',
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'HexStrike AI',
        logo: {
          alt: '1200km',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/docs/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/anpa1200/Hexstrike-AI-guide',
            label: "Guide source (site owner's repo)",
            position: 'right',
          },
          {
            href: 'https://medium.com/@1200km',
            label: 'Medium',
            position: 'right',
          },
          {
            href: 'https://1200km.com/',
            label: 'Main Page',
            position: 'right',
            className: 'navbar-portfolio-btn',
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
              { label: 'Support This Project', href: 'https://www.paypal.com/donate/?business=W3XDKS7J9XTCG&no_recurring=0&item_name=Buy+me+a+coffee+%28PayPal%29+%E2%80%94+Keep+the+lab+running&currency_code=USD' },
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
