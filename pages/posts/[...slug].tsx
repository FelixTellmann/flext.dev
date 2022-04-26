import { Badge } from "_client/badge";
import { CodeComponent } from "_client/code-component";
import { useMutation } from "_client/hooks/_useTRPC";
import usePosts from "_client/hooks/use-posts";
import { usePostStore } from "_client/stores/posts-store";
import { isImage } from "_client/utils/is-image";
import { SEO } from "content/seo";
import { allBlogs, Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import fs from "fs";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { FC, useEffect } from "react";

export const getStaticPaths = async () => {
  const paths = allBlogs.map((post) => ({ params: { slug: post.slug.split("/") } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { post?: Blog },
  ParsedUrlQuery & { slug: string[] }
> = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug.join("/"));
  if (post?.body?.code) {
    post.body.code = post.body.code.replace(
      /(['"`])@import\(([^)]*)\)\1/gi,
      (match, _, filename) => {
        // console.log(match, _, filename);
        const file = fs.readFileSync(filename, { encoding: "utf-8" });
        console.log();
        return `\`${file}\``;
      }
    );
  }
  return {
    props: {
      post,
    },
  };
};

const PostLayout: FC<{ post: Blog }> = ({ post }) => {
  const [posts] = usePostStore();
  const { addView, addLike } = usePosts();

  useEffect(() => {
    if (post?.slug) {
      addView(post.slug);
    }
  }, []);

  if (!post) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <article className="mx-auto max-w-[650px] py-16 px-4 sm:px-6">
        <header className="mb-8">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">{post?.title}</h1>
          <p className="flex items-center gap-2 text-sm text-slate-600 d:text-slate-400">
            <Image
              alt={SEO.author}
              src={SEO.avatar}
              width={28}
              height={28}
              className="rounded-full"
            />
            <span>{SEO.author} /</span>
            <time dateTime={post?.publishedAt}>
              {Date.parse(post?.publishedAt)
                ? format(new Date(post?.publishedAt), "LLLL d, yyyy")
                : "not published"}
            </time>
            <span className="ml-auto">{post.readingTime.text} • </span>
            <span>{posts.find(({ id }) => id === post.slug)?.views ?? 0} views</span>
          </p>
          {post.image && isImage(post.image)
            ? <picture className="relative left-1/2 mt-4 flex flex aspect-og-image w-[calc(100%+8rem)] max-w-[calc(100vw-2rem)] -translate-x-1/2 justify-center ">
                <Image
                  className="h-40 rounded-md"
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                  quality={20}
                />
              </picture>
            : null}
        </header>
        <div className="mb-6 text-center"></div>
        <MDXContent code={post.body.code} />
      </article>
    </>
  );
};

export const MDXContent: FC<{ code: string }> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-slate dark:prose-dark">
      <Component components={{ Badge, CodeComponent }} />
    </div>
  );
};

export default PostLayout;
