import React from 'react';
import WithAuth from '../../HOC/WithAuth';
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div>
      Mes posts
    </div>
  )
}

export default WithAuth(Index)
