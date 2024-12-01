import React, { useEffect, useRef } from "react";
import styles from "./Fourth.module.css";
import noiseaware from "../../assets/helped/noiseaware.webp";
import signeasy from "../../assets/helped/signeasy.webp";
import tennessee from "../../assets/helped/tennessee.webp";
import apptopia from "../../assets/helped/apptopia.webp";
import robots from "../../assets/helped/robots.webp";
import telos from "../../assets/helped/robots.webp";

const items = [
  { text: "NoiseAware Inc.", icon: noiseaware },
  { text: "SignEasy", icon: signeasy },
  { text: "Tennessee Titans", icon: tennessee },
  { text: "Apptopia", icon: apptopia },
  { text: "Build With Robots", icon: robots },
  { text: "Telos Health Solution", icon: telos },
];

function Fourth() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const viewAllRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (iconRef.current) observer.observe(iconRef.current);
    if (viewAllRef.current) observer.observe(viewAllRef.current);

    return () => observer.disconnect();
  }, []);

  const { text, icon } = items[0];

  return (
    <div className={styles.background}>
      <h1 ref={headingRef}>How We've Helped Our Clients</h1>
      <div className={styles.container}>
        <div className={styles.arrow}>&lt;</div>
        <div ref={contentRef} className={styles.content}>
          <img ref={iconRef} className={styles.icon} src={icon} alt="brand" />
          <p>{text}</p>
        </div>
        <div className={styles.arrow}>&gt;</div>
      </div>
      <h4 ref={viewAllRef} className={styles.viewAll}>
        VIEW ALL
      </h4>
    </div>
  );
}

export default Fourth;
