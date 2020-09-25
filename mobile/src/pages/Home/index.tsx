import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Button, ButtonText} from './styles';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigate('Ex_1_2')}>
        <ButtonText>Exercises 1 and 2</ButtonText>
      </Button>
      <Button onPress={() => navigate('Ex_5')}>
        <ButtonText>Exercise 5</ButtonText>
      </Button>
      <Button onPress={() => navigate('Ex_6_7')}>
        <ButtonText>Exercises 6 and 7</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
