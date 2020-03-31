import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaArrowUp } from "react-icons/fa"
import './scroll-to-top.css'

export function ScrollToTop() {
    return (
        <React.Fragment>
            <div className="scroll-to-top">
                <a onClick={() => scroll.scrollToTop()}><FaArrowUp /></a>
            </div>
        </React.Fragment>
    )
}
