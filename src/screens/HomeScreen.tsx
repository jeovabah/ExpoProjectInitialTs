import { View, Text, Image, ImageStyle } from 'react-native'

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MarkerCar } from '~components/MarkerCar'
import { useCallback, useTranslation, useTheme, useEffect } from '~hooks'
import { useLocalProvider } from '~providers/LocalProvider'
export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { t } = useTranslation()
  const { s } = useTheme()
  const { location } = useLocalProvider()

  const fakeDataLocationSocket = [
    {
      id: 1,
      latitude: 10.762622,
      longitude: 101.660172,
      name: 'Car 1',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
    },
    {
      id: 2,
      latitude: 10.762622,
      longitude: 106.660172,
      name: 'Car 2',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
    },
    {
      id: 3,
      latitude: 10.762622,
      longitude: 105.660172,
      name: 'Car 3',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
    },
  ]

  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            height: '100%',
            width: '100%',
          }}
          region={{
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude,
            latitudeDelta: 0.01422,
            longitudeDelta: 0.01421,
          }}
        >
          {fakeDataLocationSocket &&
            fakeDataLocationSocket.map((item) => {
              return <MarkerCar key={item.id} latitude={item.latitude} longitude={item.longitude} />
            })}
        </MapView>
      )}
    </View>
  )
}
