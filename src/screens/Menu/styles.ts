import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: 10px 5px 0 5px;
  background-color: ${({theme}) => theme.colors.background_global};
`;

export const Content = styled.ScrollView`
  margin-top: 20px;
`;

export const VersionNumber = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 12px;
  align-self: center;
  position: absolute;
  padding-bottom: 10px;
  bottom: 0;
`;

export const HeaderMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 5px;
`;
