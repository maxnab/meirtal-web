import React from 'react'
import styles from './ContactsPage.module.scss'

const ContactsPage = () => {
    return (
        <div className={styles.wrap}>
            <h1>Contact me!</h1>
            <div className={styles.contacts}>
                <h2>Location:</h2>
                <p>Berlin, Zehlendorf</p>
                <h2>Mail:</h2>
                <a href="mailto:aljosha03@googlemail.com">
                    aljosha03@googlemail.com
                </a>
                <h2>Phone:</h2>
                <p>+7 999 999-99-99</p>
            </div>
        </div>
    )
}

export default ContactsPage
