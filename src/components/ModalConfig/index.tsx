import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Alert, Text } from 'react-native'
import { If } from '~components/If'
import { Input } from '~components/Input'
import { TextEdit } from '~components/TextEdit'
import theme from '~styles/theme'
import {
  ButtonAdd,
  ButtonLocation,
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
  handleLocation?: any
}

interface Car {
  id: string
  name: string
  image?: string
}
export const ModalConfig = ({ visible, setVisible, data, setData, handleLocation }: Props) => {
  const [car, setCar] = useState<Car>({} as Car)
  const handleAdd = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        name: car.name,
        image: 'https://i.imgur.com/8Km9tLL.jpg',
        idTracker: car.id,
        latitude: data[0]?.latitude + 0.002,
        longitude: data[0]?.longitude + 0.002,
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
              <TextEdit>Id de rastreio</TextEdit>
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
                  <If condition={item?.isActive}>
                    <Ionicons
                      name="location"
                      size={24}
                      onPress={() => handleLocation(item?.latitude, item?.longitude)}
                    />
                  </If>

                  <TextEdit>
                    {item?.name} - {item?.idTracker}
                  </TextEdit>
                  <TextEdit>{item?.isActive ? 'Ativo' : 'Inativo'}</TextEdit>
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
