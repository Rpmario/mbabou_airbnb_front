import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios'
import Link from "next/link";
import { StarIcon, ArrowUpTrayIcon, HeartIcon, UserCircleIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import styles from "./index.module.scss";

const index = () => {

    const [place, setPlace ]= useState()

    
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
                    <p className={styles.onePlace__subBloc1Up}>
                      Logement entier :
                      {" " + place?.types?.name + " . " || "Type"}
                      chez
                      {" " + place?.owner?.lastName || "Owener"}
                    </p>
                    <p className={styles.onePlace__subBloc1Down}>
                      {place?.capacity + " . " || "2 "}
                      voyageurs
                      {" . " + place?.types?.name + " . " || "Type"}
                      {place?.capacity/2 + " . " || "2 "}
                      lit(s)
                      {" . " + place?.capacity/2 + " " || "2 "}
                      salle(s) de bain
                    </p>
                  </div>
                  <p className={styles.onePlace__subBloc2}>
                    <UserCircleIcon width={30} />
                  </p>
                </div>
                <p className={styles.onePlace__detailsbloc2}>
                  
                </p>
              </div>
              <div className={styles.onePlace__detailsright}>

              </div>
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
