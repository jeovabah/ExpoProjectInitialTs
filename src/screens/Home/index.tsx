import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { FloatButton } from '~components/FloatButton'
import { MarkerCar } from '~components/MarkerCar'
import { ModalAdd } from '~components/ModalAdd'
import { ModalArrastable } from '~components/ModalArrastable'
import { useCallback, useTranslation, useTheme, useEffect, useState, useRef } from '~hooks'
import { useLocalProvider } from '~providers/LocalProvider'
import AppSocket from '~services/socket'
import theme from '~styles/theme'
import { Container, ContainerButtonFloat, MyLocation } from './styles'
export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { location } = useLocalProvider()
  const mapRef = useRef<any>(null)
  const socketTracker = useRef<any>(null)
  const [visible, setVisible] = useState(false)
  const [carSelected, setCarSelected] = useState<any>(null)
  const [modalConfig, setModalConfig] = useState<boolean>(false)
  const [modalAdd, setModalAdd] = useState<boolean>(false)
  const openModal = useCallback(
    (item: any) => {
      setVisible(true)
      setCarSelected(item)
    },
    [visible]
  )

  const [fakeDataLocationSocket, setFakeDataLocationScoket] = useState([
    {
      id: 1,
      latitude: -3.731822,
      longitude: -38.521669,
      name: 'Car 1',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
    },
    {
      id: 2,
      latitude: -3.731832,
      longitude: -38.522669,
      name: 'Car 2',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
    },
    {
      id: 3,
      latitude: -3.731842,
      longitude: -38.524624,
      name: 'Car 3',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
    },
  ])

  useEffect(() => {
    async function openSocket(idTracker: number) {
      socketTracker.current = new AppSocket()
      socketTracker.current.onEvent(`trackerPerId_${idTracker}`)
    }

    openSocket(1234)
  }, [])

  const handleMyLocation = useCallback(() => {
    mapRef.current.animateToRegion({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      latitudeDelta: 0.01422,
      longitudeDelta: 0.01422,
    })
  }, [location, mapRef.current])

  return (
    <Container>
      {location && (
        <MapView
          ref={mapRef}
          provider={'google'}
          style={{
            height: '100%',
            width: '100%',
          }}
          onPress={() => {
            setModalAdd(false)
          }}
          region={{
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude,
            latitudeDelta: 0.01422,
            longitudeDelta: 0.01422,
          }}
          showsUserLocation={true}
        >
          {fakeDataLocationSocket &&
            fakeDataLocationSocket.map((item) => {
              return (
                <MarkerCar
                  onPress={() => openModal(item)}
                  key={item.id}
                  latitude={item.latitude}
                  longitude={item.longitude}
                />
              )
            })}
        </MapView>
      )}

      <ContainerButtonFloat>
        <FloatButton
          onPress={() => setModalAdd(true)}
          icon={<Ionicons name="settings" size={24} color={theme.colors.secondary} />}
        />
        <FloatButton icon={<Ionicons name="add" size={24} color={theme.colors.secondary} />} />
        <FloatButton
          icon={<AntDesign name="arrowsalt" size={24} color={theme.colors.secondary} />}
        />
        <FloatButton icon={<Ionicons name="search" size={24} color={theme.colors.secondary} />} />
      </ContainerButtonFloat>

      <MyLocation onPress={handleMyLocation} activeOpacity={0.8}>
        <MaterialIcons name="my-location" size={24} color={theme.colors.secondary} />
      </MyLocation>
      {/* pass ref to component ModalArrastable */}
      <ModalArrastable data={carSelected} visible={visible} setVisible={setVisible} />
      <ModalAdd
        visible={modalAdd}
        setData={setFakeDataLocationScoket}
        setVisible={setModalAdd}
        data={fakeDataLocationSocket}
      />
    </Container>
  )
}
