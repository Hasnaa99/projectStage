import React from 'react'
export default function Card ({ title, imageUrl }) {
  return (
    <div className="card " >
    <h2 style={{color:"#23906b"}}>{title}</h2>
    <img  src={imageUrl} alt={title} />
  </div>
  )
}
