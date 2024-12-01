import React, { useState, useEffect } from "react";
import styles from "./Control.module.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Control() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.slideshowItems} li`);
    if (isMenuOpen) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add(styles.visible);
        }, index * 100);
      });
    } else {
      const visibleItems = document.querySelectorAll(
        `.${styles.slideshowItems} li.visible`
      );
      visibleItems.forEach((item) => {
        item.classList.remove(styles.visible);
      });
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div className={isMenuOpen ? styles.divVisible : styles.divHidden}>
        <div className={styles.slideshowItems}>
          <ul>
            <li>ABOUT</li>
            <li>GLOBAL REACH</li>
            <li>RESOURCES</li>
            <li>PRACTICE AREAS</li>
            <li>ATTORNEYS</li>
            <li>STAFF MEMBERS</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
          </ul>
        </div>
      </div>

      <div className={styles.head}>
        <h1>FORTUNE | ORE</h1>
        {isMenuOpen ? (
          <GrClose className={styles.icon} size={28} onClick={handleToggle} />
        ) : (
          <FaBars className={styles.icon} size={28} onClick={handleToggle} />
        )}
      </div>
    </div>
  );
}

export default Control;
