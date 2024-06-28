import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const frontmatter = data as {
            title: string;
            date: string;
        };

        return {
            slug,
            content,
            title: frontmatter.title,
            date: frontmatter.date,
        };
    });
    return allPostsData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontmatter = data as {
      title: string;
      date: string;
  };

  return {
    slug,
    content,
    title: frontmatter.title,
    date: frontmatter.date,
  };
}
