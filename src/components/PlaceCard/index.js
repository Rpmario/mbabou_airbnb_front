import { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
//import HearthIcon from "../../../public/heart-light.svg";
import WishlistContext from "../../context/WishlistContext";
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';


const Index = ({ place }) => {

  const { addPlaceWishlist } = useContext(WishlistContext);
  const [clicked, setClicked] = useState(false);


const updateWish = () => {
  setClicked (previous => !previous)

}

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail__wrapper}>
        <button
          className={styles.btn__whishlist}
          onClick={
            () => {
              addPlaceWishlist(place);
            }
          }
        >
          {/* <img src={HearthIcon.src} alt="favoris" /> */}
          {clicked? <HeartIcon onClick={() => updateWish()} className={styles.coeur} color="red"/>:
          <HeartIcon onClick={() => updateWish()} className={styles.coeur} color="gray"/>}
        </button>
        <img src={place.images[0]} alt={place.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <p>{place.title}</p>
          <p><b>{place.pricing.perDay}</b> € par nuit</p>
        </div>
        <div className={styles.rate}>
          <StarIcon className={styles.star__rate} color="black"/>
          <span>{place?.rate || "None"}</span>
        </div>
        {/* <div className={styles.description}>
          <span>{place.description}</span>
        </div> */}
      </div>
    </div>
  );
}

export default Index;
