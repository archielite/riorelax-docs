import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/riorelax/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/riorelax/releases' },
      { text: 'Upgrade Guide', link: '/riorelax/upgrade' },
    ]
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/riorelax/installation' },
      { text: 'SSL', link: '/riorelax/ssl' },
      { text: 'License', link: '/riorelax/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage',  link: '/riorelax/usage-homepage' },
      { text: 'Setup menus',  link: '/riorelax/usage-menus' },
      { text: 'Setup theme options',  link: '/riorelax/usage-theme-options' },
      { text: 'Widgets', link: '/riorelax/usage-widgets' },
      { text: 'Hotel booking', link: '/riorelax/hotel-booking' },
      { text: 'Custom CSS/JS', link: '/riorelax/usage-custom-css-js' },
      { text: 'Translation', link: '/riorelax/usage-translation' },
      { text: 'Multi-language', link: '/riorelax/usage-multi-language' },
      { text: 'Analytics', link: '/riorelax/usage-analytics' },
      { text: 'Media - Setup Amazon S3', link: '/riorelax/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/riorelax/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/riorelax/usage-media-wasabi' },
      { text: 'Setup email', link: '/riorelax/usage-email' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
