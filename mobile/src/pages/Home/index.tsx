import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Button, ButtonText} from './styles';
import logo from '../../assets/kaffa-mobile-logo.png';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        style={{marginVertical: 100}}
        width={350}
        height={80}
        source={logo}
      />
      <Button onPress={() => navigate('Ex_1_2')}>
        <ButtonText>Exercises 1 and 2</ButtonText>
      </Button>
      <Button onPress={() => navigate('Ex_3_4')}>
        <ButtonText>Exercise 3 and 4</ButtonText>
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
