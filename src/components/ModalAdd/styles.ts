import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: red;
  z-index: 1;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 90%;
  border-top-left-radius: ${({ theme }) => theme.spacing.medium}px;
  border-top-right-radius: ${({ theme }) => theme.spacing.medium}px;
  background-color: ${({ theme }) => theme.colors.background_global};
  padding: ${({ theme }) => theme.spacing.medium}px;
`

export const ContainerInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`

export const ButtonAdd = styled.TouchableOpacity`
  height: 35px;
  padding: 0 ${({ theme }) => theme.spacing.medium}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`

export const InputId = styled.TextInput`
  width: 20%;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
  border-width: ${({ theme }) => theme.borderWidth.small}px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small}px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
`
