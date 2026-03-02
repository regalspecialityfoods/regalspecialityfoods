import React from "react";
import styles from "./blog-detail.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { ArrowLeft, Calendar, Person } from "react-bootstrap-icons";

const BlogDetailScreen = ({ blog }) => {
    if (!blog) return null;

    return (
        <div className={styles.BlogDetailScreen}>
            {/* Minimal Header / Back Link */}
            <div style={{ position: "absolute", top: "120px", left: "0", width: "100%", zIndex: "10" }}>
                <CustomContainer>
                    <Link href="/blog" className={styles.backLink} data-aos="fade-right">
                        <ArrowLeft /> Back to Blog
                    </Link>
                </CustomContainer>
            </div>

            {/* Article Hero */}
            <header className={styles.articleHero}>
                <div className={styles.heroImage}>
                    <Image src={blog.image} alt={blog.title} />
                </div>
                <CustomContainer>
                    <div className={styles.heroContent} data-aos="fade-up">
                        <span className={styles.category}>{blog.category}</span>
                        <h1>{blog.title}</h1>
                        <div className={styles.meta}>
                            <span><Person size={18} /> {blog.author}</span>
                            <span><Calendar size={18} /> {blog.date}</span>
                        </div>
                    </div>
                </CustomContainer>
            </header>

            {/* Article Body */}
            <section className={styles.articleWrapper}>
                <CustomContainer>
                    <article className={styles.articleContent} data-aos="fade-up" data-aos-delay="200">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </article>
                </CustomContainer>
            </section>
        </div>
    );
};

export default BlogDetailScreen;
