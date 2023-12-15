import { sanityFetch } from "@/lib/sanity.client";
import { singlePostQuery } from "@/lib/sanity.query";
import { PostType } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

export default async function Post({ params }: { params: { slug: string } }) {
  const post: PostType = await sanityFetch({
    query: singlePostQuery,
    tags: ["post"],
    qParams: { slug: params.slug },
  });

  return (
    <article className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center h-screen p-6">
      <Image
        src={post.cover.image}
        alt={post.cover.alt}
        width={600}
        height={300}
      />
      <h1 className="text-5xl font-semibold mb-3">{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/" className="text-blue-500 underline">
        Go Back
      </Link>
    </article>
  );
}
