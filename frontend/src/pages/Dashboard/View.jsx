import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    width: 25%;
    margin: 0.5rem auto;
    border-bottom: 4px solid #be3b4c;
    
  }
`;
const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin:30px;
`;

const Label = styled.div`
  font-weight: bold;
  margin:17px 90px;
  color:#530322
`;

const Value = styled.div`
margin:17px 90px ;
`;

function View() {
  const { id } = useParams();
  const [employe, setEmploye] = useState({});

  useEffect(() => {
    fetchEmploye();
  }, [id]);

  const fetchEmploye = async () => {
    try {
      const result = await axios.get(`http://127.0.0.1:8000/api/employes/${id}`);
      setEmploye(result.data.Employe);
    } catch (err) {
      console.log("Something went wrong:", err);
    }
  };

  return (
    <div className="container">
        <StyledH1 className="text-center">Information Employé</StyledH1>
      <StyledCard>
        
        <div className="row">
          <div className="col-md-6">
            <Label>Matricule:</Label>
            <Value>{employe.matricule}</Value>
            <Label>CIN:</Label>
            <Value>{employe.cin}</Value>
            <Label>Nom complet:</Label>
            <Value>{`${employe.prenom} ${employe.nom}`}</Value>
            <Label>Date de naissance:</Label>
            <Value>{employe.date_naissance}</Value>
            <Label>Date d'embauche:</Label>
            <Value>{employe.date_embauche}</Value>
            <Label>Téléphone:</Label>
            <Value>{employe.telephone}</Value>
          
          </div>
          <div className="col-md-6">
            
            <Label>Nombre d'enfants:</Label>
            <Value>{employe.nbr_enfants}</Value>
            <Label>Adresse:</Label>
            <Value>{employe.adresse}</Value>
            <Label>Poste:</Label>
            <Value>{employe.post}</Value>
            <Label>Salaire:</Label>
            <Value>{employe.salaire}</Value>
            <Label>Email:</Label>
            <Value>{employe.email}</Value>
          </div>
        </div>
      </StyledCard>
    </div>
  );
}

export default View;
