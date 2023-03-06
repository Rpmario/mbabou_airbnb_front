import PlaceGrid from "../../components/PlaceGrid/";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import TitlePage from "../../components/TitlePage";
import userService from '../../services/user.service';
import Link from "next/link";
import styles from "./index.module.scss";

export default function Home() {

  const [user, setUser] = useState();

  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    userService.getMe(token)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch(err => console.log(err))
  }, []);

  const getData = () => {
    if (user) {
      console.log(user._id);
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place/userplaces/${user._id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => res.json().then((r) => setData(r)))
    } else {
      console.log("L'utilisateur n'est pas connecté.");
    }
  };
  

  useEffect(() => {
    getData();

    return () => {};
  }, [user]);

  return (
    <MainLayout>
      {
          user ? (
            <>
              <TitlePage title="Mes Posts" className={styles.mesPost__title} />
              <p className={styles.mesPost__bonjour}>Bonjour {user.firstName}</p>
              {
                data.length <= 0 ?
                  <div className={styles.mesPost__messageNegatif}>
                    <p >Vous n'avez aucune annonce en ligne !</p>
                    <Link href="/newpost" >Mettre mon logement sur Airbnb</Link>
                  </div>
                  :
                  <div>
                    <p className={styles.mesPost__messagePositif}>Voici vos annonces en ligne !</p>
                    <PlaceGrid places={data} />
                  </div>
              }
            </>
          ) : <p>...loading</p>
        }
    </MainLayout>
  );
}
