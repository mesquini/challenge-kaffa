import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled.View`
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 24 : 0}px;
  padding-left: ${moderateScale(5)}px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${moderateScale(22)}px;
  font-family: 'WorkSans-Medium';
  margin: ${moderateScale(20)}px auto;
`;
