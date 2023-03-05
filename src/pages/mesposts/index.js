import {useEffect, useState} from 'react';
import TitlePage from "../../components/TitlePage";
import userService from '../../services/user.service';
import styles from "./index.module.scss";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import WithAuth from '../../HOC/WithAuth';
import PlaceGrid from "../../components/PlaceGrid/";

const Index = () => {

  const [user, setUser] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [userForm, setUserForm] = useState();
  const [data, setData] = useState([]);
  const [place, setPlace ]= useState()

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    userService.getMe(token)
      .then((user) => {
        setUserForm(user);
        setUser(user);
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  const handleInput = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  const submitUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    userService.UpdateUser(token, userForm)
      .then((user) => {
        setOpenModal(false);
        setUser(user);
      })
      .catch(err => console.log(err));
  }

  const userPlaces = data.filter(place => place.owner === user._id);
  //  console.log("Test Owner", place.owner);
  // console.log("Test User_id", user._id);

  return (
    <>
      {
        openModal && (
          <Modal title="Modifier ce post" closeModal={() => setOpenModal(false)}>
            <form onSubmit={(e) => submitUpdate(e)}>
              testform
            </form>
          </Modal>
        )
      }
      <TitlePage title="Mes Posts" />
      <div className={styles.page__mesPosts}>
        {
          user ? (
            <>
              <p>Bonjour {user.lastName}</p>
              {
                userPlaces.length > 0 ?
                  <PlaceGrid places={userPlaces} />
                  :
                  <div>
                  <p>Aucun post à afficher pour cet utilisateur</p>
                    {/* <PlaceGrid places={data} /> */}
                  </div>
              }
            </>
          ) : <p>...loading</p>
        }
        {/* <Button
          title="Modifier"
          handleClick={() => {
            setOpenModal(true);
          }}
          type="button"
          btnClass="btn__primary"
        /> */}
      </div>
    </>
  );
}

export default WithAuth(Index);
