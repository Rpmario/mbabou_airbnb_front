import Link from 'next/link';
import React, { useRef } from 'react'
import styles from "./index.module.scss";
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Submain = () => {
  const subref = useRef()
  const scrollLeft = () => {
    subref.current.scrollLeft = scrollLeft -30
  }
  const scrollRight = () => {
    subref.current.scrollLeft = scrollLeft +30
  }
  return (
    <div className={styles.header__submain1}>
          <p className={styles.header__chevronPrev} >
            <ChevronLeftIcon onClick={() => scrollLeft()} color="black" className={styles.header__chevronIcon} />
          </p>
          <div ref={subref} className={styles.header__submain2}>
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
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </Link>
            <Link href="#" className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
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
          <p className={styles.header__chevronNext} >
            <ChevronRightIcon onClick={() => scrollRight()} color="black" className={styles.header__chevronIcon} />
          </p>
          <div className={styles.header__filter}>
            <p className={styles.header__filterlink}>
              <img alt='' src='https://cdn-icons-png.flaticon.com/128/8414/8414931.png' />
              <span>Filtres</span>
            </p>
          </div>
        </div>
  )
}

export default Submain
