import React from 'react';
// import { BsLinkedin } from '@react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillInstagram } from "react-icons/ai"



function Footer() {
    return (
        <footer>

            <div>
                <h1>TechHub.</h1>
                <p>@all right are reserved</p>
            </div>
            <div className='follow'>
                <h5>Follow us</h5>
                <div>
                    <a href=""><AiFillGithub size={"30px"} /></a>
                    <a href=""><AiFillLinkedin size={"30px"} /></a>
                    <a href=""><AiFillYoutube size={"30px"} /></a>
                    <a href=""><AiFillInstagram size={"30px"} /></a>

                </div>

            </div>
        </footer>
    )
}

export default Footer;