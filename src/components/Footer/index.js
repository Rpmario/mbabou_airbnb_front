import React from 'react';
import Link from "next/link";
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import styles from "./index.module.scss";

const Index = () => {
  return (
    <footer>
      <div className={styles.footer__main}>
        <div className={styles.footer__box}>
          <div className={styles.footer__bloc1}>
            <ol>
            <li>
                <span className={styles.footer__right}>
                &copy; 2023  Airbnb, Inc.
                </span>
              </li>
              <li>
                <span>.</span>
                <span className={styles.footer__link}>
                  Conditions générales
                </span>
              </li>
              <li>
                <span>.</span>
                <span className={styles.footer__link}>
                  Plan du site
                </span>
              </li>
              <li>
                <span>.</span>
                <span className={styles.footer__link}>
                  Fonctionnement du site
                </span>
              </li>
              <li>
                <span>.</span>
                <span className={styles.footer__link}>
                  Infos dur l'entreprise
                </span>
              </li>
              <li>
                <span>.</span>
                <span className={styles.footer__link}>
                  Destinations
                </span>
              </li>
            </ol>
          </div>
          <div className={styles.footer__bloc2}>
            <span className={styles.footer__l} >
              <img alt='' src='https://cdn-icons-png.flaticon.com/128/512/512127.png' color="black" height={17} className={styles.footer__icon} />
            </span>
            <span className={styles.footer__link2}>
              Français (FR)
            </span>
            <span className={styles.footer__l} >
              <span className={styles.footer__euro}>€</span>
            </span>
            <span className={styles.footer__link2}>
              EUR
            </span>
            <span className={styles.footer__link2}>
              Assistance et ressources
            </span>
            <span className={styles.footer__l}>
              <ChevronUpIcon color="black" height={19} className={styles.footer__icon} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
