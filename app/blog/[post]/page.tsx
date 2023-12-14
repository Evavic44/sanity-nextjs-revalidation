import { getSinglePost } from "@/lib/sanity.query";
import { PostType } from "@/types/type";
import Link from "next/link";

export default async function Post({ params }: { params: { post: string } }) {
  const post: PostType = await getSinglePost(params.post);

  return (
    <article className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center h-screen p-6">
      <h1 className="text-5xl font-semibold mb-3">{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/" className="text-blue-500 underline">
        Go Back
      </Link>
    </article>
  );
}
