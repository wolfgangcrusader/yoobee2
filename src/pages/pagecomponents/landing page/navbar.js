import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import {
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaDiscord,
  FaYoutube,
  FaRegHeart,
  FaUserCircle,
} from "react-icons/fa";
import { BsBag, BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import NewNewImg from "../../../images/landing page/newnew.png";
import ClothingImg from "../../../images/landing page/clothing.png";
import CelebImg from "../../../images/landing page/celeb.png";
import MoodImg from "../../../images/landing page/mood.png";
import Sale1Img from "../../../images/landing page/sale1.png";
import Sale2Img from "../../../images/landing page/sale2.png";
import ShoppingCart from "../cart.js";

export default function NavBar() {
  const [NewNew, setNewNew] = useState({ display: "none" });
  const [Clothing, setClothing] = useState({ display: "none" });
  const [PickAMood, setPickAMood] = useState({ display: "none" });
  const [CelebZone, setCelebZone] = useState({ display: "none" });
  const [Sale, setSale] = useState({ display: "none" });
  const [showcart, setShowCart] = useState(false);

//SHOWS THE MOBILE MENU ONCLICK OF THE BAR ICON//
  function ShowMobileMenu() {
    let mobilemenu = document.getElementById("mobilenavbar");
    if (mobilemenu.style.display === "block") {
      mobilemenu.style.display = "none";
      mobilemenu.style.height = "12vh";
    } else {
      mobilemenu.style.display = "block";
      mobilemenu.style.height = "55vh";
    }
  }

  //LOGIN TAKES YOU TO LOGIN SCREEN//
  const LoginFunction = (e) => {
      window.location.href = "/login";  
  };

  return (
    <>
    <div className={styles.navbarwrapper}>
      <div className={styles.navbar}>
        <div className={styles.topbar}>
          <div className={styles.navicon} onClick={ShowMobileMenu}>
            <AiOutlineMenu />
          </div>
          <a href="/"><h1 >CIDER</h1></a>
          <input
            type="text"
            className={styles.searchbox}
            placeholder="Search 🔍"
          />
          <div className={styles.mobilerighticons}>
            <ul>
              <li onClick={LoginFunction}>              
                  <FaUserCircle />               
              </li>
              <li>
                <FaRegHeart />
              </li>
              <li onClick={() => setShowCart(!showcart)}>
                <BsBag />
              </li>
              <li>
                <BsGlobe />
              </li>
            </ul>
          </div>
        </div>
        <div id="mobilenavbar" className={styles.bottombar}>
          <div className={styles.lefticons}>
            <ul>
              <li>
                <a href="https://www.tiktok.com/@shopcider">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/shopcider">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/shopcider">
                  <FaPinterest />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/wmac5edp3d">
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCFwVmI07Cl_z_OiPyiOCc4A">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.navitems}>
            <ul>
              <li
                onMouseEnter={(e) => {
                  setNewNew({ display: "flex" });
                  setCelebZone({ display: "none" });
                  setClothing({ display: "none" });
                  setPickAMood({ display: "none" });
                  setSale({ display: "none" });
                }}
              >
                New New
              </li>

              <li
                onMouseEnter={(e) => {
                  setClothing({ display: "flex" });
                  setCelebZone({ display: "none" });
                  setNewNew({ display: "none" });
                  setPickAMood({ display: "none" });
                  setSale({ display: "none" });
                }}
              >
                Clothing
              </li>

              <li
                onMouseEnter={(e) => {
                  setPickAMood({ display: "flex" });
                  setCelebZone({ display: "none" });
                  setNewNew({ display: "none" });
                  setClothing({ display: "none" });
                  setSale({ display: "none" });
                }}
              >
                Pick a Mood
              </li>

              <li
                onMouseEnter={(e) => {
                  setCelebZone({ display: "flex" });
                  setNewNew({ display: "none" });
                  setPickAMood({ display: "none" });
                  setClothing({ display: "none" });
                  setSale({ display: "none" });
                }}
              >
                Celeb Zone
              </li>

              <li
                onMouseEnter={(e) => {
                  setSale({ display: "flex" });
                  setCelebZone({ display: "none" });
                  setNewNew({ display: "none" });
                  setPickAMood({ display: "none" });
                  setClothing({ display: "none" });
                }}
              >
                Sale
              </li>
            </ul>
          </div>

          <div className={styles.righticons}>
            <ul>
              <li onClick={LoginFunction}>              
                  <FaUserCircle />               
                <span className={styles.mobitems}> LOGIN/REGISTER</span>
              </li>
              <li>
                <FaRegHeart />
                <span className={styles.mobitems}> WISHLIST</span>
              </li>
              <li onClick={() => setShowCart(!showcart)}>
                <BsBag />
                <span className={styles.mobitems}> SHOPPING CART</span>
              </li>
              <li>
                <BsGlobe />
                <span className={styles.mobitems}> SETTINGS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mobilemenuwrapper}>
        <div
          className={styles.menuwrapper}
          style={NewNew}
          onMouseLeave={(e) => {
            setSale({ display: "none" });
            setCelebZone({ display: "none" });
            setNewNew({ display: "none" });
            setPickAMood({ display: "none" });
            setClothing({ display: "none" });
          }}
        >
          <div className={styles.menucolumn1}>
            <ul>
              <li>
                <a href="/listings">All New New</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/listings">New New Clothing</a>
              </li>
              <li>
                <a href="/listings">New New Tops</a>
              </li>
              <li>
                <a href="/listings">New New Bottoms</a>
              </li>
              <li>
                <a href="/listings">New New Dresses</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn2}>
            <ul>
              <li>
                <a href="/listings">New New Swimwear</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/listings">New New Accessories</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Back in Stock</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn3}>
            <ul>
              <li>
                <img src={NewNewImg} className={styles.menuimg} alt="newnew" />
              </li>
              <li>
                <a href="/listings">New New Best-Selling</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mobilemenuwrapper}>
        <div
          className={styles.menuwrapper}
          style={Clothing}
          onMouseLeave={(e) => {
            setSale({ display: "none" });
            setCelebZone({ display: "none" });
            setNewNew({ display: "none" });
            setPickAMood({ display: "none" });
            setClothing({ display: "none" });
          }}
        >
          <div className={styles.menucolumn1}>
            <ul>
              <li>
                <a href="/listings">All Clothing</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Dresses</a>
              </li>
              <li>
                <a href="/listings">Short Dresses</a>
              </li>
              <li>
                <a href="/listings">Long Dresses</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Matching Sets</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Jumpsuits</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Rompers</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Curve</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn2}>
            <ul>
              <li>
                <a href="/listings">Tops</a>
              </li>
              <li>
                <a href="/listings">Crop Tops</a>
              </li>
              <li>
                <a href="/listings">Tees</a>
              </li>
              <li>
                <a href="/listings">Blouses</a>
              </li>
              <li>
                <a href="/listings">Sweatshirt</a>
              </li>
              <li>
                <a href="/listings">Hoodies</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/listings">Bottoms</a>
              </li>
              <li>
                <a href="/listings">Skirts</a>
              </li>
              <li>
                <a href="/listings">Jeans</a>
              </li>
              <li>
                <a href="/listings">Shorts</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn3}>
            <ul>
              <li>
                <img
                  src={ClothingImg}
                  className={styles.menuimg}
                  alt="newnew"
                />
              </li>
              <li>
                <a href="/listings">Shop for a Night-Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mobilemenuwrapper}>
        <div
          className={styles.menuwrapper}
          style={CelebZone}
          onMouseLeave={(e) => {
            setSale({ display: "none" });
            setCelebZone({ display: "none" });
            setNewNew({ display: "none" });
            setPickAMood({ display: "none" });
            setClothing({ display: "none" });
          }}
        >
          <div className={styles.menucolumn1}>
            <ul>
              <li>
                <a href="/listings">All CelebZone</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn2}>
            <ul>
              <li>
                <img src={CelebImg} className={styles.menuimg} alt="newnew" />
              </li>
              <li>
                <a href="/listings">Celeb Best-Selling</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mobilemenuwrapper}>
        <div
          className={styles.menuwrapper}
          style={PickAMood}
          onMouseLeave={(e) => {
            setSale({ display: "none" });
            setCelebZone({ display: "none" });
            setNewNew({ display: "none" });
            setPickAMood({ display: "none" });
            setClothing({ display: "none" });
          }}
        >
          <div className={styles.menucolumn1}>
            <ul>
              <li>
                <a href="/listings">All Moods</a>
              </li>
              <li>
                <a href="/listings">FEELING CUTE</a>
              </li>
              <li>
                <a href="/listings">FEELING RETRO</a>
              </li>
              <li>
                <a href="/listings">FEELING HOT</a>
              </li>
              <li>
                <a href="/listings">FEELING DREAMY</a>
              </li>
              <li>
                <a href="/listings">FEELING ELEGANT</a>
              </li>
              <li>
                <a href="/listings">FEELING FREE</a>
              </li>
              <li>
                <a href="/listings">FEELING K-POP</a>
              </li>
              <li>
                <a href="/listings">FEELING GRUNGE</a>
              </li>
              <li>
                <a href="/listings">FEELING HIGH-STREET</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn2}>
            <ul>
              <li>
                <a href="/listings">All Drops</a>
              </li>
              <li>
                <a href="/listings">Pick a Mood, Pick a Song</a>
              </li>
              <li>
                <a href="/listings">Bloom Bloom Pow: The Spring Edit</a>
              </li>
              <li>
                <a href="/listings">Show Me Your Love Language</a>
              </li>
              <li>
                <a href="/listings">5 Minute Outfit: The Everyday Edit</a>
              </li>
              <li>
                <a href="/listings">Swim Away: The Tanline Edit</a>
              </li>
              <li>
                <a href="/listings">Winter Vacation: The Ski-Trip Edit</a>
              </li>
              <li>
                <a href="/listings">Cyber Princess: The Y2K Edit</a>
              </li>
              <li>
                <a href="/listings">Party Collection: The Hottest Edit</a>
              </li>
              <li>
                <a href="/listings">Rock & Rebel: The Punk Edit</a>
              </li>
              <li>
                <a href="/listings">Family Weekend: The Holiday Edit</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn3}>
            <ul>
              <li>
                <img src={MoodImg} className={styles.menuimg} alt="newnew" />
              </li>
              <li>
                <a href="/listings">Shop Love Wonderland</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mobilemenuwrapper}>
        <div
          className={styles.menuwrapper}
          style={Sale}
          onMouseLeave={(e) => {
            setSale({ display: "none" });
            setCelebZone({ display: "none" });
            setNewNew({ display: "none" });
            setPickAMood({ display: "none" });
            setClothing({ display: "none" });
          }}
        >
          <div className={styles.menucolumn1}>
            <ul>
              <li>
                <a href="/listings">All Sales</a>
              </li>
              <li>
                <a href="/listings">Daily Flash Sale</a>
              </li>
              <li>
                <a href="/listings">Sweater Sale</a>
              </li>
              <li>
                <a href="/listings">Outerwear Sale</a>
              </li>
              <li>
                <a href="/listings">Hoodies Sale</a>
              </li>
              <li>
                <a href="/listings">Matching Sets Sale</a>
              </li>
              <li>
                <a href="/listings">Dresses Sale</a>
              </li>
              <li>
                <a href="/listings">Jeans Sale</a>
              </li>
              <li>
                <a href="/listings">Curve & Plus Sale</a>
              </li>
              <li>
                <a href="/listings">Accessories Sale</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn2}>
            <ul>
              <li>
                <img src={Sale1Img} className={styles.menuimg} alt="newnew" />
              </li>
              <li>
                <a href="/listings">Shop FlashSale</a>
              </li>
            </ul>
          </div>
          <div className={styles.menucolumn3}>
            <ul>
              <li>
                <img src={Sale2Img} className={styles.menuimg} alt="newnew" />
              </li>
              <li>
                <a href="/listings">Shop Sweater Sale</a>
              </li>
            </ul>
          </div>
        </div>
      </div>     
    </div>
    
    {showcart ? <ShoppingCart /> : " "}
    </>
  );
}
