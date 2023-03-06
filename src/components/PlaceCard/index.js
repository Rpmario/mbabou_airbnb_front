import { useContext, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import WishlistContext from "../../context/WishlistContext";
import { StarIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from "next/router";

const Index = ({ place }) => {
  const router = useRouter()

  const { addPlaceWishlist } = useContext(WishlistContext);
  const [clicked, setClicked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateWish = async() => {
    const Connexion = await verifconnected()
    console.log(Connexion, "test wishlist")
    if (Connexion === true){
      setClicked (previous => !previous)
    }
    else{
      router.push("/login")
      if (router.isReady) {
        window.location.reload();
      }
    }

  }

  const verifconnected = async() => {
    const token = await localStorage.getItem("token"); 

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % place.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? place.images.length - 1 : currentImageIndex - 1
    );
  };

  const changePage = () => {
    router.push(`/myposts/${place._id}`)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail__wrapper}>
        <ChevronLeftIcon onClick={handlePreviousImage} className={styles.prev} />
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
            <HeartIcon onClick={() => updateWish()} className={styles.coeur} color="gray"
            strokeWidth={1.5} stroke="white"/>
          </Link>}
        </button>
        <img src={place.images[currentImageIndex]} alt={place.title} onClick={()=> {changePage()}} />
        <ChevronRightIcon onClick={handleNextImage} className={styles.next}/>
      </div>
      <div className={styles.content} onClick={()=> {changePage()}}>
        <div className={styles.metadata}>
          <p><b>{place.title}</b></p>
          <p>{place?.proprio || "Particulier"}</p>
          <p>{place?.periode || "3-9 avril"}</p>
          <p><b>{place.pricing.perDay + " €"}</b> par nuit</p>
        </div>
        <div className={styles.rate}>
          <StarIcon className={styles.star__rate} color="black"/>
          <span><b>{" " + place?.rate || " None"}</b></span>
        </div>
      </div>
    </div>
  );
}

export default Index;
