import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {s, vs, ms} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonTime = styled(RectButton)`
  background: #c1c1c1;
  width: ${s(100)}px;
  height: ${vs(30)}px;
  padding: ${ms(5)}px ${ms(15)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTimeText = styled.Text`
  font-size: ${ms(16)}px;
  font-weight: bold;
  color: #000;
`;

export const Times = styled.View`
  flex: 1;
  margin-top: ${s(20)}px;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${ms(14)}px;
  font-weight: bold;
  margin-top: ${s(30)}px;
  color: #024d04;
`;

export const Time = styled.Text`
  font-size: ${ms(12)}px;
  font-weight: 200;
  color: #09034b;
`;
