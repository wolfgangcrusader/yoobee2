import styles from './about.module.css';
import NavBar from './landing page/navbar';

export default function AboutPage() {

    return(
        <div className={styles.aboutpage}>
        <NavBar/>
        <div className={styles.aboutwrapper}>
            <h1>Who are we?</h1>
            <p>Cider is an aesthetic.
At Cider, nothing makes us happier than
bringing you everyday statement pieces that
make YOU feel like the main character.
Inspired by real people, real moments, and
real moods. Each Cider piece is intentionally
curated with specific reterences, occasions
and aesthetics in mind, ensuring that every
colortul sweater to retro mini dress inspires
you as much as you inspire us. We are an
open book of a million different stories, here
to help you celebrate yourself and tell yours.</p>
        </div>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactform}>       
        <form>
                            <input
                                placeholder="Full Name"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <input
                                placeholder="Email"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <input
                                placeholder="Mobile"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <textarea
                                placeholder="Notes"
                                className="footer-container-right-content-form-text-area"
                                rows="10"
                            ></textarea>
                            <button className="footer-container-right-content-form-submit-btn">Submit</button>
                        </form>
        </div>       
        </div>
    )
}