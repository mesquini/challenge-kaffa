import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  justify-self: center;
  margin-top: 15rem;
`;

export const ButtonGrups = styled.div`
  display: flex;
  justify-content: center;
`;

export const Mask = styled.button`
  background: #00ff00;
  border-width: 0;
  padding: 0.5rem;
  border-radius: 0.2rem;
  transition: all 0.2s;

  &&:hover {
    opacity: 0.5;
  }
`;

export const NoMask = styled.button`
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #ff3c3c;
  border-width: 0;
  margin-left: 0.5rem;
  transition: all 0.2s;

  &&:hover {
    opacity: 0.5;
  }
`;

export const Input = styled.input`
  margin: 2rem 0;
  border-color: #c1c1c1;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  min-width: 20vw;
  display: flex;
  justify-content: center;
`;

export const Message = styled.h3`
  display: flex;
  justify-content: center;
`;

export const Validate = styled.button`
  width: 20vw;
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: 2rem 0;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #ff9000;
  border-width: 0;
  transition: all 0.2s;

  &&:hover {
    opacity: 0.6;
  }
`;
