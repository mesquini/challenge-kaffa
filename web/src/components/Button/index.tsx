import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

interface IProps {
  navigate: string;
}

const Button: React.FC<IProps> = ({ navigate, children }) => {
  return (
    <Container>
      <Link to={navigate}>{children}</Link>
    </Container>
  );
};

export default Button;
