import styled from 'styled-components/native'

export const ButtonFloatContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 100px;

  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_global};

  elevation: 5;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`
