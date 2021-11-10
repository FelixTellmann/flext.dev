import { FC } from "react";

type FooterProps = {
  logo: {
    alt: string;
    href: string;
    src: string;
  };
  nav: { href: string; name: string }[];
};

export const Footer: FC<FooterProps> = ({ nav, logo }) => {
  return <></>;
};
