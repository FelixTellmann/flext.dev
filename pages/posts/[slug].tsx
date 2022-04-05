import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allBlogs, blog } from "contentlayer/generated";
import { FC } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const paths = allBlogs.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allBlogs.find((post) => post._raw.flattenedPath === params?.slug);
  console.log({ post });
  return {
    props: {
      post,
    },
  };
};

const PostLayout: FC<{ post: blog }> = ({ post }) => {
  console.log(post);
  // return <></>;
  const Component = useMDXComponent(post?.body.code);
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
            {format(parseISO(post?.publishedAt), "LLLL d, yyyy")}
          </time>
        </div>
        <Component />
      </article>
    </>
  );
};

export default PostLayout;
