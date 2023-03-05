import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from "./index.module.scss";
import Modal2 from "../../components/Modal2";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Submain = () => {

  const [filter, setFilter] = useState({
    prixMin: "",
    prixMax: "",
    capaciteMin: "",
    capaciteMax: "",
    typePlace: "",
  });

  const subref = useRef()
  const scrollLeft = () => {
    subref.current.scrollLeft = scrollLeft -20
  }
  const scrollRight = () => {
    subref.current.scrollLeft = scrollLeft +20
  }
  
  //filtres
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFilter((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    const handleSubmit = (e) => {
      console.log("prix max= ",filter)
    };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.header__submain1}>
          <p className={styles.header__chevronPrev} >
            <ChevronLeftIcon onClick={() => scrollLeft()} color="black" className={styles.header__chevronIcon} />
          </p>
          <div ref={subref} className={styles.header__submain2}>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg'/>
              <p>Domes</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg'/>
              <p>Au pied des pistes</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg'/>
              <p>Luxe</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'/>
              <p>Piscines</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg'/>
              <p>Grandes demeures</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg'/>
              <p>Wow !</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
              <p>Bord de mer</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
              <p>Avec vue</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'/>
              <p>Campagne</p>
            </div>
            <div className={styles.header__img} >
              <img alt='' src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg'/>
              <p>Vignobles</p>
            </div>
          </div>
          <p className={styles.header__chevronNext} >
            <ChevronRightIcon onClick={() => scrollRight()} color="black" className={styles.header__chevronIcon} />
          </p>
          {/* Modal filtres */}
          <>
            {
              openModal && (
                <Modal2                      
                  title2="Filtres" 
                  closeModal={() => setOpenModal(false)}>
                  <form onSubmit= {handleSubmit} className={styles.filtreForm}>
                    <div className={styles.filtre}>
                    <Input
                      titleLabel="Prix minimum"
                      inputType="number"
                      inputPlaceholder="€"
                      inputName="prixMin"
                      inputValue={filter.prixMin || ""}
                      inputOnChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <b> - </b>
                    <Input
                      titleLabel="Prix maximum"
                      inputType="number"
                      inputPlaceholder="€"
                      inputName="prixMax"
                      inputValue={filter.prixMax || ""}
                      inputOnChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    </div>
                    <div className={styles.filtre}>
                      <Input
                        titleLabel="Capacité minimum"
                        inputType="number"
                        inputName="capaciteMin"
                        inputValue={filter.capaciteMin || ""}
                        inputOnChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <b> - </b>
                      <Input
                        titleLabel="Capacité maximum"
                        inputType="number"
                        inputName="capaciteMax"
                        inputValue={filter.capaciteMax || ""}
                        inputOnChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <p className={styles.post__radio}>
                      Type de logement : 
                    </p>
                    <div className={styles.post__flex}>
                      <Input
                        titleLabel="Villa"
                        inputType="radio"
                        inputName="typePlace"
                        inputValue="63d2857130547279210f97af"
                      />
                      <Input
                        titleLabel="Maison"
                        inputType="radio"
                        inputName="typePlace"
                        inputValue="63d286c430547279210f97b1"
                      />
                      <Input
                        titleLabel="Appartement"
                        inputType="radio"
                        inputName="typePlace"
                        inputValue="63d286d330547279210f97b3"
                      />
                    </div>
                    <Button
                      title="Filtrer"
                      type="submit"
                      btnClass="btn__primary"
                    />
                  </form>
                </Modal2>
              )
            }
                  </>
          <div className={styles.header__filter}>
            <p className={styles.header__filterlink}>
              <img alt='' src='https://cdn-icons-png.flaticon.com/128/8414/8414931.png' />
              <Button
                title="Filtres"
                handleClick={() => {
                  setOpenModal(true);
                }}
                type="button"
                btnClass="btn__primary"
              />
            </p>
          </div>
        </div>
  )
}

export default Submain
