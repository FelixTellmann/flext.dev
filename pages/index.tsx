// pages/index.js

import { PostList } from "_client/post-list";
import { allBlogs, Blog } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Head from "next/head";

export async function getStaticProps() {
  const posts = allBlogs
    .filter(({ hidden }) => !hidden || process.env.NODE_ENV === "development")
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return { props: { posts } };
}

export default function BlogOverview({ posts = [] }: { posts: Blog[] }) {
  return (
    <div className="mx-auto max-w-7xl py-16 px-4 md:px-8">
      <Head>
        {/*<title>Contentlayer Blog Example</title>*/}
        {/* TODO: SEO HERE*/}
      </Head>

      <PostList posts={posts} />
    </div>
  );
}
