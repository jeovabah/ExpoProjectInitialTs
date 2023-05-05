import { View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Container, Content } from './styles'
import { useAuth, useNavigation } from '~hooks'
import ButtonWithIcon from '~components/WithIcon'
import { buildApp } from '~config/constantBuild'

export default function Menu() {
  const { goBack, navigate } = useNavigation()
  const { signOut, userData: user } = useAuth()
  const { colors } = useTheme()

  return (
    <View>
      <Container>
        <ButtonWithIcon
          avatar
          icon={
            <Avatar
              size="medium"
              iconStyle={{ marginLeft: 30 }}
              rounded
              source={
                user != null
                  ? {
                      uri: `${buildApp().HOST_IMAGE_CUSTOMER}${user.profileImage}`,
                    }
                  : {
                      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }
              }
            />
          }
          title={user != null ? user?.nickname : ''}
          subtitle={'Editar Perfil'}
          onPress={() => {
            goBack()
          }}
        />
        <Content>
          <ButtonWithIcon
            title={'Sair da conta'}
            icon={<AntDesign size={20} color={colors.secondary} name="logout" />}
            onPress={() => {
              signOut()
            }}
          />
        </Content>
      </Container>
    </View>
  )
}
