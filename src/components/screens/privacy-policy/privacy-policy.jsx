import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "../terms-and-conditions/terms-and-conditions.module.scss";
import Link from "next/link";

const PrivacyPolicyScreen = () => {
  return (
    <CustomContainer>
      <div className={styles.legalScreen}>
        <h1>Privacy Policy</h1>

        <p>
          At <b>Regal Specialty Foods & Beverages India Pvt Ltd</b>, accessible from{" "}
          <Link href="https://regalspecialtyfoods.com/" target="_blank">
            https://regalspecialtyfoods.com/
          </Link>
          , the privacy of our visitors is one of our primary priorities. This
          Privacy Policy document outlines the types of information that are
          collected and recorded by <b>Regal Specialty Foods & Beverages India Pvt Ltd</b> and how such information is used.
        </p>

        <h2>Scope</h2>
        <p>
          This Privacy Policy applies solely to our online activities and is
          valid for visitors to our website with respect to the information that
          they share and/or that is collected through the website. It does not
          apply to any information collected offline or through channels other
          than this website.
        </p>

        <h2>Consent</h2>
        <p>
          By accessing or using our website, you hereby consent to this Privacy
          Policy and agree to its terms.
        </p>

        <h2>Information We Collect</h2>
        <p>
          The personal information that you may be asked to provide, and the
          reasons for which such information is requested, will be made clear at
          the point of collection.
        </p>

        <h3>Information You Provide Directly</h3>
        <p>
          If you contact us directly, we may collect additional information such
          as your name, email address, phone number, the contents of your
          message and/or attachments, and any other information you may choose
          to provide.
        </p>

        <h3>Account & Service Information</h3>
        <p>
          When you register for an account or engage with our services, we may
          collect your contact information, including but not limited to your
          name, company name, address, email address, and telephone number.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website and services</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our website</li>
          <li>Communicate with you, including customer service and updates</li>
          <li>Process transactions and fulfill your requests</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or require further information regarding
          this Privacy Policy, you may contact us through the details provided
          on our website.
        </p>
      </div>
    </CustomContainer>
  );
};

export default PrivacyPolicyScreen;
