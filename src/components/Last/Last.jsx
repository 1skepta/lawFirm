import React from "react";
import styles from "./Last.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Last() {
  return (
    <div className={styles.last}>
      <div className={styles.background}>
        <h4>DALLAS</h4>
        <p>5307 E Mockingbird Ln</p>
        <p>Suite 800</p>
        <p>Dallas, TX 75206</p>
        <p>(214) 821-2300</p>
        <h4>AUSTIN</h4>
        <p>620 Congress Ave</p>
        <p>Suite 320</p> <p>Austin, TX 78701</p>
        <p>(512) 813-7300</p> <h4>EL PASO</h4> <p>2601 N Stanton St</p>
        <p>Suite A</p> <p>El Paso, TX 79902</p> <p>(915) 703-7720</p>
        <h2>Join Our Newsletter</h2>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
        <div className={styles.logos}>
          <FaInstagram />
          <FaXTwitter />
          <FaTwitch />
          <FaDiscord />
          <FaLinkedin />
          <FaFacebook />
        </div>
      </div>
      <p>
        © 2024 FORTUNE ORE STALEY YOUNG P.C. | ALL RIGHTS RESERVED | SITE BY
        CREATIVEPICKLE | LEA ACERCA DE NUESTROS SERVICIOS EN ESPANOL
      </p>
      <p className={styles.privacy}>PRIVACY POLICY</p>
    </div>
  );
}

export default Last;
