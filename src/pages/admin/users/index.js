import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://example.com/api/users");
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
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

// import React from 'react';

// const Index = () => {
//   return (
//     <div>
//       <TitlePage title="Bonjour Super Admin !!!"/>
//       <p className={styles.aide__image}>
//         Ici c'est le Back-Office
//       </p>
//     </div>
//   );
// }

// export default Index;
