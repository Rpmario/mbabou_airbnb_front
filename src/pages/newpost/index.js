import TitlePage from "../../components/TitlePage";
import WithAuth from '../../HOC/WithAuth';
import styles from "./index.module.scss";
const Index = () => {
  return (
    <div>
      <TitlePage title="Poster un logement"/>
      <p className={styles.aide__image}>
        Formulaire
      </p>
    </div>
  );
}

export default WithAuth(Index);