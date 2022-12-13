import React from 'react'
import './App.css'



function CardHeader(props) {
    return (
        <div className="list">
            <img src= {props.i.url} alt="" className="img" />
            <h1 className='name'>{props.i.name}</h1>
            <h2>{props.i.price}</h2>
            <h3>{props.i.currency}</h3>
        </div>

    )
}

export default CardHeader