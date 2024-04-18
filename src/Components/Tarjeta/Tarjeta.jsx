import React from 'react';
import "./Tarjeta.css";

export default function Tarjeta(props) {
    return (
      <div className='Tarjeta-producto'>
        <div className="prod-img">
            <img src={process.env.PUBLIC_URL + props.img}/>
        </div>
        <div className="name">
            <p>Producto</p>
        </div>
        <div className="short-desc">
            <p>Lorem ipsum dolor sitamet consectetur adipisicing elit.</p>
        </div>
      </div>
    )
}