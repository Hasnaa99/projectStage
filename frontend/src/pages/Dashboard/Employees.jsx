import React from 'react'
import ListEmploys from './ListEmploys'
import { Link } from 'react-router-dom'
import {styled} from "styled-components";
const StyledH1 = styled.h1`
  font-size: 2.5rem;
  margin: 2.5rem;
  text-align: center;
  color:#834f59;
  font-weight:400;

  &:after {
    content: '';
    display: block;
    width: 27%;
    margin: 0.5rem auto;
    border-bottom: 4px solid #be3b4c;
    
  }
`;
export default function Employees() {
  return (
    <React.Fragment>
        <StyledH1> Liste des employées </StyledH1>
        <div className="d-flex justify-content-end">
            <Link to="/administrative/ajouterEmployer" className="btn btn-success m-4">Ajouter nouveau employé</Link>
        </div>

        <ListEmploys/>


    </React.Fragment>
   
  )
}
