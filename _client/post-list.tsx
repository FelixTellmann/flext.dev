import { EyeIcon } from "@heroicons/react/solid";
import { Link } from "_client/link";
import { isImage } from "_client/utils/is-image";
import { Blog } from "contentlayer/generated";
import Image from "next/image";
import { FC, useCallback } from "react";
import { BiUpvote } from "react-icons/bi";
import { BsBook, BsChatSquareText } from "react-icons/bs";
import { SiJavascript, SiTypescript } from "react-icons/si";

const PostPreview: FC<Blog> = ({
  slug,
  tags,
  tldr,
  type,
  image,
  imageAlt,
  publishedAt,
  readingTime,
  wordCount,
  summary,
  title,
  icon,
}) => {
  const handleUpvote = useCallback(() => {
    console.log("handleUpvote");
  }, []);

  const viewComments = useCallback(() => {
    console.log("viewComments");
  }, []);
  return (
    <article className="w-full max-w-xs pt-6">
      <Link
        key={slug}
        href={`/posts/${slug}`}
        className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 pb-2 pt-8 hfa:border-slate-400/60 d:border-slate-700/75 d:bg-dark-card d:hfa:border-slate-500/75"
      >
        <header className="flex flex-1 flex-col">
          <figure className="absolute top-0 left-5 flex h-11 w-11  -translate-y-1/2 items-center justify-center rounded-full border border-primary-200 bg-primary-100 text-primary-300 d:border-slate-800 d:bg-dark-bg2 d:text-primary-400 group-hfa:text-primary-400 dark:group-hfa:text-primary-300">
            {icon
              ? {
                  typescript: <SiTypescript className="h-6 w-6 rounded-full" />,
                  javascript: <SiJavascript />,
                }[icon]
              : null}
          </figure>
          <h1 className="font-semibold leading-tight">{title}</h1>
          <div className="flex-1" />
          <small className="mt-2 flex whitespace-nowrap text-slate-500">
            <time>{publishedAt}</time>
            <span className="flex items-center">
              <BsBook className="mx-2" />
              {readingTime.text}
            </span>
          </small>
        </header>
        <main className="relative  mt-1 h-40  overflow-hidden rounded-md">
          <Image
            className="w-full"
            src={image && isImage(image) ? image : "/images/ts-1.jpg"}
            alt={imageAlt ?? title}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            quality={20}
          />
        </main>
        <footer className="mt-2 flex justify-between text-slate-500">
          <div className="flex min-w-[60px] justify-center">
            <button
              className="flex h-7 w-7 items-center justify-center rounded-md hfa:bg-teal-300 hfa:text-slate-900"
              type="button"
              aria-label="upvote"
              onClick={handleUpvote}
            >
              <BiUpvote />
            </button>
          </div>
          <div className="flex min-w-[60px] justify-center">
            <button
              className="flex h-7 w-7 items-center justify-center rounded-md hfa:bg-primary-300 hfa:text-slate-900"
              type="button"
              aria-label="comments"
              onClick={viewComments}
            >
              <BsChatSquareText />
            </button>
          </div>
          <div className="flex min-w-[60px] items-center">
            <div className="mr-2 text-xs">123</div>
            <EyeIcon className="h-4" />
          </div>
        </footer>
      </Link>
    </article>
  );
};
export const PostList: FC<{ posts?: Blog[] }> = ({ posts = [] }) => {
  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) => (
          <>
            <PostPreview key={post.title} {...post} />
            <PostPreview key={post.title} {...post} />
          </>
        ))}
      </div>
    </section>
  );
};
