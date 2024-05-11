import React from 'react'
import styled from 'styled-components';
import "./card.css";
const Link = styled.a`

background-color:#144d90;
color:#ffffff;
&:hover {
    background-color: #113b71;
    color:#ffffff
}
`
const Strong = styled.strong`
color:#1167b1;
font-weight: 500;
display:inline-block;
width: 170px;
margin:5px 0`

export default function CardHop({nomHopital,adresse,contact,photo,service_medicaux,ville}) {
  return (
        <div className="card cardm mb-5 shadow-sm">
            <img src={photo} alt={nomHopital} className="img-fluid w-100" style={{ width: '100%', height: '200px' }} />
            <div className="card-body">
            <h5 className="card-titlemb-3 fw-bold" style={{color:"#4d6242"}}>{nomHopital}</h5>
            <p className="card-text">
                <Strong className='w-100'><i className="fas fa-map-marker-alt m-1"></i>Adresse:</Strong>{ville} : {adresse} <br />
                <Strong className='w-100'><i className="fas fa-medkit m-1"></i>Service Médicaux:</Strong> {service_medicaux}<br />
                <Strong className='w-100'><i className="fas fa-phone m-1"></i>Contact:</Strong> {contact}
            </p>
            <Link href="#" className="btn  float-end">Voir plus</Link>
            </div>
        </div>

  )
}
