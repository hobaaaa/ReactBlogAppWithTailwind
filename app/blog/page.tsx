import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "../components/BlogCard";
import styles from "../styles/BlogCard.module.css";

export const metadata = {
  title: "Blogs",
  description: "Deniz Gökbudak tarafından yapılmıştır",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="container  text-center pt-[6rem] mx-auto">
      <div className="mx-2 md:mx-0 my-2 bg-gray-200 p-4 rounded ">
        <h1 className="text-4xl font-bold my-5">Blog</h1>
        <div className={`${styles.card__body}`}>
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
