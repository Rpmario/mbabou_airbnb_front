import React from 'react';
import Link from "next/link";
import { GlobeAltIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import styles from "./index.module.scss";

const Index = () => {
  return (
    <footer>
      <span className={styles.footer__space}>
      </span>
      <div className={styles.footer__main}>
        <div className={styles.footer__box}>
          <div className={styles.footer__bloc1}>
            <ol>
            <li>
                <span href="#" className={styles.footer__right}>
                &copy; 2023  Airbnb, Inc.
                </span>
              </li>
              <li>
                <span>.</span>
                <Link href="#" className={styles.footer__link}>
                  Conditions générales
                </Link>
              </li>
              <li>
                <span>.</span>
                <Link href="#" className={styles.footer__link}>
                  Plan du site
                </Link>
              </li>
              <li>
                <span>.</span>
                <Link href="#" className={styles.footer__link}>
                  Fonctionnement du site
                </Link>
              </li>
              <li>
                <span>.</span>
                <Link href="#" className={styles.footer__link}>
                  Infos dur l'entreprise
                </Link>
              </li>
              <li>
                <span>.</span>
                <Link href="#" className={styles.footer__link}>
                  Destinations
                </Link>
              </li>
            </ol>
          </div>
          <div className={styles.footer__bloc2}>
            <Link href="#" className={styles.footer__l} >
              <GlobeAltIcon color="black" height={17} className={styles.footer__icon} />
            </Link>
            <Link href="#" className={styles.footer__link2}>
              Français (FR)
            </Link>
            <Link href="#" className={styles.footer__l} >
              <span className={styles.footer__euro}>€</span>
            </Link>
            <Link href="#" className={styles.footer__link2}>
              EUR
            </Link>
            <Link href="#" className={styles.footer__link2}>
              Assistance et ressources
            </Link>
            <Link href="#" className={styles.footer__l}>
              <ChevronUpIcon color="black" height={19} className={styles.footer__icon} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
