import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 15rem;

  button {
    width: 20vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.2rem;
    padding: 0.3rem;
    border: 0;
    background: #9ef093;
    transition: 0.2s;

    &:hover {
      background: ${darken(0.2, '#9ef093')};
    }
  }
`;

export const Times = styled.div`
  text-align: center;
  margin-top: 5rem;

  h3 {
    color: #363636;
  }

  > p {
    margin-bottom: 1rem;
  }

  p {
    color: #ff8000;
  }
`;
