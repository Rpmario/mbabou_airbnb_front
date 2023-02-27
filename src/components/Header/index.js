import {useContext, useState, useEffect, useRef} from 'react';
import WishlistContext from '../../context/WishlistContext';
import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../public/logo.png";
import Logo2 from "../../../public/airbnbi.png";
// import WithAuth from '../../HOC/WithAuth';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Index = () => {
  const [openmenu, setopenMenu] = useState(false);

  const divRef = useRef(null);

  const afficherMenu = () =>{
      setopenMenu(prev => !prev)
      console.log(openmenu)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setopenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);
 

  const { wishlist } = useContext(WishlistContext);
  
  console.log(wishlist);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    //const token = localStorage.getItem("token");
    useEffect(() => {
      const token = localStorage.getItem("token"); 

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, []);
  


  return (
    <header>
      <div className={styles.header__main}>
        <div className={styles.header__logo}>
          <Link href="/" className={styles.header__logoIcon}>
            <img src={Logo2.src} alt="airbnbi" width={33}/>
          </Link>
          <Link href="/" className={styles.header__logoImg}>
            <img src={Logo.src} alt="Airbnb" />
          </Link>
        </div>
        <div className={styles.header__menu1}>
          <p>N'impote où</p>
          <p>Une semaine</p>
          <p>Ajouter des voyageurs</p>
          <p className={styles.header__search} >
            <MagnifyingGlassIcon />
          </p>
        </div>
        <div className={styles.header__menu2}>
          <p className={styles.header__menuLink}>
            <span>Mettre mon logement sur Airbnb</span>
          </p>
          <p className={styles.header__menuGlobe} >
              <img alt='' src='https://cdn-icons-png.flaticon.com/128/512/512127.png' color="black" height={20} />
          </p>
          <p className={styles.header__profil} onClick={()=>afficherMenu()}>
            <span className={styles.header__profilI}>
              <Bars3Icon color='black' width={25} />
            </span>
            <span>
              <img alt='' src='https://cdn-icons-png.flaticon.com/512/7710/7710521.png' width={25} />
            </span>
          </p>
      {openmenu ?
          <div ref={divRef} className={styles.header__divMenu}>
            <ul className={styles.nav__list1}>
              <li className={styles.nav__item}>
              {!isAuthenticated && (
                <Link href="/register" className={styles.header__register} >
                  Inscription
                </Link>
              )}
              {isAuthenticated && (
                <Link href="/myposts">
                  Mes posts
                </Link>
              )}
            </li>
            <li className={styles.nav__item}>
              {!isAuthenticated && (
                <Link href="/login">
                  Connexion
                </Link>
              )}
              {isAuthenticated && (
                <Link href="/logout">
                  Déconnexion
                </Link>
              )}
            </li>
            </ul>
            <ul className={styles.nav__list2}>
              <li className={styles.nav__item}>
                <Link href="#" className={styles.nav__mettre}>
                  Mettre mon logement sur Airbnb
                </Link>
              </li>
              <li className={styles.nav__item}>
              {!isAuthenticated && (
                <Link href="/aide">
                  Aide
                </Link>
              )}
              {isAuthenticated && (
                <Link href="/wishlist">
                  Favoris {wishlist.length}
                </Link>
              )}
              </li>
              <li className={styles.nav__item}>
                <Link href="/">
                  Accueil
                </Link>
              </li>
            </ul>
        </div>  : <></>
        }

        </div>
        {/* submain here */}
      </div>
    </header>
  );
}


export default Index;
