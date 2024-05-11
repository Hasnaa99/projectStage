import React, {useState,useEffect} from 'react'
import ListEmploys from './ListEmploys'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {styled} from 'styled-components';
const StyledH1 = styled.h1`
  font-size: 2.5rem;
  margin: 3rem;
  text-align: center;
  color:#834f59;
  font-weight:400;

  &:after {
    content: '';
    display: block;
    width: 40%;
    margin: 0.5rem auto;
    border-bottom: 4px solid #be3b4c;
    
  }
`;
const H5 = styled.h5`
  background-color:#8fc0a9;
`
const Span = styled.span`
background-color:#1aa37a;
border:#1aa37a;
padding:6px 30px;
color:#f5f5f5`

export default function MainDash() {
    const [employeData,setEmployeData] = useState([])
    const [departementData,setDepartementData] = useState([])
    const [demandesCongeEnAttente, setDemandesCongeEnAttente] = useState(0);
    const [demandesAbsenceEnAttente, setDemandesAbsenceEnAttente] = useState(0);

    useEffect(()=>{
        fetchData();

    },[])
    
    const fetchData=async()=>{
        try{
            const EmployeResultat = await axios("http://127.0.0.1:8000/api/employes");
            setEmployeData(EmployeResultat.data.resultats);

            const DepartementResultat = await axios("http://127.0.0.1:8000/api/departement");
            setDepartementData(DepartementResultat.data.resultats);

            const congesResult = await axios("http://127.0.0.1:8000/api/conges");
            const demandesEnAttente = congesResult.data.resultats.filter(conge => conge.statut === 'En attente');
            setDemandesCongeEnAttente(demandesEnAttente.length);
            const absenceResult = await axios("http://127.0.0.1:8000/api/absents");
            const demandesAEnAttente = absenceResult.data.resultats.filter(absence => absence.statut === 'En attente');
            setDemandesAbsenceEnAttente(demandesAEnAttente.length);
      }catch(err){
          console.log('Something wrong',err);
      }

    }
  return (
    <React.Fragment>
  
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4 w-100">
      <StyledH1 className=" text-center display-5">Gestion des Ressources Humaines</StyledH1>
                <div className="row my-4">
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 ">
                        <div className="card">
                            <H5 className="card-header text-center text-white">Employées</H5>
                            <div className="card-body">
                              <h5 className="card-title text-center">Nombre d'employées  </h5>
                             
                              <p className='text-center'>
                                <Span className='btn btn-success m-3'>
                                    {employeData.length}
                                </Span>
                              </p>
                              
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div className="card">
                            <H5 className="card-header text-center text-white">Départements</H5>
                            <div className="card-body">
                              <h5 className="card-title text-center">Nombre départements </h5>
                              <p className='text-center'>
                                <Span className='btn btn-success m-3'>
                                    {departementData.length}
                                </Span>
                                <Link className='btn btn-success' to={"#"} style={{backgroundColor:'#1aa37a',border:"#1aa37a"}}>Afficher</Link>
                              </p>
                              
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div className="card">
                            <H5 className="card-header text-center text-white">Congés</H5>
                            <div className="card-body">
                              <h5 className="card-title text-center">Nombre demandes</h5>
                              <p className='text-center'>
                                <Span className='btn btn-success m-3'>
                                    {demandesCongeEnAttente}
                                </Span>
                              </p>
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div className="card">
                            <H5 className="card-header text-center text-white">Absence</H5>
                            <div className="card-body">
                              <h5 className="card-title text-center">Nombre demande</h5>
                              <p className='text-center'>
                                <Span className='btn btn-success m-3'>
                                    {demandesAbsenceEnAttente}
                                </Span>
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
           
            
            <ListEmploys/>
            </main>
                
    </React.Fragment>
  )
}
