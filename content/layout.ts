export const LAYOUT = {
  logo: {
    src: "/logo.svg",
    href: "/",
    alt: "",
  },
  header: {
    nav: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "UI",
        href: "/ui",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
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
      },
    ],
    profile: {
      nav: [
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
