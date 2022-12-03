import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { Button } from '~components/Button'
import { Input } from '~components/Input'
import { TextEdit } from '~components/TextEdit'
import theme from '~styles/theme'
import {
  ButtonAdd,
  Container,
  ContainerInput,
  ContainerInputName,
  ContainerInputs,
  ContainerList,
  InputId,
  ListUsers,
} from './styles'

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
        <Container
          from={{
            opacity: 0,
            transform: [{ translateY: 150 }],
          }}
          animate={{
            opacity: 1,
            transform: [{ translateY: 0 }],
          }}
          exit={{
            opacity: 0,
            transform: [{ translateY: 0 }],
          }}
        >
          <ContainerInputs>
            <ContainerInput>
              <TextEdit>ID</TextEdit>
              <InputId placeholder="Nome" />
            </ContainerInput>
            <ContainerInputName>
              <TextEdit>Nome</TextEdit>
              <Input m={'0 10px 0 10px'} w={'100%'} placeholder="Nome" />
            </ContainerInputName>

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
          <ListUsers
            data={data}
            renderItem={({ item }: any) => (
              <ContainerList>
                <TextEdit>{item.name}</TextEdit>
                <TextEdit>Ativo</TextEdit>
                <Ionicons name="close" size={24} />
              </ContainerList>
            )}
            keyExtractor={(item: any) => item.id}
          />
        </Container>
      )}
    </>
  )
}
