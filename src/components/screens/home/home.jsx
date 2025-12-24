import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import fonts from "@/styles/fonts";

const TARGET_DATE = new Date("2026-01-25T00:00:00");

const HomeScreen = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTimeLeft = () => {
    const diff = TARGET_DATE.getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ⛔ Prevent server/client mismatch
  if (!mounted) return null;

  return (
    <div className={styles.HomeScreen}>
      <CustomContainer>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.countDown}>
              {Object.entries(timeLeft).map(([key, value]) => (
                <div className={styles.count} key={key}>
                  <p className={fonts.font1}>{value}</p>
                  <small>{key.charAt(0).toUpperCase() + key.slice(1)}</small>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottom} />
        </div>
      </CustomContainer>
    </div>
  );
};

export default HomeScreen;
