import { hookSecret } from "@/lib/sanity.api";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, hookSecret);

    // Check if signature is valid
    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    // Validate body
    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Revalidate Cache Tag
    revalidateTag(body._type);
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
