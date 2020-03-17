import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./social.css"

export function Social() {
    return (
        <React.Fragment>
            <ul className="social">
                <li>
                    <a href="www.github.com" target="_blank">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="www.github.com" target="_blank">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="www.github.com" target="_blank">
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </React.Fragment>
    )
}
