import { Link } from "_client/link";
import { FOOTER } from "content/footer";
import { SOCIAL } from "content/social";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {FOOTER.nav.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-sm font-medium h:text-slate-900 d:hfa:text-white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center gap-3 text-lg">
          {SOCIAL.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-slate-400 h:text-slate-600 d:hfa:text-white"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="mt-4 flex items-center justify-center text-center text-base text-slate-400">
          <small>{FOOTER.copyright}</small>
          <iframe
            className=" ml-4 opacity-70 hfa:opacity-100"
            src="https://ghbtns.com/github-btn.html?user=FelixTellmann&amp;repo=flext.dev&amp;type=star&amp;count=true&amp;size=small"
            frameBorder="0"
            scrolling="0"
            width="100"
            height="22px"
            title=""
          ></iframe>
        </p>
      </div>
    </footer>
  );
};
