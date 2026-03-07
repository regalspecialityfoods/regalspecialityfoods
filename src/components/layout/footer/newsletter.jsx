import React, { useState } from "react";
import styles from "./newsletter.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribing email:", email);
        // Add newsletter subscription logic here if needed
        alert("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <section className={styles.Newsletter}>
            <CustomContainer>
                <div className={styles.content}>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Stay updated with our latest products, special offers, and culinary tips directly in your inbox.</p>

                    <form className={styles.formWrapper} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </CustomContainer>
        </section>
    );
};

export default Newsletter;
