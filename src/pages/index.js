import TitlePage from "../components/TitlePage";
import PlaceGrid from "../components/PlaceGrid/";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Submain from "../components/Header/submain";
import { useRouter } from "next/router";

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
      {data.filter((place) => place.pricing.perDay >= parseInt(router.query.prixMin)).length === 0 ?
      <PlaceGrid places={data} />
       :
      <PlaceGrid places={data.filter((place) => place.pricing.perDay >= parseInt(router.query.prixMin) )} />
      }
    </MainLayout>
  );

}

      // <h1>Aucun résultat ne correspond à votre recherche !</h1>