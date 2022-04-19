import { Link } from "_client/link";
import { FC, ReactNode } from "react";

export type ContentBlockProps = {
  alignment?: "left" | "center" | "right";
  caption?: string;
  description?: string;
  divider?: boolean;
  icon?: ReactNode;
  primaryAction?: {
    name: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    name: string;
    href?: string;
    onClick?: () => void;
  };
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  title?: string;
};
export const ContentBlock: FC<ContentBlockProps> = ({
  title,
  caption,
  icon,
  description,
  primaryAction,
  secondaryAction,
  divider = false,
  size = "base",
  alignment = "left",
}) => {
  return (
    <section className="max-w-[440px]">
      <header>
        {icon ? <i>{caption}</i> : null}
        {caption
          ? <h2 className="color mb-1 text-[15px] font-semibold text-primary-500">{caption}</h2>
          : null}
        {title
          ? <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 d:text-white sm:text-4xl sm:tracking-normal">
              {title}
            </h1>
          : null}
      </header>
      {description ? <p className="mb-6 text-[15px] leading-relaxed">{description}</p> : null}
      <footer>
        {primaryAction
          ? <Link href={primaryAction.href} onClick={primaryAction.onClick}>
              {primaryAction.name}
            </Link>
          : null}
        {secondaryAction
          ? <Link href={secondaryAction.href} onClick={secondaryAction.onClick}>
              {secondaryAction.name}
            </Link>
          : null}
      </footer>
    </section>
  );
};
