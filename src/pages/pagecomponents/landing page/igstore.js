import styles from "./igstore.module.css";
import IGPic1 from "../../../images/landing page/Capture.PNG";
import IGPic2 from "../../../images/landing page/Capture1.PNG";
import IGPic3 from "../../../images/landing page/Capture2.PNG";
import IGPic4 from "../../../images/landing page/Capture3.PNG";
import IGPic5 from "../../../images/landing page/Capture4.PNG";
import IGPic6 from "../../../images/landing page/Capture5.PNG";
import IGPic7 from "../../../images/landing page/Capture6.PNG";
import IGPic8 from "../../../images/landing page/Capture7.PNG";
import { FaInstagram } from "react-icons/fa";

export default function IGStore() {
  return (
    <div className={styles.IGStore}>
      <h1>IG STORE</h1>
      <div className={styles.column1}>
        <div className={styles.imgcontainer}>
          <img src={IGPic1} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
        <div className={styles.imgcontainer}>
          <img src={IGPic2} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
        <div className={styles.imgcontainer}>
          <img src={IGPic3} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
        <div className={styles.imgcontainer}>
          <img src={IGPic4} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.imgcontainer}>
          <img src={IGPic5} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
        <div className={styles.imgcontainer}>
          <img src={IGPic6} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
        <div className={styles.imgcontainer}>
          <img src={IGPic7} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
        <div className={styles.imgcontainer}>
          <img src={IGPic8} alt="IGPic" className={styles.IGPic} />
          <a
            href="https://www.instagram.com/p/CblNPO5uveX/"
            className={styles.overlay}
          >
            <h1>
              <FaInstagram /> <br />
              GO TO INSTAGRAM
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
