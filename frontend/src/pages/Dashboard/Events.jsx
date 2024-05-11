import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Style du titre h1
const StyledH1 = styled.h1`
  font-size: 2.5rem;
  margin: 3rem;
  text-align: center;
  color:#834f59;
  font-weight:400;

  &:after {
    content: '';
    display: block;
    width: 20%;
    margin: 0.5rem auto;
    border-bottom: 4px solid #be3b4c;
    
  }
`;

// Style du titre h2
const StyledH2 = styled.h2`
  font-size: 2.5rem;
  margin: 3rem;
  text-align: center;
  color:#834f59;
  font-weight:400;

  &:after {
    content: '';
    display: block;
    width: 70%;
    margin: 0.5rem auto;
    border-bottom: 4px solid #be3b4c;
  }
`;
//Style button
const Button = styled.button`
color:white;
background-color:#3e4b37;
&:hover{
  background-color:#e1cdd4;
  color:#834f59
}
`
export default function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    titre_event: '',
    date_heure_debut: '',
    date_heure_fin: '',
    type_event: '',
    destinataire: '',
    statut: '',
    nombre_inscrits: 0
  });
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [eventIdToEdit, setEventIdToEdit] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/events');
      const eventsWithInscrits = await Promise.all(response.data.resultats.map(async (event) => {
        const nombreInscrits = await fetchNbrInscritsEvent(event.id);
        return { ...event, nombre_inscrits: nombreInscrits };
      }));
      console.log(eventsWithInscrits)
      setEvents(eventsWithInscrits); // Mettre à jour les événements avec le nombre d'inscrits
    } catch (error) {
      console.error('Erreur lors de la récupération des événements :', error);
    }
  };

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = async () => {
    if (
      !newEvent.titre_event ||
      !newEvent.date_heure_debut ||
      !newEvent.date_heure_fin ||
      !newEvent.type_event ||
      !newEvent.destinataire ||
      !newEvent.statut
    ) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Vérification de la date de fin
    if (new Date(newEvent.date_heure_fin) <= new Date(newEvent.date_heure_debut)) {
      setError('La date de fin doit être postérieure à la date de début.');
      return;
    }
    try {
      if (editMode) {
        // Mettre à jour l'événement
        await axios.put(`http://127.0.0.1:8000/api/updateEvent/${eventIdToEdit}`, newEvent);
        setEditMode(false);
        setEventIdToEdit(null);
        alert('Les modifications ont été enregistrées avec succès !');
      } else {
        await axios.post('http://127.0.0.1:8000/api/addEvent', newEvent);


        // Afficher un message de confirmation
        alert('L\'événement a été ajouté avec succès !');
      }
      fetchEvents();
      setNewEvent({
        titre_event: '',
        date_heure_debut: '',
        date_heure_fin: '',
        type_event: '',
        destinataire: '',
        statut: '',
        nombre_inscrits: 0
      });
      setError('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'événement :', error);
    }
  };
  const handleEditEvent = (event) => {
    setEditMode(true);
    setEventIdToEdit(event.id);
    setNewEvent({
      titre_event: event.titre_event,
      date_heure_debut: event.date_heure_debut,
      date_heure_fin: event.date_heure_fin,
      type_event: event.type_event,
      destinataire: event.destinataire,
      statut: event.statut,
      nombre_inscrits: event.nombre_inscrits
    });
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleCancelEdit = () => {
    setEditMode(false);
    setEventIdToEdit(null);
    setNewEvent({
      titre_event: '',
      date_heure_debut: '',
      date_heure_fin: '',
      type_event: '',
      destinataire: '',
      statut: '',
      nombre_inscrits: 0
    });
    setError('')
  };
  const handleDeleteEvent = async (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?');
    if (confirmDelete) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/inscritsEvent/${id}`);

        console.log(response)
        const inscrits = response.data;

        if (inscrits.length > 0) {
          await Promise.all(inscrits.map(async (inscrit) => {
            await axios.delete(`http://127.0.0.1:8000/api/deleteInscrits/${inscrit.id}`);
          }));
        }


        await axios.delete(`http://127.0.0.1:8000/api/deleteEvent/${id}`);
        fetchEvents();
        alert('L\'événement et les inscrits associés ont été supprimés avec succès.');
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'événement :', error);
        alert('Une erreur est survenue lors de la suppression de l\'événement. Veuillez réessayer.');
      }
    }
  };
  const fetchNbrInscritsEvent = async (eventId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/inscrits/${eventId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre d\'inscrits :', error);
      return 0;
    }
  };

  return (
    <div className="container-fluid">
      <StyledH1 className=" text-center display-5">Événements</StyledH1>
      {events.length === 0 ? (
        null
      ) :
        <table className="table">
          <thead>
            <tr className='text-center'>
              <th scope="col">Titre</th>
              <th scope="col">Date de début</th>
              <th scope="col">Date de fin</th>
              <th scope="col">Type</th>
              <th scope="col">Destinataire</th>
              <th scope="col">Inscrits</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className='text-center'>
                <td>{event.titre_event}</td>
                <td>{event.date_heure_debut}</td>
                <td>{event.date_heure_fin}</td>
                <td>{event.type_event}</td>
                <td>{event.destinataire}</td>
                <td>{event.nombre_inscrits}</td>

                <td>
                  <Link className='btn btn-info mx-2' to={`/administrative/events/${event.id}/inscrits`}>Inscrits</Link>
                  <button className="btn btn-danger" onClick={() => handleDeleteEvent(event.id)}>Supprimer</button>
                  <button className='btn btn-primary mx-2' onClick={() => handleEditEvent(event)}>Modifier</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>}

      <div className="mb-3 w-50 mx-auto" ref={formRef}>
        <StyledH2 className='text-center w-100   display-5'> {editMode ? 'Modifier l\'événement' : 'Ajouter un nouvel événement'}</StyledH2>
        <input type="text" className="form-control m-3" value={newEvent.titre_event} name="titre_event" placeholder="Titre" onChange={handleChange} />
        <input type="datetime-local" className="form-control m-3" value={newEvent.date_heure_debut} name="date_heure_debut" onChange={handleChange} />
        <input type="datetime-local" className="form-control m-3" value={newEvent.date_heure_fin} name="date_heure_fin" onChange={handleChange} />
        <input type="text" className="form-control m-3" name="type_event" value={newEvent.type_event} placeholder="Type" onChange={handleChange} />
        <input type="text" className="form-control m-3" name="destinataire" value={newEvent.destinataire} placeholder="Destinataire" onChange={handleChange} />
        <input type="text" className="form-control m-3" name="statut" value={newEvent.statut} placeholder="Statut" onChange={handleChange} />
        {error && <div className='text-danger text-center '>
          {error}
        </div>}
        <Button className="btn m-3" onClick={handleAddEvent}>
          {editMode ? 'Enregistrer les modifications' : 'Ajouter l\'événement'}
        </Button>
        <Button className="btn m-3" onClick={handleCancelEdit}>Annuler</Button>

      </div>
    </div>
  );
}
