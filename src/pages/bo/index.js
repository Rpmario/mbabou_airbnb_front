import React, { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage";

const Index = () => {

  const [user, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("http://localhost:4000/api/v1/user");
      const data = await response.json();
      setUsers(Array.from(data));
    }

    fetchUser();
  }, []);


  const handleDeleteUser = async (userId) => {
    await fetch(`http://localhost:4000/api/v1/user/${userId}`, {
      method: "DELETE",
    });
    // Mettre à jour la liste des utilisateurs après la suppression d'un utilisateur
    setUser(user.filter((user) => user._id !== userId));
  };

  return (
    <div>
      <TitlePage title="Bonjour Super Admin !!!" />
      <h1>Liste des utilisateurs</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user._id}>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
