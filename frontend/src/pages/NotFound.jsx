import React from 'react';
import styled from 'styled-components';

// Styled component pour le conteneur de la page NotFound
const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

// Styled component pour le conteneur du message d'erreur
const ErrorMessageContainer = styled.div`
  text-align: center;
`;

// Styled component pour le titre h1
const StyledH1 = styled.h1`
  font-size: 4rem;
  color: #dc3545;
`;

// Styled component pour le texte du message d'erreur
const StyledMessage = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorMessageContainer>
        <StyledH1>404</StyledH1>
        <StyledMessage>Oops! Page not found.</StyledMessage>
      </ErrorMessageContainer>
    </NotFoundContainer>
  );
}
