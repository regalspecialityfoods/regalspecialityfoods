import React, { useState } from "react";
import styles from "./work-with-us.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { Building, Gift, Megaphone, People } from "react-bootstrap-icons";

const WorkWithUsScreen = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        enquiryType: "Partnership",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("Form Submitted:", formData);
        alert("Thank you for reaching out! We will get back to you soon.");
    };

    return (
        <div className={styles.WorkWithUsScreen}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImageBg}>
                    <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" alt="Work With Us at Regal" />
                </div>
                <CustomContainer>
                    <div className={styles.heroContent}>
                        <h1 data-aos="fade-up">Work With Us</h1>
                    </div>
                </CustomContainer>
            </section>

            {/* Purpose & Culture (6.a) */}
            <section className={`${styles.contentSection} ${styles.purpose}`}>
                <CustomContainer>
                    <Row className="align-items-center">
                        <Col lg={12} data-aos="fade-up">
                            <h2 className={styles.sectionTitle}>Built on Purpose</h2>
                            <p>
                                At Regal, we’re building more than products — we’re building a purpose-driven organisation.
                            </p>
                            <p>
                                Learn about life at Regal, our culture, and the values that guide our work. Whether you’re looking for career opportunities, internships, or professional collaborations, we’d love to hear from you.
                            </p>
                        </Col>
                    </Row>
                </CustomContainer>
            </section>

            {/* Partnerships Section (6.b restructured) */}
            <section className={styles.contentSection}>
                <CustomContainer>
                    <div className={styles.sectionHeader} data-aos="fade-up">
                        <h2 className={styles.sectionTitle}>Partnerships & Business Enquiries</h2>
                        <p className={styles.sectionSubtitle}>We welcome partnerships that align with our values and growth vision.</p>
                    </div>
                    <div className={styles.partnershipGrid}>
                        <div className={styles.partnershipCard} data-aos="fade-up">
                            <div className={styles.cardIcon}>
                                <People />
                            </div>
                            <h3>Distribution Partnerships</h3>
                            <p>Join our growing network of distributors and help us bring functional nutrition to every corner of the country.</p>
                        </div>
                        <div className={styles.partnershipCard} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles.cardIcon}>
                                <Building />
                            </div>
                            <h3>Institutional & B2B Sales</h3>
                            <p>Enquire about bulk requirements for cafes, health centers, hospitals, and fitness studios.</p>
                        </div>
                        <div className={styles.partnershipCard} data-aos="fade-up" data-aos-delay="200">
                            <div className={styles.cardIcon}>
                                <Gift />
                            </div>
                            <h3>Corporate Gifting</h3>
                            <p>Thoughtful, health-first gifting solutions for your employees, clients, and partners.</p>
                        </div>
                        <div className={styles.partnershipCard} data-aos="fade-up" data-aos-delay="300">
                            <div className={styles.cardIcon}>
                                <Megaphone />
                            </div>
                            <h3>Media & PR</h3>
                            <p>For press enquiries, brand collaborations, and media features, reach out to our communications team.</p>
                        </div>
                    </div>
                </CustomContainer>
            </section>

            {/* Contact Form Section */}
            <section className={styles.formSection}>
                <CustomContainer>
                    <div className={styles.formWrapper} data-aos="fade-up">
                        <div className={styles.heading}>
                            <h2>Get In Touch</h2>
                            <p>Tell us how you'd like to collaborate or ask us a question.</p>
                        </div>

                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Type of Enquiry</label>
                                <select
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                >
                                    <option value="Partnership">Partnership</option>
                                    <option value="Distribution">Distribution</option>
                                    <option value="Career">Career/Internship</option>
                                    <option value="B2B">Institutional/B2B</option>
                                    <option value="Support">Support/Other</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us more about your enquiry..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </CustomContainer>
            </section>

            {/* FAQ Section */}
            <section className={`${styles.contentSection} ${styles.faqSection}`}>
                <CustomContainer>
                    <div className={styles.sectionHeader} data-aos="fade-up">
                        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    </div>
                    <div className={styles.faqList}>
                        <div className={styles.faqItem} data-aos="fade-up">
                            <h4>Which age groups are your products suitable for?</h4>
                            <p>Our blends are specifically tailored for men, women, and children with unique nutritional requirements for each stage of life.</p>
                        </div>
                        <div className={styles.faqItem} data-aos="fade-up">
                            <h4>Are your products clean-label?</h4>
                            <p>Yes, Regal is committed to clean-label practices, ensuring no hidden additives or aggressive processing.</p>
                        </div>
                        <div className={styles.faqItem} data-aos="fade-up">
                            <h4>How should I store the beverage blends?</h4>
                            <p>Store in a cool, dry place away from direct sunlight. Ensure the lid is tightly closed after every use.</p>
                        </div>
                    </div>
                </CustomContainer>
            </section>

            {/* Support & Policies Section (6.c Relocated) */}
            <footer className={styles.supportSection}>
                <CustomContainer>
                    <div className={styles.supportGrid}>
                        <div className={styles.supportColumn}>
                            <h5>Support & Policies</h5>
                            <ul>
                                <li>Frequently Asked Questions</li>
                                <li>Shipping & Returns</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Contact Information</li>
                            </ul>
                        </div>
                    </div>
                </CustomContainer>
            </footer>
        </div>
    );
};

export default WorkWithUsScreen;
