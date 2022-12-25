import { TextInput } from './styles'

interface Props {
  placeholder?: string
  value?: string
  setChange?: any
  m?: string
  w?: string
}

export const Input = ({ setChange, value, placeholder, m, w }: Props) => {
  return <TextInput placeholder={placeholder} value={value} m={m} w={w} onChangeText={setChange} />
}
