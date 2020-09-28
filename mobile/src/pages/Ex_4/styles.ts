import {Animated} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const OverLap = styled.Text`
  font-size: ${ms(18)}px;
  font-weight: bold;
  margin: ${ms(10)}px;
`;

export const Rectangle = styled(Animated.View)`
  width: ${s(140)}px;
  height: ${vs(70)}px;
  border-color: #000;
  border-width: ${ms(1)}px;
  margin: ${ms(10)}px ${ms(20)}px;
`;
