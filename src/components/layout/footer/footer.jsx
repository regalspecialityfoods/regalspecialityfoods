import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import { PAGES } from "@/constants/constants";
import SocialMedia from "@/components/ui/social_media/social_media";

import Newsletter from "./newsletter";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const legalPages = [
    {
      title: "Terms & Conditions",
      href: "/terms-and-conditions",
    },

    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Cancellation Policy",
      href: "/cancellation-policy",
    },
  ];

  const isLegalPage = legalPages.some((p) => p.href === router.pathname);

  return (
    <>
      {!isLegalPage && <Newsletter />}
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
              <Col xs={12} md={6} lg={3} xl={4}>
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

              <Col xs={12} md={6} lg={5} xl={4}>
                <div className={`${styles.footerSection} ${styles.contact}`}>
                  <div>
                    <GeoAltFill />
                    <b>Regal Specialty Foods & Beverages India Pvt Ltd</b>
                    <p>CIN U46309TN2026PTC190729</p>
                    <p>Sri Sastha I Floor,</p>
                    <p>31A , Alamelumangapuram II Cross,</p>
                    <p>Madipakkam, Chennai - 600091</p>
                    <p>Tamil Nadu | India</p>
                  </div>
                  <div>
                    <Link href={"tel:+914479673426"}>
                      <TelephoneFill /> +91 44 7967 3426
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={
                        "https://wa.me/918939028578?text=Hello%2C%20I%20would%20like%20to%20know%20more."
                      }
                      target="_blank"
                    >
                      <Whatsapp /> +91 89390 28578
                    </Link>
                  </div>
                  <div>
                    <EnvelopeAtFill />
                    <Link href={`mailto:reachus@regalspecialtyfoods.com`}>
                      reachus@regalspecialtyfoods.com
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.bot}>
            {legalPages.map((lp) => {
              return (
                <Link key={lp.title} href={lp.href}>
                  <p>{lp.title}</p>
                </Link>
              );
            })}
          </div>
        </CustomContainer>
      </footer>
    </>
  );
};

export default Footer;
