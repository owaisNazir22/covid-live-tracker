import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Developed By{" "}
          <a
            href="https://github.com/owaisnazir22"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Owais Nazir
          </a>
        </h6>
      </div>
        </React.Fragment>
  );
};

export default Footer;
