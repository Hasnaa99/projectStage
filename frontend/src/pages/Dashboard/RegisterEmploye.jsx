import React, { useState } from 'react'
import { styled } from 'styled-components';
import ListEmploys from './ListEmploys';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Div = styled.div`
    background-color : #e7fae3;
    width:60%;
    padding:30px;
    border-radius : 20px;
`

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
const Button = styled.button
`
    color:white;
    background-color:#006341;
    &:hover {
        background-color:#1aa37a;color :white;
  }
`
const Label = styled.label`
color : #16b47b;
font-weight:600;`
const Span = styled.span`
color:#be1614;
margin:10px;
`
export default function RegisterEmploye() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cin: '',
        nom: '',
        prenom: '',
        date_naissance: '',
        date_embauche: '',
        situation_familiale: '',
        nbr_enfants: '',
        email: '',
        telephone: '',
        adresse: '',
        post: '',
        salaire:'',
        admin_id: '',
        password: ''
      });
    const [errors,setErrors] = useState([]);
    
      const handleChange = (e) => {
        const { name, value,type } = e.target;
        setFormData({ ...formData,[name]:type==="number"?parseInt(value): value });
      };

    const handleSubmit=async(e)=>{
      console.log(formData)
        e.preventDefault();
        try{
             await axios.post("http://127.0.0.1:8000/api/addnew",formData);
             alert("L'employé est enregistré avec succès");
              navigate('/administrative/employees')
        }catch(err){
          console.log(err)
          setErrors(err.response.data.errors)
            
        }
    }
    const handleReset=()=>{
      setFormData({
        cin: '',
        nom: '',
        prenom: '',
        date_naissance: '',
        date_embauche: '',
        situation_familiale: '',
        nbr_enfants: '',
        email: '',
        telephone: '',
        adresse: '',
        post: '',
        salaire:'',
        admin_id: '',
        password: ''
      })
      setErrors([])

    }
  return (
    <div>
        <StyledH1 className='text-center mt-4'>Ajouter un nouveau employé</StyledH1>
        <Div className='container my-5'>
        <form onSubmit={handleSubmit}>
        <div className="row m-3">
          <div className="form-group">
            <Label htmlFor="CIN">CIN</Label>
            <input
              type="text"
              className="form-control"
              id="CIN"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
            />
            {errors.cin&&
            <Span>{errors.cin[0]}</Span>}
        </div>
        </div>
        <div className="row m-3">
        <div className="col">
          <div className="form-group">
            <Label htmlFor="nom">Nom</Label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
            {errors.nom&&
            <Span>{errors.nom[0]}</Span>}
          </div>
          </div>
         
       
        <div className="col">
          <div className="form-group">
            <Label htmlFor="prenom">Prénom</Label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
            {errors.prenom&&
            <Span>{errors.prenom[0]}</Span>}
          </div>
          </div>
        
      </div>
      <div className='row m-3'>
      <div className="col">
          <div className="form-group">
            <Label htmlFor="date_naissance">Date de naissance</Label>
            <input
              type="date"
              className="form-control"
              id="date_naissance"
              name="date_naissance"
              value={formData.date_naissance}
              onChange={handleChange}
            />
            {errors.date_naissance&&
            <Span>{errors.date_naissance[0]}</Span>}
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <Label htmlFor="date_embauche">Date d'embauche</Label>
            <input
              type="date"
              className="form-control"
              id="date_embauche"
              name="date_embauche"
              value={formData.date_embauche}
              onChange={handleChange}
            />
            {errors.date_embauche&&
            <Span>{errors.date_embauche[0]}</Span>}
          </div>
        </div>
      </div>

      <div className="row m-3">
       
        <div className="col">
          <div className="form-group">
            <Label htmlFor="situation_familiale">Situation familiale</Label>
            <input
              type="text"
              className="form-control"
              id="situation_familiale"
              name="situation_familiale"
              value={formData.situation_familiale}
              onChange={handleChange}
            />
            {errors.situation_familiale&&
            <Span>{errors.situation_familiale[0]}</Span>}
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <Label htmlFor="nombre_enfants">Nombre d'enfants</Label>
            <input
              type="number"
              className="form-control"
              id="nombre_enfants"
              name="nbr_enfants"
              value={formData.nbr_enfants}
              onChange={handleChange}
            />
            {errors.nbr_enfants&&
            <Span>{errors.nbr_enfants[0]}</Span>}
          </div>
        </div>

      </div>

      <div className="row m-3">
       
        <div className="col">
          <div className="form-group">
            <Label htmlFor="email">Email</Label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email&&
            <Span>{errors.email[0]}</Span>}
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <Label htmlFor="telephone">Téléphone</Label>
            <input
              type="tel"
              className="form-control"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
            {errors.telephone&&
            <Span>{errors.telephone[0]}</Span>}
          </div>
        </div>
      </div>

      <div className="row m-3">
        
        <div className="col">
          <div className="form-group">
            <Label htmlFor="adresse">Adresse</Label>
            <input
              type="text"
              className="form-control"
              id="adresse"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
            />
            {errors.adresse&&
            <Span>{errors.adresse[0]}</Span>}
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <Label htmlFor="post">Poste</Label>
            <input
              type="text"
              className="form-control"
              id="post"
              name="post"
              value={formData.post}
              onChange={handleChange}
            />
            {errors.post&&
            <Span>{errors.post[0]}</Span>}
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <Label htmlFor="salaire">Salaire</Label>
            <input
              type="number"
              className="form-control"
              id="salaire"
              name="salaire"
              value={formData.salaire}
              onChange={handleChange}
            />
            {errors.salaire&&
            <Span>{errors.salaire[0]}</Span>}
          </div>
        </div>
      </div>

      <div className="row m-3">
       
        <div className="col">
          <div className="form-group">
            <Label htmlFor="id_responsable">ID Responsable</Label>
            <input
              type="number"
              className="form-control"
              id="id_responsable"
              name="admin_id"
              value={formData.admin_id}
              onChange={handleChange}
            />
            {errors.admin_id&&
            <Span>{errors.admin_id[0]}</Span>}
          </div>
        </div>
      </div>

      <div className="row m-3">
        <div className="col">
          <div className="form-group">
            <Label htmlFor="mot_de_passe">Mot de passe</Label>
            <input
              type="password"
              className="form-control"
              id="mot_de_passe"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password&&
            <Span>{errors.password[0]}</Span>}
          </div>
        </div>
      </div>
      <div className='text-center m-3'>
            <Button type="submit" className="btn mb-3 mx-3 ">Ajouter</Button>
            <Button type="reset" className="btn mb-3 " onClick={handleReset}>Annuler</Button>
        </div>
    </form>
    </Div>
    </div>

    
  
    
  )
}
