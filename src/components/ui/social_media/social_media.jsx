import { SOCIAL_MEDIA } from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import styles from "./social_media.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      {SOCIAL_MEDIA.map((sm) => {
        return (
          <Link href={sm.href} key={sm.name} target="_blank">
            <Image src={sm.icon} alt={sm.name} width={30} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
