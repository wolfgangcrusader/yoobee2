import styles from "./alllistings.module.css";
import PRODUCTS from '../../../data/run_results.json';
import { useState } from "react";
import NavBar from '../landing page/navbar.js';
import { useCart } from "react-use-cart";
import {FcHome} from 'react-icons/fc';
import {GrCaretNext} from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';

export default function ProductListings(){
    const { addItem } = useCart();
    const products = PRODUCTS;
    const [price, setPrice] = useState("50");
    return(
        <>
        <NavBar/>
        <div className={styles.homelinks}>
        <a href="/"><FcHome/>Home</a>
        <p> <GrCaretNext/> </p> 
        <a href="/listings">All Listings</a>
        </div>
        <div className={styles.resultspage}>       
        <div className={styles.searchcolumn}>
        <h1>FILTER BY:</h1>
        <div className={styles.setrow1}>
        <div className={styles.categories}>
        <h3>Categories:</h3>
        <label><input type="checkbox" />Tops</label>
        <label><input type="checkbox" />Dresses</label>
        <label><input type="checkbox" />Bottoms</label>
        <label><input type="checkbox" />Matching Sets</label>
        <label><input type="checkbox" />Jumpsuits & Rompers</label>
        <label><input type="checkbox" />Knitwear</label>
        <label><input type="checkbox" />Swimwear</label>
        <label><input type="checkbox" />Accesories</label>
        <label><input type="checkbox" />Curve & Plus</label>
        <label><input type="checkbox" />Denim</label>
        </div>
        <div className={styles.size}>
        <h3>Sizes:</h3>
        <label><input type="checkbox" />XS</label>
        <label><input type="checkbox" />S</label>
        <label><input type="checkbox" />M</label>
        <label><input type="checkbox" />L</label>
        <label><input type="checkbox" />XL</label>
        <label><input type="checkbox" />XXL</label>
        </div>
        </div>
        <div className={styles.setrow1}>
        <div className={styles.prices}>
        <h3>Price:</h3>
        <p>$ {price}</p>
        <input type="range" min="0" max="100" step="1" onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className={styles.colours}>
        <h3>Colours:</h3>
        <label><input type="checkbox" />White</label>
        <label><input type="checkbox" />Black</label>
        <label><input type="checkbox" />Red</label>
        <label><input type="checkbox" />Blue</label>
        <label><input type="checkbox" />Green</label>
        <label><input type="checkbox" />Yellow</label>
        <label><input type="checkbox" />Brown</label>
        <label><input type="checkbox" />Purple</label>
        </div>
        </div>
        </div>
        <div className={styles.resultscolumn}>
        <div className={styles.resultscontainer}>
        {products.map((product) => (          
            <div className={styles.productcard}>
            <a className={styles.productlink} href={`/listings/${product.id}`}>
            <img src={product.image} alt="prdctimg"/>
            <h3>{product.product}</h3>
            <h3>$ {product.price}.00</h3>    
            </a>   
            <button onClick={() => addItem(product)}>
            Add to cart
            </button>
            </div>                  
        ))}
        </div>
        </div>
        </div>
        </>
    )
}