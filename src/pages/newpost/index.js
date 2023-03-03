import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthService from '../../services/auth.service';
import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import WithAuth from '../../HOC/WithAuth';
import userService from '../../services/user.service';
import styles from "./index.module.scss";
import Link from "next/link";

const Index = () => {

  const [postForm, setPostForm] = useState({
    title: "",
    periode: "",
    types: "",
    owner: "",
    proprio: "",
    perDay: "",
    rate: "",
    capacity: "",
    description: "",
    city: "",
    street: "",
    zipCode: "",
    lat: "",
    long: "",
    images: ""
  });

  const [userForm, setUserForm] = useState({
    _id: "",
  });

  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    userService.getMe(token)
      .then((user) => {
        console.log(user);
        setUserForm(user);
        setUser(user);
      })
      .catch(err => console.log(err))
  }, []);

  const handleInput = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    AuthService.newpost(postForm) //!!!!!!!Warning!!!!!!!!!!!!!
      .then(post => console.log(post))
      .catch(err=>console.log(err))
      console.log(postForm)
      router.push("/mesposts");
  }

  return (
    <div className={styles.new__postPage}>
      <TitlePage title="Poster un logement"/>
      <div className={styles.new__post}>
        <form className={styles.form__register}>
           <div className={styles.form__box}>
            <div className={styles.form__boxLeft}>
              <Input
                titleLabel="Titre"
                inputType="text"
                inputPlaceholder="Titre du post"
                inputName="title"
                inputValue={postForm.title || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
              <Input
                titleLabel="Disponibilité"
                inputType="text"
                inputPlaceholder="22 mars - 10 avril"
                inputName="periode"
                inputValue={postForm.periode || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
              <p className={styles.post__radio}>
                Type de logement : 
              </p>
              <div className={styles.post__flex}>
                <Input
                  titleLabel="Villa"
                  inputType="radio"
                  inputName="types"
                  inputValue="63d2857130547279210f97af"
                  inputOnChange={(e) => {
                    handleInput(e);
                  }}
                />
                <Input
                  titleLabel="Maison"
                  inputType="radio"
                  inputName="types"
                  inputValue="63d286c430547279210f97b1"
                  inputOnChange={(e) => {
                    handleInput(e);
                  }}
                />
                <Input
                  titleLabel="Appartement"
                  inputType="radio"
                  inputName="types"
                  inputValue="63d286d330547279210f97b3"
                  inputOnChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <Input
                titleLabel="Ville"
                inputType="text"
                inputPlaceholder="Ville du logement.."
                inputName="city"
                inputValue={postForm.city || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
              <Input
                titleLabel="Code postal"
                inputType="number"
                inputPlaceholder="Code postal.."
                inputName="zipCode"
                inputValue={postForm.zipCode || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
            <div className={styles.form__boxRight}>
              <Input
                titleLabel="Prix/nuit"
                inputType="number"
                inputPlaceholder="€"
                inputName="perDay"
                inputValue={postForm.perDay || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
              <Input
                titleLabel="Capacité"
                inputType="number"
                inputPlaceholder="Nombre de voyageurs"
                inputName="capacity"
                inputValue={postForm.capacity || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
              <p className={styles.post__radio}>
                Vous êtes un : 
              </p>
              <div className={styles.post__flex}>
                <Input
                  titleLabel="Particulier"
                  inputType="radio"
                  inputName="proprio"
                  inputValue="Particulier"
                  inputOnChange={(e) => {
                    handleInput(e);
                  }}
                />
                <Input
                  titleLabel="Professionnel"
                  inputType="radio"
                  inputName="proprio"
                  inputValue="Professionnel"
                  inputOnChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <Input
                titleLabel="Latitude"
                inputType="number"
                inputPlaceholder="Exple: 3.8940184"
                inputName="lat"
                inputValue={postForm.lat || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
              <Input
                titleLabel="Longitude"
                inputType="number"
                inputPlaceholder="Exple: 11.5108801"
                inputName="long"
                inputValue={postForm.long || ""}
                inputOnChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
           </div>
           <Input
              titleLabel="Voie"
              inputType="text"
              inputPlaceholder="Nom de la voie.."
              inputName="street"
              inputValue={postForm.street || ""}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
           <Input
              titleLabel="Image(s)"
              inputType="url"
              inputPlaceholder="https://image-url.com"
              inputName="images"
              inputValue={postForm.images || ""}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
          <span className={styles.post__description}>
            <Input
              titleLabel="Description"
              inputType="text"
              inputPlaceholder="Décrivez votre logement..."
              inputName="description"
              inputValue={postForm.description || ""}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
          </span>
          <div className={styles.post__hidden}>
            <Input
              titleLabel="Owner"
              inputType="text" //readOnly
              inputName="owner"
              inputValue={userForm._id}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
            <Input
              titleLabel="Rate"
              inputType="text" //readOnly
              // inputPlaceholder="4.5"
              inputName="rate"
              inputValue="4.5"
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.post__flexBoutton}>
            <button>
              <Link href="/mesposts">
                Annuler
              </Link>
            </button>
            <Button
              title="Valider"
              handleClick={(e) => {
                submitForm(e);
                console.log("test submit")
              }}
              type="submit"
              btnClass="btn__primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default WithAuth(Index);