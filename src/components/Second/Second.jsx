import React, { useState, useRef } from "react";
import styles from "./Second.module.css";
import {
  FaRocket,
  FaHandshake,
  FaFutbol,
  FaLandmark,
  FaLightbulb,
  FaBuilding,
  FaBitcoin,
  FaFileContract,
} from "react-icons/fa";

const items = [
  { text: "Startups & Venture", icon: <FaRocket /> },
  { text: "Mergers & Acquisitions", icon: <FaHandshake /> },
  { text: "Sports Law", icon: <FaFutbol /> },
  { text: "Fund Representation", icon: <FaLandmark /> },
  { text: "Intellectual Property", icon: <FaLightbulb /> },
  { text: "Employment", icon: <FaFileContract /> },
  { text: "Commercial Real Estate Transactions", icon: <FaBuilding /> },
  { text: "Blockchain", icon: <FaBitcoin /> },
];

function Second() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("visible");
  const [direction, setDirection] = useState("next");
  const touchStartX = useRef(0);

  const changeContent = (newIndex, dir) => {
    setDirection(dir);
    setAnimationClass("exiting");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimationClass("entering");
      setTimeout(() => {
        setAnimationClass("visible");
      }, 500);
    }, 500);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    changeContent(newIndex, "previous");
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    changeContent(newIndex, "next");
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX.current - touchEndX;

    if (touchDiff > 50) {
      handleNext(); // Swipe left (next)
    } else if (touchDiff < -50) {
      handlePrevious(); // Swipe right (previous)
    }
  };

  const { text, icon } = items[currentIndex];

  return (
    <div
      className={styles.background}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1>We've Got You Covered</h1>
      <div className={styles.container}>
        <div
          className={styles.arrow}
          style={{
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            paddingRight: "20px",
          }}
          onClick={handlePrevious}
        >
          <p>{"<"}</p>
        </div>
        <div
          className={`${styles.content} ${styles[animationClass]} ${styles[direction]}`}
        >
          <div className={styles.icon}>{icon}</div>
          <p>{text}</p>
        </div>
        <div
          className={styles.arrow}
          style={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            paddingLeft: "20px",
          }}
          onClick={handleNext}
        >
          <p className={styles.right}>{">"}</p>
        </div>
      </div>
    </div>
  );
}

export default Second;
