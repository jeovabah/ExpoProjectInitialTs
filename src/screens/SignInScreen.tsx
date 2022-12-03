import { TextInput, View } from 'react-native'
// import { VolumeManager } from 'react-native-volume-manager'

import { Button } from '~components'
import { useAuth, useEffect, useState, useTheme } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const [countTakeVolume, setCountTakeVolume] = useState(0)
  const [volume, setVolume] = useState(0)

  // VolumeManager.showNativeVolumeUI({ enabled: true })

  // if volume press 3 times

  // const handlePress = () => {
  //   setCountTakeVolume(countTakeVolume + 1)
  // }

  // useEffect(() => {
  //   VolumeManager.getVolume().then((volume: any) => {
  //     setVolume(volume)
  //   })
  // }, [volume])

  // useEffect(() => {
  //   const volumeListener = VolumeManager.addVolumeListener((result) => {
  //     // returns the current volume as a float (0-1)
  //     setVolume(result.volume)
  //     handlePress()
  //     console.log(result.volume)
  //     if (countTakeVolume === 3) {
  //       console.log('foi pressionado 3 vezes')
  //       setCountTakeVolume(0)
  //     }

  //     // on android, the result object will also have the keys
  //     // music, system, ring, alarm, notification
  //   })

  //   return () => {
  //     volumeListener.remove()
  //   }
  // }, [countTakeVolume])
  const { signIn } = useAuth()
  const { s } = useTheme()
  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Button onPress={signIn} title="Sign in" />
    </View>
  )
}
