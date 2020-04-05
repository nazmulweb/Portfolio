import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./social.css"

export function Social() {
    return (
        <React.Fragment>
            <ul className="social">
                <li>
                    <a href="https://github.com/nazmulweb" target="_blank">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/NazmulHasan5980" target="_blank">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nazmul-hasan-125420105/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </React.Fragment>
    )
}
