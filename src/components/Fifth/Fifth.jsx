import React, { useEffect, useRef } from "react";
import styles from "./Fifth.module.css";

function Fifth() {
  const experience = [
    {
      field: "Corporate Governance",
      title: "Stockholders' Right of Venture Investors After Moelis",
      text: "This blog explores the tension between Delaware corporate law's board management principle and investor demands for control, highlighting legal challenges and potential legislative changes to the Delaware General Corporation Law after the Moelis decision",
      actionText: "READ MORE >",
    },
    {
      field: "Funding & Capital Raising",
      title: "What Is A Search Fund & Why Should You Start One?",
      text: "Starting a search fund offers a direct path to leading a profitable business. This blog covers the history, mechanics, and life cycle of a search fund, as well as the characteristics of companies targeted by search funds.",
      actionText: "READ MORE >",
    },
    {
      field: "M&A",
      title: "The Power of an LOI",
      text: "This blog post explains why a Letter of Intent (LOI) is essential in acquisition transactions, despite initial alignment between parties. It outlines how and LOI benefits both buyers and sellers by clarifying key financial and legal terms, setting expectations, and providing enforceable confidentiality and exclusivity",
      actionText: "READ MORE >",
    },
  ];

  const headingRef = useRef(null);
  const cardsRef = useRef([]);
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
    cardsRef.current.forEach((card) => observer.observe(card));
    if (viewAllRef.current) observer.observe(viewAllRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.background}>
      <h1 ref={headingRef} className={styles.heading}>
        Learn from Our Experience
      </h1>
      <div className={styles.experienceContainer}>
        {experience.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.experienceCard}
          >
            <h5 className={styles.experienceField}>
              {exp.field.toUpperCase()}
            </h5>
            <h2 className={styles.experienceTitle}>{exp.title}</h2>
            <p className={styles.experienceText}>{exp.text}</p>
            <h4 className={styles.experienceAction}>{exp.actionText}</h4>
          </div>
        ))}
      </div>
      <h4 ref={viewAllRef} className={styles.viewAll}>
        SEE MORE {" >"}
      </h4>
    </div>
  );
}

export default Fifth;
