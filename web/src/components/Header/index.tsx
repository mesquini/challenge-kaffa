import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <FaArrowLeft size={25} />
      </Link>
      <h3>{children}</h3>
    </Container>
  );
};

export default Header;
