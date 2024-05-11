// Carousel.js
import React,{useEffect} from 'react';
import styled from 'styled-components';
import CardDemande from './CardDemande';

const Img = styled.img`
  height: 500px;
  width: 100%;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;

export default function Carousel({ eventRef, congeRef, absenceRef }) {
    useEffect(() => {
        const myCarousel = document.getElementById('carouselExampleIndicators');
        const carousel = new bootstrap.Carousel(myCarousel, {
          interval: 3000
        });
      }, []);
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Img src="Images/Ocp1.jpg" className="d-block img-fluid" alt="..." />
          <TextOverlay>
            <h1>Bienvenue ! Découvrez tout ce que l'OCP a à offrir en termes de services et d'avantages pour les employés.</h1>
          </TextOverlay>
        </div>
        <div className="carousel-item">
          <Img src="Images/ocp7.jpg" className="d-block img-fluid" alt="..." />
          <TextOverlay className='d-flex'>
            <CardDemande eventsRef={eventRef} congesRef={congeRef} absenceRef={absenceRef} />
          </TextOverlay>
        </div>
        <div className="carousel-item">
          <Img src="Images/Ocp6.jpg" className="d-block img-fluid" alt="..." />
          <TextOverlay className='d-flex'>
            <CardDemande eventsRef={eventRef} congesRef={congeRef} absenceRef={absenceRef} />
          </TextOverlay>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
