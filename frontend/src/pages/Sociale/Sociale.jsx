import {Link } from 'react-router-dom';
import CardOpt from './CardOpt';
import styled from 'styled-components';
import AuthChecker from '../AuthChecker';
const I = styled.i`
color:#005c53`

export default function Sociale() {


  return (
    <>
    <AuthChecker userType={'employe'}/>
      <div className="card-container m-5">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <Link to={'/demandeAttestation'} className='text-decoration-none'>
              <CardOpt title="Attestation de travail">
                <I className="fas fa-user-tie fa-7x my-4 "></I>
              </CardOpt>
            </Link>
          </div>
          <div className="col mb-4">
            <Link to={'/demandeConge'} className='text-decoration-none'>
              <CardOpt title="Congé">
                <I className="fas fa-calendar-times fa-7x my-4"></I>
              </CardOpt>
            </Link>
          </div>
          <div className="col mb-4">
            <Link to={'/demandeAbsence'} className='text-decoration-none'>
              <CardOpt title="Absence">
                <I className="fas fa-calendar-minus fa-7x my-4"></I>
              </CardOpt>
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <Link to={'/voyage'} className='text-decoration-none'>
              <CardOpt title="Voyage">
                <I className="fas fa-user fa-7x my-4"></I>
              </CardOpt>
            </Link>
          </div>
          <div className="col mb-4">
            <Link to={'/voyageFamille'} className='text-decoration-none'>
              <CardOpt title="Voyage avec la Famille">
                <I className="fas fa-users fa-7x my-4"></I>
              </CardOpt>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
