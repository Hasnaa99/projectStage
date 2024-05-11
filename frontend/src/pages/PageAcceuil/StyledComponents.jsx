import styled from 'styled-components';

export const Th = styled.th`
  color: #00798c !important;
  font-size:17px;
  font-weight:500;
`;

export const Td = styled.td`
  ${({ statut }) => {
    switch (statut) {
      case 'Accepté':
        return `color: green;`;
      case 'Refusé':
        return `color: red;`;
      case 'En attente':
        return `color: orange;`;
      default:
        return `color: black;`;
    }
  }}
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #16b47b;
  text-align: center;
  margin-bottom: 40px;
  margin-top:15px;
  position: relative;
  padding:10px;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 13%;
    height: 4px;
    background-color: #16b47b;
    transform: translateX(-50%);
  }
`;

export const H3 = styled.h3`
  text-align: center;
  color: #9c5b46;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-weight: 600;
  color: #156775;
`;




export const Container = styled.div`
  padding: 20px;
`;

export const EventCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;
export const RegisterButton = styled.button`
  background-color: #4b94a4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

