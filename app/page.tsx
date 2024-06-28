import Link from "next/link";

export default function Home() {
  return (
    <div className="container bg-gray-200 p-4 mx-auto grid justify-center text-center pt-[100px]">
      <h1 className="text-4xl font-bold my-5">Hoş Geldiniz!</h1>
      <p className="text-xl my-3">Bu benim kişisel blogum.</p>
      <Link href="/blog" className="mt-3">
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Blog Yazıları
        </button>
      </Link>
    </div>
  );
}
