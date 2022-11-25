import { TextInput } from './styles'

interface Props {
  placeholder?: string
  value?: string
  setChange?: any
  m?: string
  flex?: boolean
  w?: string
}

export const Input = ({ setChange, value, placeholder, m, flex, w }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      m={m}
      w={w}
      flex={flex}
      onChangeText={(e) => setChange(e)}
    />
  )
}
