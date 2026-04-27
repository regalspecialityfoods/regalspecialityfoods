import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const AboutScreen = () => {
  const leaders = [
    {
      name: "Keerthana Ananthakrishnan",
      designation: "Co-Founder & CEO",
      about:
        "With a Master's degree in Food Technology & Science, Keerthana leads product development, nutrition research, and long-term brand strategy, focusing on creating clean and effective nutrition solutions.",
      image: "/images/leaders/keerthana.jpeg",
    },
    {
      name: "Ananthakrishnan Subramanian",
      designation: "Chief Sales Officer",
      about:
        "With over 27 years of leadership experience across global FMCG brands including Cadbury, Kellogg’s, Coca-Cola, and Tropicana, he brings deep expertise in sales strategy, distribution, and market expansion.",
      image: "/images/leaders/ananth.jpeg",

    },
    {
      name: "Ashok Namboodiri",
      designation: "Advisory Board",
      about:
        "Global media and business leader with extensive experience in brand building, strategy, and communications.",
      image: "/images/leaders/ashok.jpeg",

    },
    {
      name: "Nirupama Srinivasa Desikan",
      designation: "Advisory Board",
      about:
        "Senior food R&D and innovation leader with deep expertise in functional foods and nutritional product development.",
      image: "/images/leaders/nirupama.jpeg",
    },
    {
      name: "Bala Jambunathan",
      designation: "Chief Financial Officer",
      about:
        "Bala Jambunathan is a seasoned financial expert with decades of experience in fiscal strategy and operations. An ICWA and commerce graduate, she has led major real estate portfolios with precision.",
      image: "/images/leaders/Bala Jambunathan.jpeg",
    },
  ];

  return (
    <div className={styles.AboutScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageBg}>
          <Image
            src="/images/about_hero_placeholder.png"
            alt="Regal Specialty Foods Superfoods"
          />
        </div>
        <CustomContainer>
          <div className={styles.heroContent}>
            <h1 data-aos="fade-up">ABOUT US</h1>
            {/* <Image
              src="/logo/logo_full_w_white.png"
              alt="logo"
              width={300}
              data-aos="fade-up"
              data-aos-delay="100"
            /> */}
          </div>
        </CustomContainer>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <CustomContainer>
          <div className={styles.introContent} data-aos="fade-up">
            <p>
              Regal Specialty Foods is an Indian functional nutrition company
              focused on creating everyday nourishment solutions for modern
              families.
            </p>
            <p>
              In a world of fast-moving food choices, Regal takes a thoughtful
              approach — revisiting trusted ingredients like millets, cereals,
              and functional herbs, and bringing them into today’s routines
              through clean, accessible formulations.
            </p>
            <p>
              Our revitalising beverage blends are designed to be easy to
              prepare, enjoyable to consume, and suitable for regular use across
              age groups. The goal is simple: to make better nutrition a natural
              part of daily life.
            </p>
          </div>
        </CustomContainer>
      </section>

      {/* Reworked Core Values Section */}
      <section className={styles.valuesSection}>
        <CustomContainer>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <span className={styles.overline}>OUR PILLARS</span>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div
              className={styles.valueItem}
              data-aos="fade-up"
              data-aos-delay="100"
              data-number="01"
            >
              <span className={styles.number}>01</span>
              <div className={styles.valueContent}>
                <h3>Innovation Rooted in Tradition</h3>
                <p>
                  We honour time-tested ingredients while continuously evolving
                  through research and modern food science.
                </p>
              </div>
            </div>
            <div
              className={styles.valueItem}
              data-aos="fade-up"
              data-aos-delay="200"
              data-number="02"
            >
              <span className={styles.number}>02</span>
              <div className={styles.valueContent}>
                <h3>Empowered Choices</h3>
                <p>
                  We believe informed families make confident decisions about
                  their nutrition and wellbeing.
                </p>
              </div>
            </div>
            <div
              className={styles.valueItem}
              data-aos="fade-up"
              data-aos-delay="300"
              data-number="03"
            >
              <span className={styles.number}>03</span>
              <div className={styles.valueContent}>
                <h3>Uncompromising Quality</h3>
                <p>
                  From ingredient sourcing to taste and consistency, every
                  detail reflects our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* Reworked Vision Section - Split Layout */}
      <section className={styles.visionSection}>
        <CustomContainer>
          <div className={styles.splitGrid}>
            <div className={styles.imageColumn} data-aos="fade-right">
              <div className={styles.imageWrap}>
                <Image src="/images/vision.png" alt="Our Vision" />
              </div>
            </div>
            <div className={styles.textColumn} data-aos="fade-left">
              <span className={styles.overline}>THE FUTURE</span>
              <h2>Our Vision</h2>
              <p>
                To build a trusted Indian specialty food brand that normalises
                daily superfoods consumption across age groups and represents
                Indian nutrition globally through a modern, science-backed
                approach.
              </p>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* Reworked Mission Section - Split Layout Reversed */}
      <section className={styles.missionSection}>
        <CustomContainer>
          <div className={`${styles.splitGrid} ${styles.reversed}`}>
            <div className={styles.imageColumn} data-aos="fade-left">
              <div className={styles.imageWrap}>
                <Image src="/images/mission.webp" alt="Our Mission" />
              </div>
            </div>
            <div className={styles.textColumn} data-aos="fade-right">
              <span className={styles.overline}>OUR PURPOSE</span>
              <h2>Our Mission</h2>
              <p>
                To create superfood-based specialty foods that support the
                nutritional needs of the entire family — men, women, and
                children — every day.
              </p>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* Founder's Message Section */}
      <section className={styles.founderSection}>
        <CustomContainer>
          <div className={styles.founderContent}>
            <div className={styles.founderImage} data-aos="fade-right">
              <Image src="/images/leaders/ananth_1.jpeg" alt="Founder" fluid />

            </div>
            <div className={styles.founderText} data-aos="fade-left">
              <span className={styles.overline}>WORDS FROM THE FOUNDER</span>
              <h2>Mr. Anantha Krishnan</h2>
              <p>
                Regal Specialty Foods began with a simple belief — that good
                nutrition should be preventive, consistent, and accessible to
                every family.
              </p>
              <p>
                Growing up with traditional Indian food wisdom and observing how
                modern lifestyles have shifted away from balance, I felt the
                need to create products that bridge this gap. Regal is our
                effort to honour heritage while embracing science, convenience,
                and today’s evolving routines.
              </p>
              <p>
                This journey is about building trust — with families who choose
                our products, with partners who grow alongside us, and with
                every individual who believes that small daily habits create
                long-term wellbeing.
              </p>
              <p className={styles.closing}>
                Regal is not built for quick trends. It is built for
                generations.
              </p>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* Leadership & Advisory Section */}
      <section className={styles.teamSection}>
        <CustomContainer>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <span className={styles.overline}>STRATEGIC LEADERSHIP</span>
            <h2 className={styles.sectionTitle}>Leadership Team</h2>
          </div>
          <div className={styles.teamGrid}>
            {leaders.map((leader, idx) => {
              return (
                <div
                  className={styles.memberCard}
                  data-aos="fade-up"
                  key={leader.name}
                  data-aos-delay={idx * 100}
                >
                  <div className={styles.memberImage}>
                    <Image
                      src={leader.image}
                      // src="/images/avatar-placeholder.jpg"
                      alt={leader.name}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{leader.name}</h3>
                    <p className={styles.role}>{leader.designation}</p>
                    <p className={styles.bio}>{leader.about}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className={styles.memberCard} data-aos="fade-up">
              <div className={styles.memberImage}>
                <Image
                  src="/images/team/keerthana.png"
                  alt="Keerthana Ananthakrishnan"
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Keerthana Ananthakrishnan</h3>
                <p className={styles.role}>Co-Founder & CEO</p>
                <p className={styles.bio}>
                  With a Master’s degree in Food Technology & Science, Keerthana
                  leads product development, nutrition research, and long-term
                  brand strategy, focusing on creating clean and effective
                  nutrition solutions.
                </p>
              </div>
            </div>
            <div
              className={styles.memberCard}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.memberImage}>
                <Image
                  src="/images/team/ananthakrishnan.png"
                  alt="Ananthakrishnan Subramanian"
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Ananthakrishnan Subramanian</h3>
                <p className={styles.role}>Chief Sales Officer</p>
                <p className={styles.bio}>
                  With over 27 years of leadership experience across global FMCG
                  brands including Cadbury, Kellogg’s, Coca-Cola, and Tropicana,
                  he brings deep expertise in sales strategy, distribution, and
                  market expansion.
                </p>
              </div>
            </div>
            <div className={styles.memberCard} data-aos="fade-up">
              <div className={styles.memberImage}>
                <Image
                  src="/images/team/keerthana.png"
                  alt="Keerthana Ananthakrishnan"
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Keerthana Ananthakrishnan</h3>
                <p className={styles.role}>Co-Founder & CEO</p>
                <p className={styles.bio}>
                  With a Master’s degree in Food Technology & Science, Keerthana
                  leads product development, nutrition research, and long-term
                  brand strategy, focusing on creating clean and effective
                  nutrition solutions.
                </p>
              </div>
            </div>
            <div
              className={styles.memberCard}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.memberImage}>
                <Image
                  src="/images/team/ananthakrishnan.png"
                  alt="Ananthakrishnan Subramanian"
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Ananthakrishnan Subramanian</h3>
                <p className={styles.role}>Chief Sales Officer</p>
                <p className={styles.bio}>
                  With over 27 years of leadership experience across global FMCG
                  brands including Cadbury, Kellogg’s, Coca-Cola, and Tropicana,
                  he brings deep expertise in sales strategy, distribution, and
                  market expansion.
                </p>
              </div>
            </div> */}
          </div>

          {/* <div
            className={`${styles.sectionHeader} ${styles.mtLarge}`}
            data-aos="fade-up"
          >
            <span className={styles.overline}>GUIDING VOICES</span>
            <h2 className={styles.sectionTitle}>Advisory Board</h2>
          </div>


          <div className={styles.advisoryGrid}>
            <div className={styles.advisorCard} data-aos="fade-up">
              <div className={styles.advisorImage}>
                <Image src="/images/team/ashok.png" alt="Ashok Namboodiri" />
              </div>
              <div className={styles.advisorInfo}>
                <h3>Ashok Namboodiri</h3>
                <p>
                  Global media and business leader with extensive experience in
                  brand building, strategy, and communications.
                </p>
              </div>
            </div>
            <div
              className={styles.advisorCard}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.advisorImage}>
                <Image
                  src="/images/team/nirupama.png"
                  alt="Nirupama Srinivasa Desikan"
                />
              </div>
              <div className={styles.advisorInfo}>
                <h3>Nirupama Srinivasa Desikan</h3>
                <p>
                  Senior food R&D and innovation leader with deep expertise in
                  functional foods and nutritional product development.
                </p>
              </div>
            </div>
          </div> */}
        </CustomContainer>
      </section>
    </div>
  );
};

export default AboutScreen;
