import React, { useEffect, useRef } from "react";
import styles from "./Third.module.css";
import podcastImage from "../../../assets/podcast.webp";
import ventureImage from "../../../assets/ventureglossary.webp";
import dealsImage from "../../../assets/thirdone.webp";

const Third = () => {
  const headingRef = useRef(null);
  const resourceRefs = useRef([]);

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

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    resourceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const resources = [
    {
      imgSrc: podcastImage,
      imgAlt: "Podcast logo",
      title: "Future Ore Podcasts",
      description:
        "Whether you're a first-time founder or a serial entrepreneur, we have a podcast for you. We'll walk you through the legal side of things and share our experiences counseling hundreds of startups.",
      actionText: "PODCASTS >",
    },
    {
      imgSrc: ventureImage,
      imgAlt: "Ventures logo",
      title: "Venture Glossary",
      description:
        "Our Venture Glossary will be your new best friend. It features over 500 terms that are common parlance in the startup world, from Accelerated Vesting to Zombie.",
      actionText: "VENTURE GLOSSARY >",
    },
    {
      imgSrc: dealsImage,
      imgAlt: "Deals logo",
      title: "Venture Deals in Review",
      description:
        "To provide analysis on early-stage venture financing in Accra, we have reviewed our venture transactions on a year-by-year basis.",
      actionText: "VIEW VENTURE DEALS >",
    },
  ];

  return (
    <section className={styles.background}>
      <h1 ref={headingRef} className={styles.heading}>
        Need Help Along the Way?
      </h1>
      <div className={styles.resourcesContainer}>
        {resources.map((resource, index) => (
          <div
            key={index}
            ref={(el) => (resourceRefs.current[index] = el)}
            className={styles.resourceCard}
          >
            <img
              src={resource.imgSrc}
              alt={resource.imgAlt}
              className={styles.resourceImage}
            />
            <h2 className={styles.resourceTitle}>{resource.title}</h2>
            <p className={styles.resourceDescription}>{resource.description}</p>
            <h4 className={styles.resourceAction}>{resource.actionText}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Third;
