import React from 'react'
import './title.css'

const Title = ({title})  => {
    return (
        <React.Fragment>
            <h4 className="title">{title}</h4>
        </React.Fragment>
    )
}


export { Title }