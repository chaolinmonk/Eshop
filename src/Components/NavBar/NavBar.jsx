import React from 'react'
import "./NavBar.css";
export default function NavBar(p) {
    return (
      <nav>
        <div>
          {p.texto}
        </div>
      </nav>
    )
}
