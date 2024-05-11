import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthChecker from '../AuthChecker';
const Button = styled.button`
background-color:#3bb58f;
color:white;
&:hover{
  background-color:#61ad98;color:white;
}`
const Span = styled.span`
color:#be1614;

`
export default function DemandeAbsence() {
  const [formData, setFormData] = useState({
    matricule: '',
    motif: '',
    date_debut: '',
    date_fin: ''
  });
  const [errors,setErrors] = useState([])
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/addAbsent", formData);
      console.log(response.data.message)
      navigate('/sociale');
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  };

  return (
    <div className="container mt-5">
      <AuthChecker userType={'employe'}/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mb-5">
            <div className="card-body">
              <h2 className='titre text-center mb-4'  style={{color:'#3bb58f'}} >Demande d'Absence</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label style={{color:"#0a2540"}} htmlFor="matricule" className="form-label fw-bold">Matricule :</label>
                  <input type="number" id="matricule" name="matricule" className="form-control" value={formData.matricule} onChange={handleChange} required />
                  {errors.matricule&&
                    <Span>{errors.matricule[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label style={{color:"#0a2540"}} htmlFor="motif" className="form-label fw-bold">Motif :</label>
                  <textarea id="motif" name="motif" className="form-control" value={formData.motif} onChange={handleChange} required />
                  {errors.motif&&
                    <Span>{errors.motif[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label style={{color:"#0a2540"}} htmlFor="date_debut" className="form-label fw-bold">Date début :</label>
                  <input type="date" id="date_debut" name="date_debut" className="form-control" value={formData.date_debut} onChange={handleChange} required />
                  {errors.date_debut&&
                    <Span>{errors.date_debut[0]}</Span>}
                </div>
                <div className="mb-3">
                  <label style={{color:"#0a2540"}} htmlFor="date_fin" className="form-label fw-bold">Date fin :</label>
                  <input type="date" id="date_fin" name="date_fin" className="form-control" value={formData.date_fin} onChange={handleChange} required />
                  {errors.date_fin&&
                    <Span>{errors.date_fin[0]}</Span>}
                </div>
                <div className="text-center">
                  <Button type="submit" className="btn py-2 px-5">Envoyer</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
