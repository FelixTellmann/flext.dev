import { Badge } from "_client/badge";
import { allBlogs, Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

export const getStaticPaths = async () => {
  const paths = allBlogs.map((post) => ({ params: { slug: post.slug.split("/") } }));
  console.log(paths);
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
  return {
    props: {
      post,
    },
  };
};

const PostLayout: FC<{ post: Blog }> = ({ post }) => {
  if (!post) {
    return <></>;
  }

  console.log(post.tags);

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">Home</a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post?.title}</h1>
          <time dateTime={post?.publishedAt} className="text-sm text-gray-600">
            {format(new Date(post?.publishedAt), "LLLL d, yyyy")}
          </time>
        </div>
        <MDXContent code={post.body.code} />
      </article>
    </>
  );
};

export const MDXContent: FC<{ code: string }> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <div className=" prose prose-slate dark:prose-dark">
      <Component components={{ Badge }} />
    </div>
  );
};

export default PostLayout;
