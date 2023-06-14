import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

const Layout = () => {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex" }}>
        <div className={styles.description}>
          <div>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/portada-removebg.png"
                alt="Portada Logo"
                className={styles.vercelLogo}
                width={600}
                height={500}
                priority
              />
            </a>
          </div>
        </div>

        <div
          className={styles.center}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "end",
            alignItems: "end",
            width: "100%",
          }}
        >
          <h1 style={{ margin: "0px" }}> HTML LAYOUT </h1>
          <h2 style={{ margin: "0px" }}> STRUCTURE </h2>
          <div>
            <p style={{ marginBottom: "0px" }}>
              helps you to start the correct structure of an html <br />
              project by selecting different html structures dynamically <br />
              and provides you with the corresponding correct code.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
