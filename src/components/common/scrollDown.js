import React from 'react'
import './scroll-down.css'
import { animateScroll as scroll, Link } from 'react-scroll'

export function ScrollDown() {
    return (
        <React.Fragment>
            <div className="scroll-down">
                <Link to="" onClick={() => scroll.scrollMore(720)}><span></span></Link>
            </div>
        </React.Fragment>
    )
}
