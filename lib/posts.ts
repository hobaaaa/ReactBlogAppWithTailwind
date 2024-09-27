import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app/data');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  image:string;
}

export function getAllPosts(): BlogPost[] {
  const filePath = path.join(postsDirectory, 'posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContents) as BlogPost[];
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug);
}
