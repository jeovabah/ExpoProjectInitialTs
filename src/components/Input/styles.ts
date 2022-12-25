import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface InputProps {
  m?: string
  w?: string
}

export const TextInput = styled.TextInput<InputProps>`
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
  border-width: ${({ theme }) => theme.borderWidth.small}px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small}px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  flex: 1;
  width: ${({ w }) => w ?? '0'};
  max-height: ${RFValue(30)}px;
  min-height: ${RFValue(30)}px;
  margin: ${({ m }) => m ?? 0};
`
