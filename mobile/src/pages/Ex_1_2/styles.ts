import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {s, vs, ms} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-bottom: ${ms(50)}px;
`;

export const Mask = styled(RectButton)`
  background: #15c46c;
  padding: ${ms(15)}px;
  height: ${vs(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${ms(4)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${ms(16)}px;
`;

export const NoMask = styled(RectButton)`
  background: #f57b52;
  padding: ${ms(15)}px;
  height: ${vs(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${ms(4)}px;
`;

export const InputCNPJ = styled.TextInput`
  background: #c1c1c1;
  width: ${s(140)}px;
  padding: ${ms(5)}px;
  font-size: ${ms(14)}px;
`;

export const ButtonValidate = styled(RectButton)`
  margin-top: ${ms(50)}px;
  background: #24ff24;
  width: ${s(80)}px;
  height: ${vs(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${ms(4)}px;
`;
