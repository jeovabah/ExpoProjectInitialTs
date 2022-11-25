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
  top: 20px;
  left: 10px;
`

export const MyLocation = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`
