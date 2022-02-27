import { Checkbox } from "_client/form/checkbox";
import { Divider } from "_client/form/divider";
import { IconButton } from "_client/form/icon-button";
import { TextInput } from "_client/form/text-input";
import { FC, useRef } from "react";
import { IoLogoGithub, IoLogoGoogle, IoLogoTwitter } from "react-icons/io5";
import NextLink from "next/link";

type indexProps = {};

const Index: FC<indexProps> = ({}) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  return <>home</>;
};

export default Index;
