import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { KeyboardTypeOptions, ReturnKeyType } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Icon from '@expo/vector-icons/Ionicons'

import { Container, Content, Error, TouchShowPassword } from './styles'
import theme from '../../styles/theme'
import { If } from '../If'

interface InputProps {
  placeholder: string
  icon?: boolean
  keyboardType?: KeyboardTypeOptions
  ref?: any
  error?: string
  control: any
  returnKeyType?: ReturnKeyType
  name: string
  maxLength?: number
  onSubmitEditing?: () => void
  multiline?: boolean
  numberOfLines?: number
}

export function InputPassword({
  placeholder,
  keyboardType,
  error,
  icon,
  control,
  name,
  maxLength,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Container>
            <If condition={icon === true}>
              <Feather name="lock" size={21} color={theme.colors.primary} />
            </If>
            <Content
              icon={icon}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.background_black_light}
              autoComplete="off"
              onChangeText={onChange}
              secureTextEntry={!showPassword}
              keyboardType={keyboardType}
              returnKeyType="done"
              value={value}
              maxLength={maxLength}
              autoCapitalize="none"
              {...rest}
            />

            <TouchShowPassword
              activeOpacity={1}
              icon={icon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                color={theme.colors.primary}
                size={21}
              />
            </TouchShowPassword>
          </Container>
        )}
      />
      {error && <Error>{error}</Error>}
    </>
  )
}
