import { createStackNavigator } from '@react-navigation/stack'

import { DetailsScreen, HomeScreen, ExamplesScreen } from '~screens'
import Menu from '~screens/Menu'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

export const HomeStack = (): JSX.Element => (
  <Navigator>
    <Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen name="Menu" component={Menu} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
)
