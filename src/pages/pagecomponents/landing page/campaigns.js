import styles from "./campaigns.module.css";
import CampaignImages from "../../../images/landing page/CAMP.png";

export default function Campaigns() {
  return (
    <div className={styles.campaigns}>
      <h1>CIDER CAMPAIGNS</h1>
      <img src={CampaignImages} className={styles.campaignsimage} alt="camp" />
    </div>
  );
}
