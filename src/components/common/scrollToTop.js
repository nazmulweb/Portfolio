import React from 'react'
import { animateScroll as scroll, Link } from 'react-scroll'
import { FaArrowUp } from "react-icons/fa"
import './scroll-to-top.css'

export function ScrollToTop() {
    return (
        <React.Fragment>
            <div className="scroll-to-top">
                <Link to="/" onClick={() => scroll.scrollToTop()}><FaArrowUp /></Link>
            </div>
        </React.Fragment>
    )
}
