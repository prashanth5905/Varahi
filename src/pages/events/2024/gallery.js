import React, {useEffect, useState} from 'react';
import styles from './gallery.module.css';
import p1 from './Gallery/1_1.jpg'
import p2 from './Gallery/3_1.jpg'
import p3 from './Gallery/2_1.jpg'
import p4 from './Gallery/4.jpg'
import p5 from './Gallery/5.jpg'
import p6 from './Gallery/6.jpg'
import p7 from './Gallery/8.jpg'
import p8 from './Gallery/9.jpg'
const sponsors = [
    { img: p1, title: "Merchandise Partner" },
    { img: p3, title: "hello"},
    { img: p4, title: "hello"},
    { img: p5, title: "hello"},   
    { img: p6, title: "hello"},
    { img: p7, title: "hello"},
    { img: p8, title: "hello"},
];

const Gallery = () => {
    return (
        <>
            <div className={styles.Gallery}>
                <h2>Capturing the X-perience</h2>
            </div>
            <div className={styles.scroll_container}>
                <div className={styles.scroll_content}>
                    {sponsors.concat(sponsors).map((sponsor, index) => ( // Duplicated array for infinite loop effect
                        <div className={styles.slide} key={index}>
                            <div className={styles.sponsor_item}>
                                <img src={sponsor.img} alt={sponsor.title} />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
