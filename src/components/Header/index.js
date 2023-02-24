import {useContext, useState, useEffect} from 'react';
import WishlistContext from '../../context/WishlistContext';
import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../public/logo.jpg";
//import Button from "../../components/Button";
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Index = () => {
  const [openmenu, setopenMenu] = useState(false);

  const afficherMenu = () =>{
      setopenMenu(prev => !prev)
      console.log(openmenu)
  }

 

  const { wishlist } = useContext(WishlistContext);
  
  console.log(wishlist);

  
  //export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
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
          <Link href="/">
            <img src={Logo.src} alt="Airbnb" />
          </Link>
        </div>
        <div className={styles.header__menu1}>
          <p>N'impote où</p>
          <p>Une semaine</p>
          <p>Ajouter des voyageurs</p>
          <Link href="#" className={styles.header__search} >
            <MagnifyingGlassIcon />
          </Link>
        </div>
        <div className={styles.header__menu2}>
          <Link href="#" className={styles.header__menuLink}>
            <span>Mettre mon logement sur Airbnb</span>
          </Link>
          <Link href="#" className={styles.header__menuGlobe} >
              <img alt='' src='https://cdn-icons-png.flaticon.com/128/512/512127.png' color="black" height={20} />
          </Link>
          <Link href="#" className={styles.header__profil} onClick={()=>afficherMenu()}>
            <span href="#" className={styles.header__profilI}>
              <Bars3Icon color='black' width={25} />
            </span>
            <span href="#">
              <img alt='' src='https://cdn-icons-png.flaticon.com/512/7710/7710521.png' width={25} />
            </span>
          </Link>
      {openmenu ?
          <div className={styles.header__divMenu}>
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
              {/* <li className={styles.nav__item}>
                <Link href="/wishlist">
                  Favoris {wishlist.length}
                </Link>
              </li> */}
              <li className={styles.nav__item}>
                <Link href="/">
                  Accueil
                </Link>
              </li>
            </ul>
        </div>  : <></>
        }

        </div>
        <div className={styles.header__submain1}>
          <Link href="#" className={styles.header__chevronPrev} >
                <ChevronLeftIcon color="black" className={styles.header__chevronIcon} />
          </Link>
          <div className={styles.header__submain2}>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg'/>
              <p>Domes</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg'/>
              <p>Au pied des pistes</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg'/>
              <p>Luxe</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'/>
              <p>Piscines</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg'/>
              <p>Grandes demeures</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg'/>
              <p>Wow !</p>
            </Link>
            {/* <Link href="#" className={styles.header__img} >
              <img alt='' src=''/>
              <p></p>
            </Link> */}
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </Link>
          </div>
          <Link href="#" className={styles.header__chevronNext} >
            <ChevronRightIcon color="black" className={styles.header__chevronIcon} />
          </Link>
          <div className={styles.header__filter}>
            <Link href="#" className={styles.header__filterlink}>
              <img alt='' src='https://cdn-icons-png.flaticon.com/128/8414/8414931.png' />
              <span>Filtres</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Index;
