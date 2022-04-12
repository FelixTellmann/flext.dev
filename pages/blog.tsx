// pages/index.js

import { Link } from "_client/link";
import { allBlogs, Blog } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  const posts = allBlogs
    .filter(({ publishedAt }) => publishedAt)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return { props: { posts } };
}

function PostCard(post: Blog) {
  return (
    <div className="mb-6">
      <time dateTime={post.publishedAt} className="block text-sm text-gray-600">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={`/posts/${post.slug}`}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

function isImage(url = "") {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

export default function Home({ posts = [] }: { posts: Blog[] }) {
  return (
    <div className="mx-auto max-w-[1440px] py-16 px-4 md:px-8">
      <Head>
        <title>Contentlayer Blog Example</title>
        {/* TODO: SEO HERE*/}
      </Head>

      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="">
            <div className="h-full overflow-hidden rounded border border-slate-300 border-opacity-75 h:shadow-xl">
              {isImage(post.image)
                ? <Image
                    className="w-full md:h-36 lg:h-48"
                    src={post.image ?? ""}
                    alt={post.imageAlt ?? post.title}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                  />
                : null}

              <div className="p-6">
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Typescript
                </div>
                <h2 className="mb-3 text-lg font-medium text-gray-900">The Catalyzer</h2>
                <p className="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                  tousled waistcoat.
                </p>
                <div className="flex flex-wrap items-center ">
                  <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                    Learn More arrow right icon
                  </a>
                  <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                    Eye icon 1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-400">
                    comment Icon 6
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
