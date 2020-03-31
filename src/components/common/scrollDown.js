import React from 'react'
import './scroll-down.css'
import { animateScroll as scroll } from 'react-scroll'

export function ScrollDown() {
    return (
        <React.Fragment>
            <div className="scroll-down">
                <a onClick={() => scroll.scrollMore(620)}><span></span></a>
            </div>
        </React.Fragment>
    )
}
