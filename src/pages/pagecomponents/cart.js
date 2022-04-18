import styles from './cart.module.css';
import { useCart } from "react-use-cart";

export default function ShoppingCart() {
    const {
        isEmpty,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal, 
        emptyCart
      } = useCart();

      if (isEmpty) return (<div className={styles.cartwrapper}>
      <h1>Shopping Bag ({totalItems})</h1>
      <p> Total: $ {cartTotal}.00</p> 
      <button onClick={emptyCart}>CLEAR CART</button> 
      <p>YOUR BAG IS EMPTY</p>
      </div>)

      return (
        <>
        <div className={styles.cartwrapper}>
          <h1>Shopping Bag ({totalItems})</h1>
          <p> Total: $ {cartTotal}.00</p> 
          <button onClick={emptyCart}>CLEAR CART</button> 
          <ul>
            <div className={styles.itemwrapper}>
            {items.map((item) => (
              <div className={styles.itemcard}>                 
              <li key={item.id}>
              <div className={styles.itemleft}>
                <img src={item.image} alt="item"/>
                </div>
                <div className={styles.itemright}>
                <div className={styles.topcart}>
                <p>{item.product}</p>
                <p>NZD$ {item.price}.00</p>
                <p>QUANTITY: </p>
                </div>
                <div className={styles.botcart}>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>
                &times;
                </button>
                </div>
                </div>
              </li>
              </div>
            ))}
            </div>
          </ul>
          </div>
        </>
      );
    }