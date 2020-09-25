import styled from 'styled-components/native';
import {s, vs, ms} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
`;

export const TopView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: ${ms(10)}px;
`;

export const InputTodo = styled.TextInput`
  flex: 1;
  background: #c1c1c1;
  width: ${s(180)}px;
  padding: ${ms(5)}px;
  margin: 0 ${ms(10)}px;
  font-size: ${ms(14)}px;
`;

export const ButtonSend = styled.TouchableOpacity``;

export const Label = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${ms(1)}px ${ms(5)}px;
  padding: ${ms(5)}px;
  background: #e4e4e4;
  height: ${vs(30)}px;
`;

export const LabelText = styled.Text`
  margin: ${ms(5)}px;
`;

export const LabelButton = styled.TouchableOpacity``;
