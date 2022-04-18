import CelebZoneBanner from "../../../images/landing page/celebzone.PNG";
import styles from "./celebzone.module.css";

export default function CelebZone() {
  return (
    <div className={styles.celebzonebanner}>
      <a href="/celebzone">
        <img src={CelebZoneBanner} className={styles.celeb} alt="celebzone" />
      </a>
    </div>
  );
}
