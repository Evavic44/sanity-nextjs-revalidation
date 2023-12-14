import { getPosts } from "@/lib/sanity.query";
import { PostType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const posts: PostType[] = await getPosts();

  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 lg:mt-40 mt-0 p-6">
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.cover.image}
              alt={post.cover.alt}
              width={800}
              height={800}
              className="rounded-lg aspect-video object-cover"
            />
            <h1 className="text-3xl font-semibold mt-5 mb-2">{post.title}</h1>
            <p>{post.content}</p>
          </Link>
        </article>
      ))}
    </section>
  );
}
