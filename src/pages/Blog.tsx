import { Helmet } from "react-helmet-async";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Hamza Hassan AI</title>
        <meta name="description" content="AI Research and Insights by Hamza Hassan" />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <main className="min-h-screen">
      <BlogPreviewSection />
      </main>
    </>
  );
}
