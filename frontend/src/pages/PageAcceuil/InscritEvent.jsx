import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthChecker from '../AuthChecker';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #118499;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #4b9ba4;
  }
`;
const Error = styled.span`
  color: #be1614;
  margin: 5px 0;
  font-size: 0.9rem;
`;

const InscriptionForm = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    matricule: '',
    nomComplet: '',
    post: '',
    event_id: eventId
  });
  const [errors, setErrors] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfAlreadyRegistered = async () => {
      try {
        const res = await axios.post(`http://127.0.0.1:8000/api/checkIfAlreadyRegistered/${eventId}`, { matricule: formData.matricule });
        setAlreadyRegistered(res.data.alreadyRegistered); 
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'inscription existante :', error);
      }
    };
    checkIfAlreadyRegistered(); 
  }, [eventId, formData.matricule]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifier si l'utilisateur est déjà inscrit
    if (alreadyRegistered) {
      setShowWarningAlert(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
      return; // Empêcher la soumission du formulaire
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/inscriptEvent`, formData);
      if (response.status === 201) {
        setShowSuccessAlert(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setErrors(error.response.data.errors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === "number" ? parseInt(value) : value });
  };

  return (
    <FormContainer>
      <AuthChecker userType={'employe'} />
      <h2 style={{ color: "#156775", textAlign: 'center' }} className='mb-5'>S'inscrire à l'événement</h2>

      <form onSubmit={handleSubmit}>
        {showSuccessAlert && (
          <div className="alert alert-success" role="alert">
            Vous êtes inscrit dans l'événement avec succès.
          </div>
        )}
         {showWarningAlert && (
          <div className="alert alert-warning" role="alert">
            Vous êtes déjà inscrit à cet événement.
          </div>
        )}
        <div className='mb-4'>
          <label htmlFor="matricule" className='fw-bold mb-2'>Matricule:</label>
          <Input
            type="number"
            id="matricule"
            name="matricule"
            placeholder="Entrez votre matricule"
            value={formData.matricule}
            onChange={handleChange}
          />
          {errors.matricule && <Error>{errors.matricule[0]}</Error>}
        </div>
        <div className='mb-4'>
          <label htmlFor="nomComplet" className='fw-bold mb-2'>Nom complet:</label>
          <Input
            type="text"
            id="nomComplet"
            name="nomComplet"
            placeholder="Entrez votre nom complet"
            value={formData.nomComplet}
            onChange={handleChange}
          />
          {errors.nomComplet && <Error>{errors.nomComplet[0]}</Error>}
        </div>
        <div className='mb-4'>
          <label htmlFor="post" className='fw-bold mb-2'>Poste:</label>
          <Input
            type="text"
            id="post"
            name="post"
            placeholder="Entrez votre poste"
            value={formData.post}
            onChange={handleChange}
          />
          {errors.post && <Error>{errors.post[0]}</Error>}
        </div>
        <div className='text-center'>
          <Button type="submit" className='me-3'>S'inscrire</Button>
          <Button type="reset" onClick={() => navigate('/')}>Annuler</Button>
        </div>

      </form>
    </FormContainer>
  );
};

export default InscriptionForm;
