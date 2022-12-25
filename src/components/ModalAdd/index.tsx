import { useState } from 'react'
import { View } from 'react-native'
import { Input } from '~components/Input'
import ModalFrame from '~components/ModalFrame'
import { TextEdit } from '~components/TextEdit'
import theme from '~styles/theme'
import { timeout } from '~utils/timeout'
import { ButtonAdd, ContainerInput, ContainerInputName, ContainerInputs, InputId } from './styles'
interface Props {
  data?: any
  setData?: any
  visible: boolean
  setVisible?: any
}
interface Car {
  id: string
  name: string
  image?: string
}

export const ModalAdd = ({ visible, setVisible, data, setData }: Props) => {
  const [car, setCar] = useState<Car>({} as Car)
  const [loading, setLoading] = useState(false)
  const handleAdd = async () => {
    setLoading(true)
    await timeout(1000).then(() => {
      setData([
        ...data,
        {
          id: data.length + 1,
          name: car.name,
          idTracker: car.id,
          image: 'https://i.imgur.com/8Km9tLL.jpg',
        },
      ])
    })
    setLoading(false)
    setCar({} as Car)
    setVisible(false)
  }
  return (
    <ModalFrame
      visible={visible}
      setVisible={setVisible}
      onClose={() => setVisible(false)}
      title="Adicionar Rastreador"
      onPressConfirm={handleAdd}
      isLoading={loading}
    >
      <ContainerInput>
        <View
          style={{
            marginRight: 'auto',
          }}
        >
          <TextEdit>Id de rastreio</TextEdit>
        </View>
        <InputId
          value={car.id}
          placeholder="Codigo"
          onChangeText={(e: string) => setCar({ ...car, id: e })}
        />
      </ContainerInput>
      <ContainerInput>
        <View
          style={{
            marginRight: 'auto',
          }}
        >
          <TextEdit>Nome</TextEdit>
        </View>
        <Input
          m={'0px 10px 0 10px'}
          w={'100%'}
          placeholder="Nome"
          value={car.name}
          setChange={(e: string) => setCar({ ...car, name: e })}
        />
      </ContainerInput>
    </ModalFrame>
  )
}
