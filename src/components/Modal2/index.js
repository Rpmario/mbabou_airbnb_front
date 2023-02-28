import React from 'react';
import styles from "./index.module.scss";

const Index = ({ children, closeModal, span, title1, title }) => {
  return (
        <div className={styles.wrapper}>
          <div className={styles.overlay} onClick={closeModal}></div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h1><span>{span}</span>{title1}</h1>
              <h2>{title}</h2>
              <button onClick={closeModal}><span>X</span></button>
            </div>
            <div className={styles.inner}>
              {children}
            </div>
          </div>
        </div>
  );
}

export default Index;
