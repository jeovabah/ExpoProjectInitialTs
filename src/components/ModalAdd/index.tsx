import { Text } from 'react-native'
import { Button } from '~components/Button'
import { Input } from '~components/Input'
import theme from '~styles/theme'
import { ButtonAdd, Container, ContainerInputs, InputId } from './styles'

interface Props {
  visible: boolean
  setVisible?: any
  data?: any
  setData?: any
}
export const ModalAdd = ({ visible, setVisible, data, setData }: Props) => {
  return (
    <>
      {visible && (
        <Container>
          <ContainerInputs>
            <InputId placeholder="Nome" />
            <Input m={'0 10px 0 10px'} flex={true} placeholder="Nome" />
            <ButtonAdd>
              <Text
                style={{
                  color: theme.colors.background_global,
                }}
              >
                Adicionar
              </Text>
            </ButtonAdd>
          </ContainerInputs>
        </Container>
      )}
    </>
  )
}
