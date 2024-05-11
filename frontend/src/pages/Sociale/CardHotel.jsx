import React from 'react'
import styled from 'styled-components';
import "../Medical/card.css";
const Link = styled.a`

background-color:#118499;
color:#ffffff;
&:hover {
    background-color: #4b94a4;
    color:#ffffff
}
`
const Strong = styled.strong`
color:#156775;
font-weight: 500;
width: 150px;
`
export default function CardHotel({nom_hotel,adresse,contact,photo,equipement,ville}) {
  return (
        <div className="card cardm mb-5 shadow-sm">
            <img src={photo} alt={nom_hotel} className="img-fluid w-100" />
            <div className="card-body">
            <h5 className="card-title text-center mb-3 fw-bold" style={{color:"#9c5b46"}}>{nom_hotel}</h5>
            <p className="card-text">
                <Strong className='w-100'><i className="fas fa-map-marker-alt m-1"></i>Adresse:</Strong> {adresse}<br />
                <Strong className='w-100'><i className="fas fa-wifi m-1"></i>Equipements:</Strong> {equipement}<br />
                <Strong className='w-100'>Ville:</Strong> {ville}<br />
                <Strong className='w-100'><i className="fas fa-phone m-1"></i>Contact:</Strong> {contact}
            </p>
            <Link href="#" className="btn  float-end">Voir plus</Link>
            </div>
        </div>

  )
}
