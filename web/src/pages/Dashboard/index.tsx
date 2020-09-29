import React from 'react';

import { Container, Logo, Content } from './styles';

import logo from '../../assets/kaffa-mobile-logo.png';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={logo} />
        <Button navigate="Ex_1_2">Exercise 1 and 2</Button>
        <Button navigate="Ex_3_4">Exercise 3 and 4</Button>
        <Button navigate="Ex_5">Exercise 5</Button>
        <Button navigate="Ex_6_7">Exercise 6 and 7</Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
