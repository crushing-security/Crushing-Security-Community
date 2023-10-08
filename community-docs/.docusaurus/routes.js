import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ea2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b73'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '898'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '649'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '239'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '388'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b83'),
    exact: true
  },
  {
    path: '/blog/crush-the-oscp-exam',
    component: ComponentCreator('/blog/crush-the-oscp-exam', 'af9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '7b5'),
    exact: true
  },
  {
    path: '/blog/tags/exam-tips',
    component: ComponentCreator('/blog/tags/exam-tips', 'aeb'),
    exact: true
  },
  {
    path: '/blog/tags/non-technical-tips',
    component: ComponentCreator('/blog/tags/non-technical-tips', '95b'),
    exact: true
  },
  {
    path: '/blog/tags/official',
    component: ComponentCreator('/blog/tags/official', '36a'),
    exact: true
  },
  {
    path: '/blog/tags/oscp',
    component: ComponentCreator('/blog/tags/oscp', '442'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', '8e2'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b0c'),
    exact: true
  },
  {
    path: '/index.backup',
    component: ComponentCreator('/index.backup', '017'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '7d8'),
    exact: true
  },
  {
    path: '/resources',
    component: ComponentCreator('/resources', '2df'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fb4'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/create-a-page',
        component: ComponentCreator('/docs/create-a-page', 'baa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Resources/congratulations',
        component: ComponentCreator('/docs/Resources/congratulations', 'bf6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Resources/create-a-blog-post',
        component: ComponentCreator('/docs/Resources/create-a-blog-post', '596'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Resources/create-a-document',
        component: ComponentCreator('/docs/Resources/create-a-document', '898'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Resources/deploy-your-site',
        component: ComponentCreator('/docs/Resources/deploy-your-site', '3d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Resources/markdown-features',
        component: ComponentCreator('/docs/Resources/markdown-features', 'c4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/test',
        component: ComponentCreator('/docs/test', '397'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dfe'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
