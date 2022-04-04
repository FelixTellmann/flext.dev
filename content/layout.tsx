import { BsGithub } from "react-icons/bs";

export const LAYOUT = {
  logo: {
    src: "/logo.svg",
    href: "/",
    alt: "",
  },
  copyright: `© ${new Date().getFullYear()} Felix Tellmann. All rights reserved.`,
  social: [
    {
      name: "Github",
      href: "",
      icon: <BsGithub aria-hidden="true" />,
    },
  ],
  header: {
    nav: [
      {
        name: "Home",
        href: "/",
      },
      /*      {
        name: "UI",
        href: "/ui",
      },*/
      {
        name: "Blog",
        href: "/blog",
      },
      /*      {
        name: "About",
        href: "/about",
      },
      {
        name: "Uses",
        href: "/uses",
      },
      {
        requireAuth: true,
        name: "Daily",
        href: "/daily",
      },
      {
        name: "Snippets",
        href: "/snippets",
      },*/
    ],
    profile: [
      {
        name: "Your Profile",
        href: "/profile",
      },
      {
        name: "Settings",
        href: "/settings",
      },
      {
        name: "Sign out",
        href: "/auth/sign-out",
      },
    ],
  },
  footer: {
    nav: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Tools",
        href: "/",
      },
      {
        name: "Snippets",
        href: "/",
      },
    ],
  },
};
