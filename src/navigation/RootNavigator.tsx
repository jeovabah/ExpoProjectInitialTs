import { createStackNavigator } from '@react-navigation/stack'
import { FC } from 'react'

import { NavigatorMain } from './NavigatorMain'

import { useAuth } from '~hooks'
import { ApplicationInfoScreen, NotFoundScreen, SettingsScreen, SignUpScreen } from '~screens'
import Login from '~screens/Login'

const { Navigator, Screen, Group } = createStackNavigator<RootStackParamList>()

export const RootNavigator: FC = () => {
  const { isSignedIn } = useAuth()

  return (
    <Navigator>
      {!isSignedIn ? (
        <Group key="unauthorized">
          <Screen
            name="SignIn"
            // component={SignInScreen}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Screen name="SignUp" component={SignUpScreen} />
        </Group>
      ) : (
        <Group key="authorized">
          <Screen name="MainTab" component={NavigatorMain} options={{ headerShown: false }} />
          <Screen name="Settings" component={SettingsScreen} />
        </Group>
      )}
      <Group key="modals" screenOptions={{ presentation: 'modal' }}>
        <Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
        <Screen name="NotFound" component={NotFoundScreen} />
      </Group>
    </Navigator>
  )
}
