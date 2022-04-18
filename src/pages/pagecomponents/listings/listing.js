import { useParams } from "react-router";
import {useState} from 'react';
import PRODUCTS from '../../../data/run_results.json';
import NavBar from '../../pagecomponents/landing page/navbar.js';
import styles from './listing.module.css';
import {FcHome} from 'react-icons/fc';
import {GrCaretNext} from 'react-icons/gr';
import {FaCheck} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import Footer from '../landing page/footer.js';
import { useCart } from "react-use-cart";

export default function Listing(){
    const { id } = useParams();
    let attribute = PRODUCTS[id];
    let suggestion1 = PRODUCTS[23];
    let suggestion2 = PRODUCTS[24];
    let suggestion3 = PRODUCTS[25];

    let SetSize = {
     0: <p><ImCross/></p>,
     1: <p><FaCheck/></p>
    }

const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
    return(
        <>
        <NavBar/>
        <div className={styles.homelinks}>
        <a href="/"><FcHome/>Home</a>
        <p> <GrCaretNext/> </p> 
        <a href="/listings">All Listings</a>
        <p> <GrCaretNext/> </p>
        <p>{attribute.product}</p>
        </div>
        <div className={styles.productwrapper}>
        <div className={styles.productimg}>
        <img src={attribute.image} alt="prdct"/>
        </div>
        <div className={styles.productdetails}>
        <h1>{attribute.product}</h1>
        <h3>NZD$ {attribute.price}.00</h3>
        <h3>Sizes Available:</h3>
        <div className={styles.productsize}>
        S{SetSize[attribute.S]}
        M{SetSize[attribute.M]}
        L{SetSize[attribute.L]}
        XL{SetSize[attribute.XL]}
        </div>  
        <p>Sizing Help?</p>      
        <div className={styles.btncontainer}>
      <button className={styles.controlbtn} onClick={decrease}>-</button>
      <span className={styles.counteroutput}>{counter}</span>
      <button className={styles.controlbtn} onClick={increase}>+</button>
        </div>            
        </div>
        </div>
        <h2>MORE LIKE THIS</h2>
        <div className={styles.morecontainer}>          
            <a href="/listings/23"><img src={suggestion1.image} alt="s1"/></a>
            <a href="/listings/24"><img src={suggestion2.image} alt="s1"/></a>
            <a href="/listings/25"><img src={suggestion3.image} alt="s1"/></a>
        </div>
        <Footer/>
        </>
    )
}