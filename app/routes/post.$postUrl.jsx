import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const { postUrl } = params;
  return postUrl;
}

export default function Post() {
  const postUrl = useLoaderData();
  return <div>{postUrl}</div>;
}
