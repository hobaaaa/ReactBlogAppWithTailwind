import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blogs",
  description: "Deniz Gökbudak tarafından yapılmıştır",
};
export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="container bg-gray-200 p-4 mx-auto grid justify-center text-center  pt-[90px]">
      <h1 className="text-4xl font-bold my-5">Blog</h1>
      <ul className="text-xl">
        {posts.map((post) => (
          <li key={post.slug} className=" my-3">
            <Link href={`/blog/${post.slug}`}>
              <button className="py-2 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {post.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
