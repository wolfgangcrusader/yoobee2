import styles from "./flashsale.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function FlashSale() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className={styles.saleitems}>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/1">
          <img
            src="https://img1.shopcider.com/product/1649326659000-3MRrz4.jpeg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/2">
          <img
            src="https://img1.shopcider.com/product/1649324534000-S4KHdz.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/3">
          <img
            src="https://img1.shopcider.com/product/1649326632000-inMD4J.jpeg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/4">
          <img
            src="https://img1.shopcider.com/product/1648898211000-jf4EhZ.jpeg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
    </div>,

    <div className={styles.saleitems}>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/5">
          <img
            src="https://img1.shopcider.com/product/1649324933000-aEta5r.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/6">
          <img
            src="https://img1.shopcider.com/product/1649175579000-4aQF8A.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/7">
          <img
            src="https://img1.shopcider.com/product/1649225395000-EH2FEn.jpeg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        {" "}
        <a href="/listings/8">
          <img
            src="https://img1.shopcider.com/product/1649175350000-fdWNzm.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
    </div>,

    <div className={styles.saleitems}>
      <div className={styles.saleitemscarousel}>
        <a href="/listings/9">
          <img
            src="https://img1.shopcider.com/product/1649324969000-K4A2GH.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        <a href="/listings/10">
          <img
            src="https://img1.shopcider.com/product/1649493062000-NbbcrW.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        <a href="/listings/11">
          <img
            src="https://img1.shopcider.com/product/1649323984000-BZrTcs.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
      <div className={styles.saleitemscarousel}>
        <a href="/listings/12">
          <img
            src="https://img1.shopcider.com/product/1648118206000-aNfxCK.jpg?x-oss-process=image/resize,w_350,m_lfit/quality,Q_60"
            onDragStart={handleDragStart}
            role="presentation"
            alt="productimg"
          />
        </a>
      </div>
    </div>,
  ];

  return (
    <div className={styles.flashsale}>
      <h1>CIDER DAILY FLASH SALE</h1>
      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        disableDotsControls={true}
        disableButtonsControls={false}
        autoPlay={true}
        autoPlayInterval={2200}
        autoPlayStrategy="default"
      />
    </div>
  );
}
