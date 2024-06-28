import { getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug); // MDX dosyasını oku

  return {
    title: post.title, // MDX dosyasındaki title'ı kullan
    description: "Blog yazısı",
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <div className="container bg-gray-200 p-4 mx-auto grid justify-center text-center  pt-[90px]">
      <h1 className="text-4xl font-bold my-5">{post.title}</h1>
      <div
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
