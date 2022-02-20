import React from 'react'
import styles from './Body.module.scss'
import img1 from '../../static/images/illustration-1.jpg'
import img2 from '../../static/images/illustration-2.jpg'
import img3 from '../../static/images/illustration-3.jpg'
import img4 from '../../static/images/illustration-4.jpg'
import img5 from '../../static/images/illustration-5.jpg'

const images = [img1, img2, img3, img4, img5]

const Body = () => {
    return (
        <div className={styles.wrap}>
            {images.map((image) => (
                <img src={image} alt="clothes illustration" />
            ))}
        </div>
    )
}

export default Body
