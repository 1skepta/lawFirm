import React from "react";
import Control from "../Control/Control";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <Control />
      <div className={styles.first}>
        <h1>About</h1>
      </div>
      <div className={styles.second}>
        <p>
          At Future Ore, we are constantly trying to reinvent what it means to
          practice law. We explore every avenue to make this firm a better place
          - for our team, for our clients, and for our communites
        </p>
      </div>
      <div className={styles.third}>
        <h1>Our Attorneys</h1>
        <div></div>
      </div>
      <div className={styles.fourth}></div>
      <div className={styles.fifth}>
        <h1>For Our Clients</h1>
        <p>
          We truly enjoy the work that we do and the clients whom we work with.
          We believe we have a responsibility that is so much more than
          delivering documents or legal advice. We’re not perfect, but we
          endeavor to be the best service provider possible. We strive to be
          innovative and constantly evolve to use technology that makes client
          communication and our legal work seamless and effective. We leverage
          software such as Clio, Carta, Pulley, CapBase, and HyperDraft, each
          cutting edge in their own right, and provide resources, including
          blogs, podcasts, infographics and more to help you build what you want
          to build.
        </p>
      </div>
    </div>
  );
}

export default About;
