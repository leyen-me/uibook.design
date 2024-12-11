import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "Discover the secrets of UI design at uibook.design. Elevate your skills from beginner to pro with our comprehensive guide. Learn intuitive design, latest trends, and essential tools.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
    },

    editLink: {
      pattern: "https://github.com/leyen-me/uibook.design/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Leyen",
    },

    docFooter: {
      prev: "next",
      next: "prev",
    },

    outline: {
      label: "Page Navigation",
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "Language",
    returnToTopLabel: "Return to Top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Theme",
    lightModeSwitchTitle: "Switch to Light Mode",
    darkModeSwitchTitle: "Switch to Dark Mode",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: "/guide/what-is-ui-design",
      activeMatch: "/guide/",
    },
    {
      text: "Navigation",
      link: "/navigation",
      activeMatch: "/navigation/",
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [{ text: "What is UI Design?", link: "what-is-ui-design" }],
    },
  ];
}
