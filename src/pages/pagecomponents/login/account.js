import NavBar from "../landing page/navbar.js";
import styles from "./account.module.css";
import {FcHome} from 'react-icons/fc';
import {GrCaretNext} from 'react-icons/gr';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Account() {

    const [LoginDetails, SetLoginDetails] = useState([]);

    useEffect(() => {
        axios.get("/loggedin").then((res) => {
          SetLoginDetails(res.data);
        });
      });
    

    return(
        <>
        <NavBar/>
        <div className={styles.homelinks}>
        <a href="/"><FcHome/>Home</a>
        <p> <GrCaretNext/> </p> 
        <p>My Account </p>
        </div>
        <div className={styles.accountdetails}>
        <h1>MY ACCOUNT</h1>
        <p>Username: {LoginDetails.username}</p>
        <p>Email: {LoginDetails.username}</p>
        </div>

        </>
    )
}