import React from "react";
import { useRouter } from "next/router";
import BlogDetailScreen from "@/components/screens/blog-detail/blog-detail";
import { dummyBlogs } from "@/data/dummy_blogs";

const BlogDetailPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const blog = dummyBlogs.find((b) => b.slug === slug);

    return <BlogDetailScreen blog={blog} />;
};

export default BlogDetailPage;
