import styled, {css} from 'styled-components/native';

interface IconProps {
  avatar?: boolean;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 15px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 15px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 16px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
`;

export const IconContent = styled.View<IconProps>`
  ${({avatar}) =>
    !avatar &&
    css`
      height: 25px;
      max-height: 25px;
      width: 25px;
      max-width: 25px;
      align-items: center;
      justify-content: center;
    `};
`;
