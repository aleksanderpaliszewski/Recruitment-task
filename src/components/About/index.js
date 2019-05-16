import React  from 'react';
import styles from './style.module.scss'
import image from '../../assets/icons/about.png'

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <img src={image} alt={'ContactLogo'} className={styles.contactImg}/>
                <h2><strong>About</strong></h2>
                <p className={styles.contactText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis nunc eros. Maecenas vehicula nunc sed mi
                    condimentum, eu iaculis libero sodales.  Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris quis nunc eros.
                </p>
            </div>
        </div>
    )
}

export default About;