import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const StyledLink = styled(Link)`
color:#ffffff;
margin-right: 20px;
font-weight: 500;
&:hover {
    color:#faf3dd;
  }
 &:focus,
    &:active {
        color: #ffffff;
        outline: none;
    }
`
const Navbar=styled.nav`
background-color:#16b47b
`
const Ul = styled.ul`
margin-left:100px
`
const LinkFooter = styled(Link)`
color:black;
text-decoration:none;
&:hover {
    color:#16b47b
  }
&:focus,
&:active {
    color: #16b47b;
    outline: none;
}
`
const Footer = styled.footer`
    background-color: #eaf1e1;
    width: 100%;
    padding: 10px 0;
`;


export default function Layout() {
    const employe = JSON.parse(localStorage.getItem('employe'));
    const navigate = useNavigate()
    const logout = async () => {
        const confirmL = confirm('Êtes-vous sûr de vouloir vous déconnecter ?');
        if(confirmL){
            try {
                await axios.post('http://127.0.0.1:8000/api/logout'); 
                localStorage.clear();
                navigate('/login')
            } catch (error) {
                console.error('Erreur lors de la déconnexion :', error);
            }

        }
        
    };
  return (
    <div>
        
        <header>
        <Navbar className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className='img-fluid' src='/Images/logo-white.svg'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <Ul className="navbar-nav">
                    <li className="nav-item">
                        <StyledLink  className='nav-link' to={"/"}>Acceuil</StyledLink>
                    </li>
                    <li className="nav-item">
                        <StyledLink className='nav-link' to={"/sociale"}>Sociale</StyledLink>
                    </li>
                    <li className="nav-item">
                        <StyledLink className='nav-link' to={"/medical"}>Médicale</StyledLink>
                    </li>
                </Ul>
                <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                
                    <div className="dropdown">
                        <button className="btn btn-light mx-5 dropdown-toggle" style={{color:"#00a699"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                        {employe && <span><i class="fa-solid fa-user" style={{color: "#23906b", fontSize:'17px',margin:"5px 5px 6px 7px"}}></i>{ employe.prenom } {employe.nom}</span> }
                        </button>
                        <ul className="dropdown-menu mt-1 mx-5" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Mon profile</a></li>
                            <li><button className="dropdown-item" onClick={logout}>Déconnexion</button></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </Navbar>
        </header>
        <main>
            <Outlet/>
        </main>
        <Footer >
        <div className="row text-center">
       
            <div className="col-md-4">
                <h5><LinkFooter href="/a-propos" >À propos</LinkFooter></h5>
            </div>

            <div className="col-md-4">
                <h5><LinkFooter href="/a-propos" >Contact</LinkFooter></h5>
            </div>

            <div className="col-md-4">
                <h5><LinkFooter href="/a-propos" >Stratégie</LinkFooter></h5>
            </div>
             <div className="row mt-4">
            <div className="col-12">
                <img src="/Images/logo.svg" alt="Logo de l'application" />
            </div>
         </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <p className="text-center mb-0">&copy; 2024 Tous droits réservés.</p>
            </div>
        </div>
        </Footer> 
       
    </div>
   
  )
}
