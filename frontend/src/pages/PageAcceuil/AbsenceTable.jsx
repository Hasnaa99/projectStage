import { Th,Td } from "./StyledComponents";
import styled from "styled-components";
const MessageContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #333;
`;
const AbsenceTable = ({ absences }) => (
    <>
     {absences.length === 0 ? (
        <MessageContainer>
          <Message>Aucune absence n'est actuellement enregistré.</Message>
        </MessageContainer>
      ):
      <table className='table text-center '>
        <thead className='bg-light'>
          <tr>
            <Th>Nom complet </Th>
            <Th>Date début</Th>
            <Th>Date fin</Th>
            <Th>Statut</Th>
          </tr>
        </thead>
        <tbody>
          {absences.map((absence, i) => (
            <tr key={i}>
              <td>{absence.employe.nom} {absence.employe.prenom}</td>
              <td>{absence.date_debut}</td>
              <td>{absence.date_fin}</td>
              <td className='fw-bold'><Td statut={absence.statut}>{absence.statut}</Td></td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
  export default AbsenceTable
  