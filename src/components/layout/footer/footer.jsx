import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { CONATCT_DETAILS, PAGES } from "@/constants/constants";
import SocialMedia from "@/components/ui/social_media/social_media";

import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className={styles.Footer}>

        <CustomContainer>
          <div className={styles.top}>
            <Row>
              <Col xs={12} md={6} lg={4}>
                <div className={`${styles.footerSection} ${styles.brand}`}>
                  <Image
                    src="/logo/logo_full_w_white.png"
                    width={200}
                    alt="logo"
                  />
                  <br />
                  <br />
                  <SocialMedia />
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={`${styles.footerSection} ${styles.link}`}>
                  {PAGES.map((page) => {
                    if (page.hidden) {
                      return null;
                    }

                    return (
                      <Link href={page.href} key={page.id}>
                        {page.name}
                      </Link>
                    );
                  })}
                </div>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <div className={`${styles.footerSection} ${styles.contact}`}>
                  <div>
                    <GeoAltFill /> Address 1, address line 2
                  </div>
                  <div>
                    <TelephoneFill /> 9876543210
                  </div>
                  <div>
                    <EnvelopeAtFill /> business@company.com
                    {/* <Link href={`mailto:${CONATCT_DETAILS.email}`}>
                    {CONATCT_DETAILS.email}
                  </Link> */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.bot}>
            <p>©. All Rights Reserved. Licensing</p>
          </div>
        </CustomContainer>
      </footer>
    </>
  );
};

export default Footer;
