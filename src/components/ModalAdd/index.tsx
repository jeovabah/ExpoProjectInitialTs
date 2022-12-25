import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Text } from 'react-native'
import { Button } from '~components/Button'
import { If } from '~components/If'
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

interface Car {
  id: string
  name: string
  image?: string
}
export const ModalAdd = ({ visible, setVisible, data, setData }: Props) => {
  const [car, setCar] = useState<Car>({} as Car)
  const handleAdd = () => {
    setData([
      ...data,
      {
        id: car.id,
        name: car.name,
        image: 'https://i.imgur.com/8Km9tLL.jpg',
      },
    ])
    setTimeout(() => {
      setCar({} as Car)
    }, 1000)
  }

  const handleRemove = (car: Car) => {
    const dataFiltered = data.filter((item: Car) => item.name !== car.name)
    setData(dataFiltered)
  }
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
              <InputId
                value={car.id}
                placeholder="Codigo"
                onChangeText={(e: string) => setCar({ ...car, id: e })}
              />
            </ContainerInput>
            <ContainerInputName>
              <TextEdit>Nome</TextEdit>
              <Input
                m={'0 10px 0 10px'}
                w={'100%'}
                placeholder="Nome"
                value={car.name}
                setChange={(e: string) => setCar({ ...car, name: e })}
              />
            </ContainerInputName>

            <ButtonAdd onPress={handleAdd}>
              <Text
                style={{
                  color: theme.colors.background_global,
                }}
              >
                Adicionar
              </Text>
            </ButtonAdd>
          </ContainerInputs>
          <If condition={data.length > 0}>
            <ListUsers
              data={data}
              renderItem={({ item }: any) => (
                <ContainerList>
                  <TextEdit>{item?.name}</TextEdit>
                  <TextEdit>Ativo</TextEdit>
                  <Ionicons name="close" size={24} onPress={() => handleRemove(item)} />
                </ContainerList>
              )}
              keyExtractor={(item: any) => item?.id}
            />
          </If>
        </Container>
      )}
    </>
  )
}
