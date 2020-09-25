import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, BackButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header: React.FC = ({children}) => {
  const {goBack} = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#999591" />
      </BackButton>
      <Title>{children}</Title>
    </Container>
  );
};

export default Header;
