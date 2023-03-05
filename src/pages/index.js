import PlaceGrid from "../components/PlaceGrid/";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Submain from "../components/Header/submain";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState([]);

  const getData = () =>
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json().then((r) => setData(r)));

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  console.log(router.query);

  return (
    <MainLayout>
  <Submain />
  {(!router.query.prixMin && !router.query.prixMax && !router.query.capaciteMin && 
    !router.query.capaciteMax && !router.query.typePlace) ? (
      <PlaceGrid places={data} />
    ) : (
      <>
        {data.filter((place) => {
          const prixMin = router.query.prixMin ? parseInt(router.query.prixMin) : Number.NEGATIVE_INFINITY;
          const prixMax = router.query.prixMax ? parseInt(router.query.prixMax) : Number.POSITIVE_INFINITY;
          const capaciteMin = router.query.capaciteMin ? parseInt(router.query.capaciteMin) : Number.NEGATIVE_INFINITY;
          const capaciteMax = router.query.capaciteMax ? parseInt(router.query.capaciteMax) : Number.POSITIVE_INFINITY;
          const typePlace = router.query.typePlace ? router.query.typePlace : "";
          return place.pricing.perDay >= prixMin && place.pricing.perDay <= prixMax && 
                 place.capacity >= capaciteMin && place.capacity <= capaciteMax &&
                 (!typePlace || place.types === typePlace);
        }).length === 0 ? (
          <div className={styles.filter__result}>
            <h1>Aucun résultat ne correspond à votre recherche !</h1>
            <Link href="/">Retour</Link>
          </div>
        ) : (
          <PlaceGrid places={data.filter((place) => {
            const prixMin = router.query.prixMin ? parseInt(router.query.prixMin) : Number.NEGATIVE_INFINITY;
            const prixMax = router.query.prixMax ? parseInt(router.query.prixMax) : Number.POSITIVE_INFINITY;
            const capaciteMin = router.query.capaciteMin ? parseInt(router.query.capaciteMin) : Number.NEGATIVE_INFINITY;
            const capaciteMax = router.query.capaciteMax ? parseInt(router.query.capaciteMax) : Number.POSITIVE_INFINITY;
            const typePlace = router.query.typePlace ? router.query.typePlace : "";
            return place.pricing.perDay >= prixMin && place.pricing.perDay <= prixMax && 
                   place.capacity >= capaciteMin && place.capacity <= capaciteMax &&
                   (!typePlace || place.types === typePlace);
          })} />
        )}
      </>
    )
  }
</MainLayout>

  );

}