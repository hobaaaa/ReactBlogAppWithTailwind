import { getPostBySlug } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  return {
    title: post?.title || "Blog Post",
    description: "Blog yazısı",
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Blog yazısı bulunamadı</div>;
  }

  return (
    <div className="container  text-center pt-[6rem] mx-auto">
      <div className="mx-2 md:mx-0 my-2 bg-gray-200 p-4 rounded ">
        <h1 className="text-4xl font-bold my-5">{post.title}</h1>
        <h2 className="text-xl my-3">{post.date}</h2>
        <div className="text-xl">{post.content}</div>
      </div>
    </div>
  );
}
