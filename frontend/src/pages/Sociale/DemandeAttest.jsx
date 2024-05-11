import React, { useState } from 'react';
import axios from 'axios';
import AuthChecker from '../AuthChecker';
import styled from 'styled-components';
const Span = styled.span`
color:#be1614;
margin:10px;
`
export default function DemandeAttest() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: '',
    motif: ''
  });
  const [errors, setErrors] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: '',
    motif: ''
  });
  const [alertMessage, setAlertMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/sendEmail', formData);
      console.log(response.data); // Afficher la réponse de votre endpoint Laravel
      // Rediriger l'utilisateur vers une autre page si nécessaire
      setAlertMessage("L'attestation de travail a été envoyée avec succès à l'adresse e-mail.");
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        poste: '',
        motif: ''
  
      })
      setErrors({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        poste: '',
        motif: ''
      });
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.errors) {
        // Mettre à jour les erreurs de chaque champ
        setErrors(error.response.data.errors);
      } 
    }

  };

  return (
    <div className="container mt-5">
      <AuthChecker userType={'employe'}/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mb-5">
            <div className="card-body">
              <h2 style={{ color: '#3bb58f' }} className="card-title text-center mb-4">Demande d'Attestation</h2>
              {alertMessage && (
                <div className={`alert alert-success`} role="alert">
                  {alertMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom :</label>
                  <input type="text" id="nom" name="nom" className="form-control" value={formData.nom} onChange={handleChange}  />
                  {errors.nom&&
                  <Span>{errors.nom[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="prenom" className="form-label">Prénom :</label>
                  <input type="text" id="prenom" name="prenom" className="form-control" value={formData.prenom} onChange={handleChange}  />
                  {errors.prenom&&
                  <Span>{errors.prenom[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email :</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange}  />
                  {errors.email&&
                  <Span>{errors.email[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="telephone" className="form-label">Téléphone :</label>
                  <input type="tel" id="telephone" name="telephone" className="form-control" value={formData.telephone} onChange={handleChange}  />
                  {errors.telephone&&
                  <Span>{errors.telephone[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="poste" className="form-label">Poste :</label>
                  <input type="text" id="poste" name="poste" className="form-control" value={formData.poste} onChange={handleChange}  />
                  {errors.poste&&
                  <Span>{errors.poste[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="motif" className="form-label">Motif :</label>
                  <textarea id="motif" name="motif" className="form-control" value={formData.motif} onChange={handleChange}  />
                  {errors.motif&&
                  <Span>{errors.motif[0]}</Span>}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn py-2 px-5" style={{ backgroundColor: '#3bb58f', color: 'white' }}>Envoyer par email</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
