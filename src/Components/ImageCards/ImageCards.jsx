import React, { useEffect } from 'react';
import styles from './ImageCard.module.css'
const ImageCards = (props) => {
    useEffect(() => {
        $(".fancybox").fancybox({
        });
    }, []);

    return (
        <section className={styles.ImagesCard}>
            <div>
                <h1>Our Innovare</h1>
            </div>
            <div className="container">
                <div className="row">
                    {props.images.map((image, index) => (
                        <div key={index} className="col-lg-3 mt-5">
                            <a
                                href={image.src}
                                className="fancybox"
                                title={image.alt}
                                data-fancybox="gallery" // Use a common group name to enable navigation between images
                            
                            
                            >

                                <img src={image.src} alt={image.alt}  />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default ImageCards;
