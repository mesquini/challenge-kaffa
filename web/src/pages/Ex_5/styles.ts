import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 10rem;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: center;

  input {
    padding: 0 0.5rem;
  }

  button {
    display: flex;
    border-width: 0;
    padding: 0.2rem;
    border-radius: 0.2rem;
    margin-left: 0.5rem;
    transition: all 0.2s;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: matrix3d(
        1.15,
        0,
        0,
        0,
        0,
        1.15,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0.9
      );
    }
  }
`;

export const TodoList = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;
  background: #8b8b8b;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;

  p {
  }
  button {
    border: 0;
    background: none;
    transition: all 0.2s;

    &:hover {
      transform: matrix3d(
        1.25,
        0,
        0,
        0,
        0,
        1.25,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0.9
      );
    }
  }
  &&:hover {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.9581);
  }
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  h3 {
    color: #ff5000;
  }
`;
