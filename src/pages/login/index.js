import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AuthService from "../../services/auth.service";
import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Notification from "../../components/Notification";
import styles from "./index.module.scss";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);
  console.log(router);
  const [userForm, setUserForm] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    AuthService.login(userForm)
      .then((data) => {
        if (!data.token) {
          setMessage(data.message);
          setType("error")
          return false;
        } 
        localStorage.setItem('token', data.token);
        router.push("/mesposts");
        //window.location.href = window.location.href;
      })
      .catch(
        (err) => {
          console.log(err);
          setMessage(err);
        }
      )
  }

  return (
    <div className={styles.page__login}>
      <TitlePage title="Login your account"/>
      <form className={styles.form__login}>
        <Input
          titleLabel="email"
          inputType="email"
          inputPlaceholder="email"
          inputName="email"
          inputValue={userForm.email || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Input
          titleLabel="password"
          inputType="password"
          inputPlaceholder="password"
          inputName="password"
          inputValue={userForm.password || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Button
          title="Connexion"
          handleClick={(e) => {
            submitForm(e);
          }}
          type="submit"
          btnClass="btn__primary"
        />
        {/* {
          message ? (
            <Notification message={message}/>
          ) : ""
        } */}
        {
          message && <Notification type={type} message={message}/>
        }
        <p>Pas encore inscrit ? <Link href="/register"> Inscription </Link></p>
      </form>
    </div>
  );
}

export default Index;

