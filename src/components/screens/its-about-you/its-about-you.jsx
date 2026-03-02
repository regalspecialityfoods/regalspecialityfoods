import React from "react";
import styles from "./its-about-you.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import { Beaker, Heart, PersonHearts, ShieldCheck } from "react-bootstrap-icons";

const ItsAboutYouScreen = () => {
    return (
        <div className={styles.ItsAboutYouScreen}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroImageBg}>
                    <Image src="/images/brand/hero.png" alt="It's About You" />
                </div>
                <CustomContainer>
                    <div className={styles.heroContent}>

                        <h2 data-aos="fade-up" data-aos-delay="100">“IT’S ABOUT YOU”</h2>
                    </div>
                </CustomContainer>
            </section>

            {/* About the Brand Section */}
            <section className={styles.detailSection}>
                <CustomContainer>
                    <div className={styles.contentWrap} data-aos="fade-up">
                        <span className={styles.overline}>PERSONAL WELLNESS</span>
                        <h3>About the Brand</h3>
                        <p>
                            It’s About You is Regal’s flagship revitalising beverage blend range — thoughtfully created to support daily wellness across life stages.
                        </p>
                        <p>
                            Each blend is tailored for men, women, or children, keeping their unique nutritional needs in mind while ensuring great taste and ease of preparation.
                        </p>
                    </div>
                </CustomContainer>
            </section>

            {/* Our Belief Section */}
            <section className={styles.beliefSection}>
                <CustomContainer>
                    <div className={styles.sectionHeader} data-aos="fade-up">
                        <span className={styles.overline}>OUR CORE VALUES</span>
                        <h2 className={styles.sectionTitle}>Our Belief</h2>
                        <p className={styles.beliefSubText}>Nutrition should be simple, effective, and sustainable.</p>
                    </div>
                    <div className={styles.beliefGrid}>
                        <div className={styles.beliefItem} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles.iconBox}>
                                <PersonHearts />
                            </div>
                            <h4>Personal</h4>
                            <p>Tailored to individual needs and life stages.</p>
                        </div>
                        <div className={styles.beliefItem} data-aos="fade-up" data-aos-delay="200">
                            <div className={styles.iconBox}>
                                <Beaker />
                            </div>
                            <h4>Balanced</h4>
                            <p>Thoughtfully formulated for optimal nourishment.</p>
                        </div>
                        <div className={styles.beliefItem} data-aos="fade-up" data-aos-delay="300">
                            <div className={styles.iconBox}>
                                <ShieldCheck />
                            </div>
                            <h4>Sustainable</h4>
                            <p>Designed for daily habits, not short-term trends.</p>
                        </div>
                    </div>
                    <div className={styles.beliefBottomContent} data-aos="fade-up">
                        <p className={styles.beliefQuote}>
                            "Not aggressive. Not complicated. Just right for everyday life."
                        </p>
                        <p className={styles.beliefDescription}>
                            It’s About You can be enjoyed as a warm, comforting drink or as a refreshing cold beverage — making it easy to fit into any routine.
                        </p>
                    </div>
                </CustomContainer>
            </section>

            {/* Philosophy Section */}
            <section className={styles.splitSection}>
                <CustomContainer>
                    <div className={styles.splitGrid}>
                        <div className={styles.imageSide} data-aos="fade-right">
                            <div className={styles.imageWrap}>
                                <Image src="/images/brand/philosophy.png" alt="Revitalising Philosophy" />
                            </div>
                        </div>
                        <div className={styles.textSide} data-aos="fade-left">
                            <span className={styles.overline}>NOURISHMENT BEGINS WITH BALANCE</span>
                            <h2>Revitalising Philosophy</h2>
                            <p>
                                At Regal, nourishment begins with balance. Our formulations bring together millets, cereals, and functional herbs traditionally valued in Indian diets — supported by modern food science and clean-label practices.
                            </p>
                            <p>
                                Each blend is designed to nourish according to life stage, not trends — ensuring safety, suitability, and long-term wellness rather than quick fixes.
                            </p>
                        </div>
                    </div>
                </CustomContainer>
            </section>

            {/* Why Choose Section */}
            <section className={`${styles.splitSection} ${styles.darkSection}`}>
                <CustomContainer>
                    <div className={`${styles.splitGrid} ${styles.reversed}`}>
                        <div className={styles.imageSide} data-aos="fade-left">
                            <div className={styles.imageWrap}>
                                <Image src="/images/brand/lifestyle.png" alt="Why Choose It’s About You" />
                            </div>
                        </div>
                        <div className={styles.textSide} data-aos="fade-right">
                            <span className={styles.overline}>CONSISTENT HABITS</span>
                            <h2>Why Choose It’s About You</h2>
                            <p>
                                Regal believes that true wellness is built through small, consistent habits. Modern families move through busy mornings, demanding days, and the need for calm at the end of each evening.
                            </p>
                            <p>
                                The It’s About You range reflects this rhythm — offering blends designed to integrate seamlessly into everyday routines, whether enjoyed warm as a comforting ritual or cold as a refreshing drink.
                            </p>
                            <p>
                                Each blend is created with care to support the unique needs of men, women, and children, focusing on steady nourishment rather than short-term solutions.
                            </p>
                        </div>
                    </div>
                </CustomContainer>
            </section>

            {/* Crafted With Wellness Section */}
            <section className={styles.splitSection}>
                <CustomContainer>
                    <div className={styles.splitGrid}>
                        <div className={styles.imageSide} data-aos="fade-right">
                            <div className={styles.imageWrap}>
                                <Image src="/images/brand/crafted.png" alt="Crafted With Wellness in Mind" />
                            </div>
                        </div>
                        <div className={styles.textSide} data-aos="fade-left">
                            <span className={styles.overline}>BALANCED NOURISHMENT</span>
                            <h2>Crafted With Wellness in Mind</h2>
                            <p>
                                Every It’s About You blend reflects Regal’s philosophy of balanced nourishment. Carefully selected millets, cereals, and functional herbs come together to create formulations that feel light, adaptable, and suitable for regular use.
                            </p>
                            <p>
                                The focus is not on complexity, but on consistency — creating blends that families can rely on as part of their daily wellness journey.
                            </p>
                        </div>
                    </div>
                </CustomContainer>
            </section>

            {/* Regal Philosophy Section */}
            <section className={`${styles.splitSection} ${styles.darkSection}`}>
                <CustomContainer>
                    <div className={`${styles.splitGrid} ${styles.reversed}`}>
                        <div className={styles.imageSide} data-aos="fade-left">
                            <div className={styles.imageWrap}>
                                <Image src="/images/brand/balance.png" alt="The Regal Philosophy" />
                            </div>
                        </div>
                        <div className={styles.textSide} data-aos="fade-right">
                            <span className={styles.overline}>EVERYDAY CHOICES</span>
                            <h2>The Regal Philosophy Within Every Blend</h2>
                            <p>
                                Regal believes that nutrition should work quietly in the background of everyday life. It’s About You represents a thoughtful approach to wellbeing — one that respects traditional ingredient wisdom while embracing the needs of modern routines.
                            </p>
                            <p>
                                Each blend is designed to feel personal, approachable, and easy to include in daily habits. Wellness is not about extremes. It is about balance, care, and the choices we make every day.
                            </p>
                        </div>
                    </div>
                </CustomContainer>
            </section>

            {/* Ingredients & Quality Section */}
            <section className={styles.qualitySection}>
                <CustomContainer>
                    <div className={styles.sectionHeader} data-aos="fade-up">
                        <span className={styles.overline}>QUALITY STANDARDS</span>
                        <h2 className={styles.sectionTitle}>Ingredients & Quality Standards</h2>
                    </div>
                    <div className={styles.qualityContent} data-aos="fade-up">
                        <p>
                            Quality begins at the source. We follow responsible sourcing practices for our millets, cereals, and herbs, working with trusted suppliers who meet strict quality benchmarks.
                        </p>
                        <p>
                            Every product undergoes multiple quality checks and is manufactured in TPM-certified facilities. All formulations are FSSAI-compliant under the Proprietary Food category, with careful attention to storage, stability, and shelf-life integrity.
                        </p>
                    </div>
                    <div className={styles.badgesGrid} data-aos="fade-up">
                        <div className={styles.badgeItem}>
                            <div className={styles.iconWrap}>TPM</div>
                            <span>TPM CERTIFIED</span>
                        </div>
                        <div className={styles.badgeItem}>
                            <div className={styles.iconWrap}>FSSAI</div>
                            <span>FSSAI COMPLIANT</span>
                        </div>
                        <div className={styles.badgeItem}>
                            <div className={styles.iconWrap}>QC</div>
                            <span>MULTIPLE CHECKS</span>
                        </div>
                    </div>
                </CustomContainer>
            </section>
        </div>
    );
};

export default ItsAboutYouScreen;
