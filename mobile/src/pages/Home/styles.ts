import styled from 'styled-components/native';
import {s, vs, ms} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${s(180)}px;
  height: ${vs(35)}px;
  background: #c1c1c1;
  align-items: center;
  justify-content: center;
  border-radius: ${ms(4)}px;
  margin: ${ms(5)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${ms(16)}px;
`;
