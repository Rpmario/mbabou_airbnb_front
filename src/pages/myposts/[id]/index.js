import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios'
import Link from "next/link";
import { StarIcon, ArrowUpTrayIcon, HeartIcon, UserCircleIcon, 
         ChevronLeftIcon, MapPinIcon, KeyIcon, CalendarIcon 
} from '@heroicons/react/24/solid';
import styles from "./index.module.scss";
import Modal2 from "../../../components/Modal2";
import Button from "../../../components/Button";
import GoogleMap from "../../../components/GoogleMap";

const index = () => {

    // const latitude = 48.862725;
    // const longitude = 2.287592;

    const [place, setPlace ]= useState()

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
      console.log(openModal);
    }, [openModal]);
  

    
const getPostData = async(id) =>{
    console.log(id)
     await axios.get(`http://localhost:4000/api/v1/place/getoneplace/${id}`).then((res) => setPlace(res.data[0]))
}


    const router = useRouter();
    useEffect(()=>{
        let id = router.query.id
        if (router.query.id === undefined && sessionStorage.getItem("id") != null) {
            id = sessionStorage.getItem("id");
          } else {
            sessionStorage.setItem("id", router.query.id);
          }
    getPostData(id)
    },[])

    return (
        <div>
         {place ? 
         <div className={styles.onePlace__main}>
            <div className={styles.onePlace__imgCachee}>
              <div>
                <Link href="/" className={styles.onePlace__logement}>
                  <ChevronLeftIcon width={15} color="black" />
                  <span>Logements</span>
                </Link>
                <p>
                  <b><ArrowUpTrayIcon className={styles.onePlace__shareIcon} width={14} strokeWidth={1.5} stroke="black" color="black"/></b>
                  <b><HeartIcon className={styles.onePlace__likeIcon} width={14} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black"/></b>
                </p>
                </div>                
                <img src={place.images[0]} alt={place.title} />
            </div>
            <h1>{place.title}</h1>
            <div className={styles.onePlace__submain}>
              <div className={styles.onePlace__submainleft}>
                <p className={styles.onePlace__rate}>
                  <StarIcon className={styles.star__rate} width={12} color="black"/>
                  <span>{" " + place?.rate + " " || " None "}</span>
                </p>
                <b>.</b>
                <p className={styles.star__comment}>
                 17 commentaires
                </p>
                <b>.</b>
                <p className={styles.star__city}>
                  {place?.address?.zipCode + "," || "00000,"}
                  {place?.address?.street + "," || "Street name,"}
                  {place?.address?.city || "City"}
                  {/* {place?.country + " " || " France"} */}
                </p>
              </div>
              <div className={styles.onePlace__submainright}>
                <p>
                  <ArrowUpTrayIcon className={styles.onePlace__shareIcon} width={14} color="black"/>
                  <span>Partager</span>
                </p>
                <p>
                  <HeartIcon className={styles.onePlace__shareIcon} width={14} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black"/>
                  <span>Enregistrer</span>
                </p>
              </div>
            </div>
            <div className={styles.onePlace__images}>
              <div className={styles.onePlace__grandeImage}>
                <img src={place.images[0]} alt={place.title} />
              </div>
              <div className={styles.onePlace__4images}>
                <table className={styles.onePlace__table}>
                  <tbody className={styles.onePlace__tbody}>
                    <tr className={styles.onePlace__tr1}>
                      <td className={styles.onePlace__td}><img src={place.images[1] || "https://media.gettyimages.com/id/130408168/fr/photo/serviettes-pli%C3%A9es-sur-les-chaises-longues-au-bord-de-la-piscine.jpg?s=612x612&w=0&k=20&c=2IAHaph0S9U-RMKTuepx9mTfqYku5I-Z8FxcrylobPU="} alt={place.title} /></td>
                      <td className={styles.onePlace__td}><img className={styles.onePlace__img2} src={place.images[2] || "https://media.gettyimages.com/id/532881696/fr/photo/artists-house-in-provence-france.jpg?s=612x612&w=0&k=20&c=NQNYz0qVU7-F40BEwSIF8eVhTzbZ8U-3-CbCH8Ui7ds="} alt={place.title} /></td>
                    </tr>
                    <tr className={styles.onePlace__tr2}>
                      <td className={styles.onePlace__td}><img src={place.images[3] || "https://media.gettyimages.com/id/1044560218/fr/photo/villa-de-vacances-de-luxe-avec-piscine-%C3%A0-d%C3%A9bordement-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=yEtlo_IpQ7GV998a6Dv8jEL47DdQ6pz1wVBNGl987MA="} alt={place.title} /></td>
                      <td className={styles.onePlace__td}><img className={styles.onePlace__img4} src={place.images[4] || "https://media.gettyimages.com/id/1292966840/fr/photo/pink-toy-flamingo-floating-on-swimmingpool-next-to-sunbed-and-palm-trees.jpg?s=612x612&w=0&k=20&c=zPaQ-zWmJ9-WAtTyVO09zCoh7-y0C0bMczgj5UfmDyk="} alt={place.title} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.onePlace__details}>
              <div className={styles.onePlace__detailsleft}>
                <div className={styles.onePlace__detailsbloc1}>
                  <div className={styles.onePlace__subBloc1}>
                    <h2>
                      <span>{place?.types?.name + " " || "Type "}</span>
                      privé(e) dans : 
                      <span>{" " + place?.types?.name + " " || " Type "}</span>
                      <b>. </b>
                      Chez <span> {" " + place?.owner?.firstName || "Owener"}</span>
                    </h2>
                    <p className={styles.onePlace__subBloc1Down}>
                      {place?.capacity + " " || "2 "}
                      voyageurs <b> . </b>
                      {place?.types?.name || "Type"}<b> . </b>
                      {place?.capacity/2 + " " || "2 "}
                      lit(s) <b> . </b>
                      {place?.capacity/2 + " " || "2"} <b> . </b>
                      salle(s) de bain
                    </p>
                  </div>
                  <p className={styles.onePlace__subBloc2}>
                    <UserCircleIcon width={60} />
                  </p>
                </div>
                <div className={styles.onePlace__detailsbloc2}>
                  <div>
                    <b><MapPinIcon width={25} fill="none" strokeWidth={1.5} stroke="currentColor" /></b>
                    Idéalement situé
                  </div>
                  <p>
                    100 % des voyageurs ont attribué 5 étoiles à l'emplacement du logement.
                  </p>
                  <div>
                    <b><KeyIcon width={25} fill="none" strokeWidth={1.5} stroke="currentColor" /></b>
                    Procédure d'arrivée irréprochable
                  </div>
                  <p>
                    90 % des voyageurs ont attribué 5 étoiles à la procédure d'arrivée.
                  </p>
                  <div>
                    <b><CalendarIcon width={25} fill="none" strokeWidth={1.5} stroke="currentColor" /></b>
                    Annulation gratuite pendant 48 heures.
                  </div>
                </div>
                <div className={styles.onePlace__detailsbloc3}>
                  <h1><span>air</span>cover</h1>
                  <p>
                    Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
                  </p>
                  <>
                  {
                    openModal && (
                    <Modal2 
                      span="air"
                      title1="cover"
                      title="AirCover est une protection complète gratuite et incluse à chaque réservation." 
                      closeModal={() => setOpenModal(false)}>
                      <div className={styles.onePlace__modalBox}>
                        <div className={styles.onePlace__modal}>
                          <h2>Garantie protection des réservations</h2>
                          <p>
                            Dans les rares cas où un hôte devrait annuler votre réservation dans les 30 
                            jours avant votre arrivée, nous vous trouvons un logement comparable ou 
                            supérieur, ou nous vous remboursons.
                          </p>
                        </div>
                        <div className={styles.onePlace__modal}>
                          <h2>Garantie à l'arrivée</h2>
                          <p>
                            Si vous ne pouvez pas accéder à votre logement et que l'hôte ne peut pas résoudre 
                            le problème, nous vous trouverons un logement comparable ou supérieur pour toute 
                            la durée de votre séjour initial, ou nous vous rembourserons.
                          </p>
                        </div>
                      </div>
                      <div className={styles.onePlace__modalBox}>
                        <div className={styles.onePlace__modal}>
                          <h2>Garantie exactitude de l'annonce</h2>
                          <p>
                            Au cours de votre séjour, si vous constatez des inexactitudes entre l'annonce 
                            et le logement (par exemple, le réfrigérateur ne fonctionne plus et votre hôte 
                            a des difficultés à le réparer ou le nombre de chambres est inférieur à celui 
                            indiqué dans la description), vous disposez de trois jours pour nous le signaler 
                            et nous vous trouverons un logement de qualité comparable ou supérieure, ou nous vous rembourserons.
                          </p>
                        </div>
                        <div className={styles.onePlace__modal}>
                          <h2>Assistance sécurité 24h/24</h2>
                          <p>
                            Si vous ne vous sentez pas en sécurité, des agents spécialement formés dans ce 
                            domaine se tiennent à votre disposition, de jour comme de nuit.
                          </p>
                        </div>
                      </div>
                      <p className={styles.onePlace__modalPied}>
                        Découvrez comment AirCover protège votre réservation dans notre <span>Centre d'aide</span>
                      </p>
                    </Modal2>
                      )
                  }
                  </>
                  <Button
                    title="En savoir plus"
                    handleClick={() => {
                      setOpenModal(true);
                    }}
                    type="button"
                    btnClass="btn__primary"
                  />
                </div>
                <div className={styles.onePlace__detailsbloc4}>
                  <h1>
                    Description
                  </h1>
                  <p>
                    {place?.description + " . " || "Description "}
                  </p>
                  <b>En savoir plus</b>
                </div>
                <div className={styles.onePlace__detailsbloc5}>
                  <h1>Ce que propose ce logement</h1>
                  <div className={styles.onePlace__detailsBox}>
                    <div>
                      <p>
                        <img alt='parking' src='https://cdn-icons-png.flaticon.com/128/430/430369.png'/>
                        Parking
                      </p>
                      <p>
                        <img alt='wifi' src='https://cdn-icons-png.flaticon.com/128/3926/3926195.png'/>
                        Wifi
                      </p>
                      <p>
                        <img alt='tv' src='https://cdn-icons-png.flaticon.com/128/4520/4520624.png'/>
                        Tv avec abonnement Netflix
                      </p>
                      <p>
                        <img alt='cuisine' src='https://cdn-icons-png.flaticon.com/128/4100/4100886.png'/>
                        Equipements de cuisine de base
                      </p>
                      <p>
                        <img alt='refrigerateur' src='https://cdn-icons-png.flaticon.com/128/4352/4352967.png'/>
                        Réfrigérateur
                      </p>
                    </div>
                    <div>
                      <p>
                        <img alt='four' src='https://cdn-icons-png.flaticon.com/128/9689/9689295.png'/>
                        Four à micro-ondes
                      </p>
                      <p>
                        <img alt='bain' src='https://cdn-icons-png.flaticon.com/128/456/456503.png'/>
                        Salle de bain
                      </p>
                      <p>
                        <img alt='bureau' src='https://cdn-icons-png.flaticon.com/128/3197/3197905.png'/>
                        Espace de travail
                      </p>
                      <p>
                        <img alt='chauffage' src='https://cdn-icons-png.flaticon.com/128/2652/2652870.png'/>
                        Chauffage central
                      </p>
                      <p>
                        <img alt='secourkit' src='https://cdn-icons-png.flaticon.com/128/3481/3481029.png'/>
                        Kit de premiers secours
                      </p>
                    </div> 
                  </div>                 
                </div>
              </div>
              <div className={styles.onePlace__detailsright}>
                <div className={styles.onePlace__div1}>
                  <p className={styles.onePlace__p1}>
                    <span>{place.pricing.perDay + " € "}</span>par nuit
                  </p>
                  <p className={styles.onePlace__p2}>
                    <StarIcon className={styles.star__rate} width={15} color="black"/>
                    <span>{" " + place?.rate + " " || " None "}</span>
                    <b> . </b> <i>18 commentaires</i>
                  </p>
                </div>
                <div className={styles.onePlace__div2}>
                  <div className={styles.onePlace__div2_1}>
                    <div className={styles.onePlace__div2_1Left}>
                      <h2>ARRIVEE</h2>
                      <p>01/04/2023</p>
                    </div>
                    <div className={styles.onePlace__div2_1Right}>
                      <h2>DEPART</h2>
                      <p>10/04/2023</p>
                    </div>
                  </div>
                  <div className={styles.onePlace__div2_2}>
                    <h2>VOYAGEURS</h2>
                    <p>
                      <select>
                        <option value="option1">1 voyageur</option>
                        <option value="option2">2 voyageurs</option>
                        <option value="option3">3 voyageurs</option>
                        <option value="option4">4 voyageurs</option>
                        <option value="option5">5 voyageurs</option>
                        <option value="option1">6 voyageurs</option>
                        <option value="option2">7 voyageurs</option>
                        <option value="option3">8 voyageurs</option>
                        <option value="option4">9 voyageurs</option>
                        <option value="option5">10 voyageurs</option>
                      </select>
                    </p>
                  </div>
                </div>
                <div className={styles.onePlace__div3}>
                    <Button
                      title="Réserver"
                      // handleClick={() => {
                      //   setOpenModal(true);
                      // }}
                      type="button"
                      btnClass="btn__primary"
                    />
                    <p>
                      Aucun montant ne vous sera débité pour le moment
                    </p>
                  </div>
                  <div className={styles.onePlace__div4}>                    
                    <p>
                      <span>90 € x 9 nuits</span>
                      <span>810 €</span>
                    </p>
                    <p>
                      <span>Frais de service Airbnb</span>
                      <span>76 €</span>
                    </p>
                    <p>
                      <span>Taxes</span>
                      <span>20 €</span>
                    </p>
                  </div>
                  <div className={styles.onePlace__div5}>                    
                    <p>
                      <span>Total</span>
                      <span>906 €</span>
                    </p>
                  </div>
              </div>
            </div>
            <div className={styles.onePlace__map}>
              <h1>Où se situe le logement</h1>
              <p>
                {place?.address?.street + ", " || "Street name, "}
                {place?.address?.zipCode + ", " || "00000, "}
                {place?.address?.city || "City"}
              </p>
              <GoogleMap 
                latitude={place?.address?.gps?.lat || "48.862725"} 
                longitude={place?.address?.gps?.long || "2.287592"} 
              />
            </div>

            {/* <p>{place?.proprio || "Particulier"}</p>
            <p>{place?.periode || "3-9 avril"}</p>
            <p><b>{place.pricing.perDay + " €"}</b> par nuit</p>
            <p><img src={place.images[0 , 1 , 2]} alt={place.title} /></p> */}
         </div>
         : <div></div>}
        </div>
    )
}

export default index
