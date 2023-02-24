import { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
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
          {clicked? 
          <Link href="#">
            <HeartIcon onClick={() => updateWish()} className={styles.coeur} color="red"/>
          </Link>:
          <Link href="#">
            <HeartIcon onClick={() => updateWish()} className={styles.coeur} color="gray"/>
          </Link>}
        </button>
        <img src={place.images[0]} alt={place.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}>
          <p><b>{place.title}</b></p>
          <p>{place?.proprio || "Particulier"}</p>
          <p>{place?.periode || "3-9 avril"}</p>
          <p><b>{place.pricing.perDay + " €"}</b> par nuit</p>
        </div>
        <div className={styles.rate}>
          <StarIcon className={styles.star__rate} color="black"/>
          <span><b>{place?.rate || " None"}</b></span>
        </div>
      </div>
    </div>
  );
}

export default Index;
