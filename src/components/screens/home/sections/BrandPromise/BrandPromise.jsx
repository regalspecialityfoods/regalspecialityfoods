import CustomSection from "@/components/common/CustomSection/CustomSection";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import React from "react";
import styles from "./BrandPromise.module.scss";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { ArrowRight, Heart, HeartFill } from "react-bootstrap-icons";

const PromiseItem = ({ index }) => {
  return (
    <div
      className={styles.PromiseItem}
      data-aos="fade-right"
      data-aos-delay={index * 150}
    >
      <div className={styles.ico}>
        <HeartFill />
      </div>

      <div className={styles.txt}>
        <h5>Powerful Elated Settings </h5>
        <p>
          Take control over your website. All elements can be easily styled and
          modified in Elated settings easily and intuitively.{" "}
        </p>
      </div>
    </div>
  );
};

const BrandPromise = () => {
  return (
    <section className={styles.BrandPromise}>
      <SectionHeading
        head={"Brand Promise"}
        caption={
          "Clean, balanced nutrition rooted in traditional ingredients and created for modern lifestyles."
        }
      />

      <div className={styles.wrap}>
        <div className={styles.left}>
          <p className={styles.cap} data-aos="fade-in">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur optio dolorem aliquid placeat molestias impedit minima
            libero molestiae deserunt necessitatibus.
          </p>
          <div className={styles.items}>
            <PromiseItem index={0} />
            <PromiseItem index={1} />
            <PromiseItem index={2} />
          </div>
        </div>

        <div className={styles.right} data-aos="fade-left">
          <Image src={`/images/products/juniors/prod1.png`} fluid alt="prod" />
          <div>
            <CustomButton href={"/about"}>
              Know More <ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
