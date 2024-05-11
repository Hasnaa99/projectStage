import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
const StyledH1 = styled.h1`
  font-size: 2.5rem;
  margin: 2.5rem;
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
const StyledMessage = styled.div`
  font-size: 1.5rem;
  margin: 5rem auto;
  text-align: center;
  color: #834f59;
`;
export default function ListConge() {
    const [conges,setConges] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(()=>{
        fetchData();

    },[])
    const fetchData=async()=>{
        try{
            const resultat = await axios("http://127.0.0.1:8000/api/conges");
            setConges(resultat.data.resultats);
        }catch(err){
            console.log('Something wrong',err);
        }

    }
    const handleAccept = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir accepter cette demande ?')) {
          try {
            await axios.patch(`http://127.0.0.1:8000/api/conges/${id}`, { statut: 'Accepté' });
            fetchData();
            setMessage('La demande a été acceptée.');
          } catch (err) {
            console.log('Something wrong', err);
          }
        }
      };

    const handleReject = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir refuser cette demande ?')) {
          try {
            await axios.patch(`http://127.0.0.1:8000/api/conges/${id}`, { statut: 'Refusé' });
            fetchData();
            setMessage('La demande a été refusée.');
          } catch (err) {
            console.log('Something wrong', err);
          }
        }
      };
  return (
    <div className='container-fluid'>
        <StyledH1 className=" text-center display-5">Les demandes de congés</StyledH1>
        {conges.length === 0 ? (
        <StyledMessage>Aucune demande de congé pour le moment.</StyledMessage>
      ) : (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Matricule</th>
                    <th>Nom complet </th>
                    <th>Post</th>
                    <th>Date début</th>
                    <th>Date fin</th>
                    <th>Motif</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    conges.map((conge,i)=>(
                        <tr key={i}>
                            <td>{conge.employe.matricule}</td>
                            <td>{conge.employe.nom} {conge.employe.prenom}</td>
                            <td>{conge.employe.post}</td>
                            <td>{conge.date_debut}</td>
                            <td>{conge.date_fin}</td>
                            <td>{conge.motif}</td>
                            
                            <td>
                                {conge.statut === 'En attente' ? (
                                            <>
                                                <button className='btn btn-success mx-2' onClick={() => handleAccept(conge.id)}>Accepter</button>
                                                <button className='btn btn-danger' onClick={() => handleReject(conge.id)}>Réfuser</button>
                                            </>
                                        ) : conge.statut === 'Accepté' ? (
                                            <span className='text-success fw-bold'>La demande a été acceptée .</span>
                                        ) : (
                                            <span className='text-danger fw-bold'>La demande a été refusée.</span>
                                        )}
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>)}
    </div>
  )
}
