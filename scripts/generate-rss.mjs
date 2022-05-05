import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/blog/_index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Felix Tellmann',
    site_url: 'https://flext.dev',
    feed_url: 'https://flext.dev/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://flext.dev/posts/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
