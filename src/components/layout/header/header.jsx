import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";

import { Facebook, Instagram, List, TwitterX, X } from "react-bootstrap-icons";
import { PAGES, SOCIAL_MEDIA } from "@/constants/constants";
import SocialMedia from "@/components/ui/social_media/social_media";
import HeaderDrawer from "./header_drawer/header_drawer";
import BottomHeader from "./BottomHeader/BottomHeader";

const Header = () => {
  const router = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <header className={styles.Header}>
        <CustomContainer>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <Image src="/logo/logo_full_w.png" alt="logo" width={120} />
              </Link>
            </div>
            <nav className={styles.navLg}>
              <ul>
                {PAGES.map((page) => {
                  if (!page.hidden) {
                    return (
                      <li key={page.id} className={`${styles.navItem} ${(page.href === "/" ? router.pathname === "/" : router.pathname.startsWith(page.href)) ? styles.active : ""}`}>
                        <Link href={page.href}>{page.name}</Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </nav>

            <div className={styles.sm}>
              <SocialMedia />
            </div>

            <div className={styles.menu}>
              <List
                onClick={() => {
                  setShowDrawer(true);
                }}
              />
              <HeaderDrawer show={showDrawer} setShow={setShowDrawer} />
            </div>
          </div>
        </CustomContainer>
      </header>
      {/* <BottomHeader /> */}
    </>
  );
};

export default Header;
