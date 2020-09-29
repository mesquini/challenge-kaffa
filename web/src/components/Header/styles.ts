import styled from 'styled-components';

export const Container = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;

  a {
    color: #000;
    margin-left: 2rem;

    &:hover {
      opacity: 0.5;
    }
  }

  h3 {
    margin: auto;
    color: #ff9000;
  }
`;
