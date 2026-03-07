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
import { PAGES } from "@/constants/constants";
import SocialMedia from "@/components/ui/social_media/social_media";

import Newsletter from "./newsletter";

const Footer = () => {

  // Regal Specialty Foods, 31A , Alamelumangapuram 2nd Cross Madipakkam, Chennai, PIN 600091 Tamil Nadu, India. M: 98848 60485

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
                    <GeoAltFill /> Regal Specialty Foods,<p>31A , Alamelumangapuram 2nd Cross Madipakkam, </p><p>Chennai - 600091.</p>
                  </div>
                  <div>
                    <TelephoneFill /> 98848 60485
                  </div>
                  <div>
                    <EnvelopeAtFill /> sales@regalspecialtyfoods.com
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
