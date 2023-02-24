import TitlePage from "../../components/TitlePage";
import styles from "./index.module.scss";
const Index = () => {
  return (
    <div>
      <TitlePage title="Besoin d'aide ???"/>
      <p className={styles.aide__image}>
        <img alt="" src="https://tse3.mm.bing.net/th?id=OIP.G3a_wkvHJYNDjKWeN-4w4QHaE7&pid=Api&P=0"/>
      </p>
    </div>
  );
}

export default Index;
