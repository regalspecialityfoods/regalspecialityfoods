import React from "react";
import styles from "./blogs.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { ArrowRight, PersonCircle } from "react-bootstrap-icons";
import { dummyBlogs } from "@/data/dummy_blogs";
import PageBanner from "@/components/common/pageBanner/pageBanner";

const BlogsScreen = () => {
    return (
        <div className={styles.BlogsScreen}>
            <PageBanner title={'THE REGAL BLOG'}
            bgImage={'/images/banners/regal_blog.webp'}
            />

            {/* Blogs Listing Section */}
            <section className={styles.listingSection}>
                <CustomContainer>
                    <Row className={styles.blogGrid}>
                        {dummyBlogs.map((blog, index) => (
                            <Col xs={12} md={6} lg={4} key={blog.id}>
                                <Link href={`/blog/${blog.slug}`} className={styles.blogCard} data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className={styles.imageBox}>
                                        <Image src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.category}>{blog.category}</span>
                                        <h3>{blog.title}</h3>
                                        <p className={styles.excerpt}>{blog.excerpt}</p>
                                        <div className={styles.meta}>
                                            <span className={styles.author}>
                                                <PersonCircle size={14} />
                                                {blog.author}
                                            </span>
                                            <span className={styles.date}>{blog.date}</span>
                                        </div>
                                        <div className={styles.readMore}>
                                            Read Story <ArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </CustomContainer>
            </section>
        </div>
    );
};

export default BlogsScreen;
