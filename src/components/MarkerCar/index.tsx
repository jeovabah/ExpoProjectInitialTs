import { Image, ImageStyle } from 'react-native'
import { Marker } from 'react-native-maps'
import car from '../../../assets/car.png'

interface Props {
  latitude: number
  longitude: number
  onPress?: () => void
}

export const MarkerCar = ({ latitude, longitude, onPress }: Props) => {
  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      onPress={onPress}
    >
      <Image
        source={car}
        style={
          {
            width: 30,
            height: 30,
            resizeMode: 'contain',
          } as ImageStyle
        }
      />
    </Marker>
  )
}
