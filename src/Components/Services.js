import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";


const Services = () => {
    return (
        <div>
            <div className="heading">
                <h1>Our Services</h1>

            </div>

            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
                <div>
                    <img src={img1}></img>
                    <p className='legend'>Full Stack</p>
                </div>
                <div>
                    <img src={img2}></img>
                    <p className='legend'>Peer to Peer Support</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Services