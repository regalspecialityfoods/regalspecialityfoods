import React from "react";
import { Image, Offcanvas } from "react-bootstrap";
import styles from "./header_drawer.module.scss";
import { PAGES } from "@/constants/constants";
import Link from "next/link";
import SocialMedia from "@/components/ui/social_media/social_media";

const HeaderDrawer = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Image src="/logo/logo_full_w.png" alt="logo" width={120} />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.body}>
          <nav className={styles.navMd}>
            <ul>
              {PAGES.map((page) => {
                if (!page.hidden) {
                  return (
                    <li key={page.id} className={styles.navItem}>
                      <Link href={page.href}>{page.name}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
          <div>
            <SocialMedia />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
