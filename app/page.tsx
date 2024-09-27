import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "./components/BlogCard";
import styles from "./styles/BlogCard.module.css";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className="container  text-center pt-[6rem] mx-auto">
      <div className="mx-2 md:mx-0 my-2 bg-gray-200 p-4 rounded ">
        <h1 className="text-4xl font-bold my-5">Hoş Geldiniz!</h1>
        <p className="text-xl my-3">Bu benim kişisel blogum.</p>
        <Link href="/blog" className="mt-3">
          <button className="py-2.5 px-5 me-2 my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Blog Yazıları
          </button>
        </Link>
        <div className={`${styles.card__body}`}>
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
