import { Td,Th } from "./StyledComponents";
import styled from "styled-components";
const MessageContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #333;
`;
const CongeTable = ({ filtredConges }) => (
    <>
     {filtredConges.length === 0 ?(
        <MessageContainer>
          <Message>Aucun congé n'est actuellement enregistré.</Message>
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
                  {
                      filtredConges.map((conge,i)=>(
                          <tr key={i}>
                              <td>{conge.employe.nom} {conge.employe.prenom}</td>
                              <td>{conge.date_debut}</td>
                              <td>{conge.date_fin}</td>
                              <td className=' fw-bold'><Td statut = {conge.statut}>{conge.statut}</Td></td>
                          </tr>
                      ))
                  }
              </tbody>
  
          </table>}
    </>
  );
  export default CongeTable