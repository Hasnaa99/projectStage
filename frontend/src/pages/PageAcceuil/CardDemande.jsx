// CardDemande.js
import React from 'react';
import styled from 'styled-components';

const EventCard2 = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  width: 350px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const CardContent = styled.div`
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #eaf0f7;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const ButtonLink = styled.button`
  background-color: #4a7c59;
  color: white;
  border: 2px solid #4a7c59;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1aa37a;
    border-color: #1aa37a;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export default function CardDemande({ eventsRef, congesRef, absenceRef }) {
  const handleScrollToEvents = () => {
    eventsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToConges = () => {
    congesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToAbsents = () => {
    absenceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <EventCard2>
        <CardContent>
          <CardTitle>Demandes d'absence</CardTitle>
          <CardDescription>
            Consultez et gérez les demandes d'absence.
          </CardDescription>
        </CardContent>
        <CardContent>
          <ButtonLink onClick={handleScrollToAbsents}>Voir les demandes</ButtonLink>
        </CardContent>
      </EventCard2>
      <EventCard2>
        <CardContent>
          <CardTitle>Demandes de congé</CardTitle>
          <CardDescription>
            Consultez et gérez les demandes de congés.
          </CardDescription>
        </CardContent>
        <CardContent>
          <ButtonLink onClick={handleScrollToConges}>Voir les demandes</ButtonLink>
        </CardContent>
      </EventCard2>
      <EventCard2>
        <CardContent>
          <CardTitle>Liste des événements</CardTitle>
          <CardDescription>
            Découvrez les événements organisés par l'entreprise.
          </CardDescription>
        </CardContent>
        <CardContent>
          <ButtonLink onClick={handleScrollToEvents}>Voir les événements</ButtonLink>
        </CardContent>
      </EventCard2>
    </>
  );
}
