import React, { useState } from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const AboutScreen = () => {
  const [expandedLeaders, setExpandedLeaders] = useState({});

  const toggleLeader = (name) => {
    setExpandedLeaders((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const leaders = [
    {
      name: "Nirupama Srinivasa Desikan",
      designation: "Chief Scientist and Chief Product Officer",
      about:
        "Nirupama is a senior food R&D and innovation leader with deep expertise in functional foods and nutritional product development. A food technologist from CFTRI she has more than 14 years of experience in developing and standardising new products across categories in the F&V, cereal and grain segments. Key categories that she excels in include fruit-based beverages, breakfast cereals, cookies, ready to cook products, jams, culinary pastes, extruded snacks, flaked cereals/grains, noodles, etc.",
      image: "/images/leaders/nirupama.png",
    },
    {
      name: "Bala Jambunathan",
      designation: "Chief Financial Officer",
      about:
        "Bala Jambunathan is a seasoned financial powerhouse with decades of expertise in fiscal strategy and operational excellence. A qualified Cost and Management Accountant (ICWA) with a degree in Commerce, Bala brings a precision-based approach to financial architecture. Prior to her current role, she served as a pivotal leader in the real estate sector, overseeing a diverse portfolio of premium malls, residential complexes, and commercial properties. Beyond the boardroom, Bala is a passionate singer and an avid traveler who finds inspiration in exploring new cultures.",
      image: "/images/leaders/Bala Jambunathan.jpeg",
    },

    {
      name: "Keerthana Ananthakrishnan",
      designation: "Head of Operations",
      about:
        "With a masters degree in food technology & science, Keerthana leads product development, nutrition research, and long-term brand strategy, focusing on creating clean and effective nutrition solutions. Detail-oriented and results-driven, her approach is rooted in strong communication, relationship-building, and a deep sense of ownership toward every task she undertakes. She believes that great results come from genuine connections, consistent effort, and a mindset focused on quality.",
      image: "/images/leaders/keerthana.jpeg",
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

      {/* Managing Director & CEO Message Section */}
      <section className={styles.founderSection}>
        <CustomContainer>
          <div className={styles.founderContent}>
            <div className={styles.founderImage} data-aos="fade-right">
              <Image
                src="/images/leaders/ashok.jpeg"
                alt="Ashok Namboodiri"
                fluid
              />
            </div>
            <div className={styles.founderText} data-aos="fade-left">
              <h2>Ashok Namboodiri</h2>
              <span className={styles.overline}>Managing Director & CEO
              </span>
              <p>
                An accomplished global business leader with 25+ years of
                experience across Media, Consumer Goods and Sports categories
                spanning emerging markets - India, Middle East and Africa - he
                has a proven track record of scaling businesses, building teams,
                launching new categories, and driving international expansion.
              </p>
              <p>
                He is known for his pioneering work in sports regionalization,
                forging global partnerships, and mentoring next-generation
                leaders besides his appetite for exploring new challenges.
              </p>
            </div>
          </div>
        </CustomContainer>
      </section>

      {/* Founder's Message Section */}
      <section className={`${styles.founderSection} ${styles.ceoSection}`}>
        <CustomContainer>
          <div
            className={`${styles.founderContent} ${styles.reversed} ${styles.smaller}`}
          >
            <div className={styles.founderImage} data-aos="fade-left">
              <Image src="/images/leaders/ananth_1.jpeg" alt="Founder" fluid />
            </div>
            <div className={styles.founderText} data-aos="fade-right">
              <h2>Ananthakrishnan Subramanian</h2>
              <span className={styles.overline}>Founder & Chief Operating Officer
              </span>

              <p>With over 27 years of leadership experience in the FMCG sector handling brands including Cadbury, Kellogg&apos;s, Coca-Cola, and Tropicana, he brings deep expertise in sales strategy, distribution, and market expansion. </p>

              <p>He is a strong advocate for talent development, adept at articulating organizational missions and guiding teams to achieve ambitious goals. His strengths lie in strategic planning and effective communication, always pushing boundaries and transforming potential into performance. </p>

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
                    <p
                      className={`${styles.bio} ${!expandedLeaders[leader.name] ? styles.truncated : ""
                        }`}
                    >
                      {leader.about}
                    </p>
                    <button
                      className={styles.readMoreBtn}
                      onClick={() => toggleLeader(leader.name)}
                    >
                      {expandedLeaders[leader.name] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}

          </div>
        </CustomContainer>
      </section>

      {/* Message from Founder Section */}
      <section className={styles.founderMessageSection}>
        <CustomContainer>
          <div className={styles.messageContent} data-aos="fade-up">
            <div className={styles.messageImage}>
              <Image src="/images/leaders/ananth_1.jpeg" alt="Founder" fluid />
            </div>
            <div className={styles.messageText}>
              {/* <span className={styles.overline}>WORDS FROM THE HEART</span> */}
              <h2>Message from the founder</h2>
              <div className={styles.quoteBody}>
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
              </div>
              <p className={styles.closing}>
                &quot;Regal is not built for quick trends. It is built for
                generations.&quot;
              </p>

            </div>
          </div>
        </CustomContainer>
      </section>
    </div>
  );
};

export default AboutScreen;
