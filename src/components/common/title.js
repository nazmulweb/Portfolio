import React from 'react'
import './title.css'

const Title = ({title, mtBottom})  => {
    return (
        <React.Fragment>
            <h4 className="title" style={{marginBottom: mtBottom ? mtBottom : ''}}>{title}</h4>
        </React.Fragment>
    )
}


export { Title }