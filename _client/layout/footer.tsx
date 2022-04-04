import { Link } from "_client/link";
import { LAYOUT } from "content/layout";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {LAYOUT.footer.nav.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-sm font-medium text-slate-400 h:text-slate-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {LAYOUT.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-slate-400 hover:text-slate-600">
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          <small>{LAYOUT.copyright}</small>
        </p>
      </div>
    </footer>
  );
};
