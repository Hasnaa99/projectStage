import React, { useEffect, useState ,useRef } from 'react';
import AuthChecker from '../AuthChecker';
import Carousel from './Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CongeTable from './CongeTable';
import AbsenceTable from './AbsenceTable';
import { Container,Title,EventCard,H3,Span,RegisterButton } from './StyledComponents';
export default function Acceuil() {
  const [events, setEvents] = useState([]);
  const [conges, setConges] = useState([]);
  const [absentes, setAbsentes] = useState([]);
  const eventRef = useRef(null);
  const congeRef = useRef(null);
  const absenceRef = useRef(null);
  const loggedEmployee = JSON.parse(localStorage.getItem('employe'));
  const filteredAbsences = absentes.filter(absence => absence.employe.matricule === loggedEmployee.matricule);
  const filtredConges = conges.filter(conge => conge.employe.matricule === loggedEmployee.matricule);

  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/events');
        setEvents(response.data.resultats);

      } catch (error) {
        console.error('Erreur lors de la récupération des événements :', error);
      } 
      }

      const fetchConges = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/conges');
          setConges(response.data.resultats);
        } catch (error) {
          console.error('Erreur lors de la récupération des congés :', error);
        }
      };
      const fetchAbsentes = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/absents');
          setAbsentes(response.data.resultats);
        } catch (error) {
          console.error('Erreur lors de la récupération des absences :', error);
        }
        
      };
      
    fetchEvents();
    fetchConges();
    fetchAbsentes();
  }, []);
 


  return (
    <div>
      <AuthChecker userType={'employe'}/>
      <Carousel eventRef={eventRef}  absenceRef={absenceRef} congeRef={congeRef}/>
      {/* events */}
      <Title ref={eventRef}>Événements</Title>
      
        <Container className='row'>
          {events && events.map((event) => (
            <div className='col-md-6'>
              <EventCard  className = " m-3 text-center" key={event.id}>
              <H3 >{event.titre_event}</H3>
              <p><Span>Date de début :</Span> {event.date_heure_debut}</p>
              <p><Span>Date de fin :</Span> {event.date_heure_fin}</p>
              <p><Span>Type :</Span> {event.type_event}</p>
              <p><Span>Destination :</Span> {event.destinataire}</p>
              <p><Span>Statut :</Span> {event.statut}</p>
              <Link to={`/inscriEvent/${event.id}`}>
                <RegisterButton>S'inscrire</RegisterButton>
              </Link>
            </EventCard>
            </div>
            
          ))}
        </Container>
      <Title ref={congeRef}>Demandes de congé</Title>
        {conges&&
        <CongeTable filtredConges={filtredConges}/>
        }
          <Title ref={absenceRef}>Demandes d'absence</Title>
        {absentes&&
          <AbsenceTable absences={filteredAbsences}/>}

        </div>


  )
}
