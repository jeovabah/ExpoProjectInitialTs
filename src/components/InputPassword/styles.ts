import { Platform, TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface InputProps {
  icon?: boolean
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.large}px;
  border-bottom-width: ${({ theme }) => theme.borderWidth.medium}px;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 3px;

  ${Platform.OS === 'ios' &&
  css`
    padding-bottom: 5px;
  `}
`

export const Content = styled(TextInput)<InputProps>`
  font-size: ${({ theme }) => theme.fontSizes.smalls}px;
  color: ${({ theme }) => theme.colors.secondary};
  width: 75%;
  text-decoration: none;
  margin-left: ${({ icon }) => (icon ? RFValue(7) : RFValue(1))}px;
`

export const TouchShowPassword = styled.TouchableOpacity<InputProps>`
  margin-left: ${({ icon }) => (icon ? RFValue(15) : RFValue(45))}px;
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.toast.attention};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
`
