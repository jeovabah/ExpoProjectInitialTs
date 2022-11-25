import styled from 'styled-components/native'

export const ButtonFloatContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 100%;

  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_global};
`
