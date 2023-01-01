import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`

export const ContainerButtonFloat = styled.View`
  position: absolute;

  flex-direction: column;
  top: ${RFValue(50)}px;
  left: 10px;
`

export const MyLocation = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`

export const ContainerProfile = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(50)}px;

  right: 10px;
  flex-direction: row;
  align-items: center;
  elevation: 5;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`
