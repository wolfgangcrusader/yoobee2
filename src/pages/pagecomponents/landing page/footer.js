import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.column1}>
        <li>
          <a href="/">Shipping & Delivery</a>
        </li>
        <li>
          <a href="/">Returns & Refunds</a>
        </li>
        <li>
          <a href="/">Sizing Guide</a>
        </li>
        <li>
          <a href="/">Careers at Cider</a>
        </li>
        <li>
          <a href="/">Track My Order</a>
        </li>
      </div>
      <div className={styles.column2}>
        <li>
          <a href="/">FAQ & Contact Us</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms of Service</a>
        </li>
        <li>
          <a href="/">hi@shopcider.com</a>
        </li>
      </div>
      <div className={styles.column3}>
        <li>About Cider</li>
        <li>
          Cider is a globally-minded, social-first fashion brand. We ship
          anywhere and everywhere, and make clothes for a new generation
        </li>
        <li><a href="/about">Find Out More About Us</a></li>
      </div>
    </div>
  );
}
