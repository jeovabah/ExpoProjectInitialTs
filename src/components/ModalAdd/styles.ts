import { MotiView } from 'moti'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(MotiView)`
  background-color: red;
  z-index: 1;
  position: absolute;
  bottom: 0;
  max-height: 400px;
  min-height: 400px;
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.spacing.medium}px;
  border-top-right-radius: ${({ theme }) => theme.spacing.medium}px;
  background-color: ${({ theme }) => theme.colors.background_global};
  padding: ${({ theme }) => theme.spacing.medium}px;
  align-items: center;

  elevation: 5;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
`

export const ContainerInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 5px;
`

export const ContainerInput = styled.View`
  width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContainerInputName = styled.View`
  width: 50%;
  margin: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonAdd = styled.TouchableOpacity`
  height: ${RFValue(35)}px;
  padding: 0 ${({ theme }) => theme.spacing.medium}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`

export const InputId = styled.TextInput`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
  border-width: ${({ theme }) => theme.borderWidth.small}px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small}px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
`

export const ListUsers = styled.FlatList`
  width: 100%;
`

export const ContainerList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;

  border-bottom-width: ${({ theme }) => theme.borderWidth.small}px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`
