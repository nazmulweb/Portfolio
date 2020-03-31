import React from 'react'
import './title.css'

const Title = ({title, mtBottom, textAlign})  => {
    return (
        <React.Fragment>
            <h2 className="title" style={{marginBottom: mtBottom ? mtBottom : '', textAlign }}>{title}</h2>
        </React.Fragment>
    )
}


export { Title }