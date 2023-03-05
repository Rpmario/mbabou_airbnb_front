import React, { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage";

const Index = () => {

    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch("http://localhost:4000/api/v1/user");
        const data = await response.json();
        setUsers(data);
      }
  
      fetchUsers();
    }, []);
  
    const handleDeleteUser = async (userId) => {
      await fetch(`http://localhost:4000/api/v1/user/${userId}`, {
        method: "DELETE",
      });
  
      setUsers(users.filter((user) => user._id !== userId));
    };

  return (
    <div>
      <TitlePage title="Bonjour Super Admin !!!"/>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.email}
            <button onClick={() => handleDeleteUser(user._id)}>Supprimer</button>
          </li>
        ))}
      </ul>      
    </div>
  )
}


export default Index



// import { useRouter } from 'next/router';
// import AuthService from "../../services/auth.service";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// import Notification from "../../components/Notification";
//import styles from "./index.module.scss";

