import HeroImage from "../../../images/landing page/heroimage.PNG";
import styles from "./herobanner.module.css";

export default function HeroBanner() {
  return (
    <>
      <div className={styles.bannercontainer}>
        <img src={HeroImage} alt="heroimage" className={styles.heroImage} />
      </div>
    </>
  );
}
