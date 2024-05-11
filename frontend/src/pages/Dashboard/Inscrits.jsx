import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from './Pagination';
const StyledH1 = styled.h1`
  font-size: 2.5rem;
  margin: 3rem;
  text-align: center;
  color:#834f59;
  font-weight:400;
`;
const StyledMessage = styled.div`
  font-size: 1.5rem;
  margin: 5rem auto;
  text-align: center;
  color: #834f59;
`;
const BackButton = styled.button`
    color:white;
    background-color:#3e4b37;
    &:hover{
    background-color:#e1cdd4;
    color:#834f59
    }
`;
export default function Inscrits() {
    const { eventId } = useParams();
    const [inscrits, setInscrits] = useState([]);
    const [eventName, setEventName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [employesPerPage] = useState(8);
    const navigate = useNavigate();

    useEffect(() => {
        fetchInscrits();
        fetchEventData();
    }, []);

    // Récupérer la liste des inscrits dans un événement
    const fetchInscrits = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/inscritsEvent/${eventId}`);
            setInscrits(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des inscrits :', error);
        }
    };

    // Récupérer le titre de l'événement
    const fetchEventData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/events/${eventId}`);
            setEventName(response.data.Event.titre_event);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'événement :', error);
        }
    };

    // Retourne les employés de la page actuelle
    const indexOfLastEmploye = currentPage * employesPerPage;
    const indexOfFirstEmploye = indexOfLastEmploye - employesPerPage;
    const currentEmployes = inscrits.slice(indexOfFirstEmploye, indexOfLastEmploye);

    // Change de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            {inscrits.length === 0 ? (
                <>
                <StyledMessage className="text-center">Aucun inscrit pour cet événement pour le moment.</StyledMessage>
                <div className='text-center my-3 mb-4'>
                    <BackButton className='btn' onClick={() => navigate('/administrative/events')}>Retour à la liste des événements</BackButton>
                </div>
                </>
            ) : (
                <>
                    <StyledH1 className="text-center display-5">Liste des inscrits dans {eventName}</StyledH1>
                    <div className='text-start my-3 mb-4'>
                        <BackButton className='btn' onClick={() => navigate('/administrative/events')}>Retour à la liste des événements</BackButton>
                    </div>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr className='text-center'>
                                <th>Matricule</th>
                                <th>Nom complet</th>
                                <th>Poste</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEmployes.map(inscrit => (
                                <tr key={inscrit.id} className='text-center'>
                                    <td>{inscrit.matricule}</td>
                                    <td>{inscrit.nomComplet}</td>
                                    <td>{inscrit.post}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        employesPerPage={employesPerPage}
                        totalEmployes={inscrits.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
}
