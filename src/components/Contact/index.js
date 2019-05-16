import React from 'react';
import styles from './style.module.scss'
import image from '../../assets/icons/contact.svg'

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <img src={image} alt="ContactLogo" className={styles.contactImg}/>
                <h2><strong>Contact</strong></h2>
                <p><span>mail@gmail.com</span></p>
                <p><span>tel. 123-456-789</span></p>
                <p><span>ul. Kościuszki 12</span></p>
                <p><span>00-000 Wroław </span></p>
            </div>
        </div>
    )
}

export default Contact;