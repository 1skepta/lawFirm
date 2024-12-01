import React from "react";
import styles from "./First.module.css";

function First() {
  return (
    <div>
      <div className={styles.background}>
        <h1>
          We're <span className={styles.icon}>here</span> to Help
        </h1>
        <p>ACCRA, GHANA</p>
      </div>
      <div className={styles.backgroundText}>
        <h1>Who is Future Ore?</h1>
        <h2>Welcome to Future | Ore</h2>
        <p>
          Future Ore is a full service law firm with a local feel and a global
          impact. We focus our practice in the areas of M&A, Sports & Gaming,
          Venture Capital, and Corporate Transactions. We pride ourselves in
          building real relationships with our clients and partnering with them
          for the long-haul.
        </p>
        <h4>LEARN MORE {">"}</h4>
      </div>
    </div>
  );
}

export default First;
