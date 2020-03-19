import React from 'react'
import './button.css'

export function Button({link, target, handleClick, title, color, bgColor}) {
    return (
        <React.Fragment>
            <a className="btn btn-main" href={link} target={target} onClick={handleClick} style={{color, bgColor}}>
                {title}
            </a>
        </React.Fragment>
    )
}
