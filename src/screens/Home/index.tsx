import { MaterialIcons } from '@expo/vector-icons'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Button } from '~components'
import { MarkerCar } from '~components/MarkerCar'
import { ModalArrastable } from '~components/ModalArrastable'
import { useCallback, useTranslation, useTheme, useEffect, useState, useRef } from '~hooks'
import { useLocalProvider } from '~providers/LocalProvider'
import theme from '~styles/theme'
import { Container, MyLocation } from './styles'
export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { location } = useLocalProvider()
  const mapRef = useRef<any>(null)
  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
    console.log('openModal')
  }, [visible])

  const fakeDataLocationSocket = [
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
  ]

  const handleMyLocation = useCallback(() => {
    mapRef.current.animateToRegion({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      latitudeDelta: 0.01422,
      longitudeDelta: 0.01422,
    })
  }, [location])

  return (
    <Container>
      {location && (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={{
            height: '100%',
            width: '100%',
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
                  onPress={openModal}
                  key={item.id}
                  latitude={item.latitude}
                  longitude={item.longitude}
                />
              )
            })}
        </MapView>
      )}
      <MyLocation onPress={handleMyLocation} activeOpacity={0.8}>
        <MaterialIcons name="my-location" size={24} color={theme.colors.secondary} />
      </MyLocation>
      {/* pass ref to component ModalArrastable */}
      <ModalArrastable visible={visible} />
    </Container>
  )
}
