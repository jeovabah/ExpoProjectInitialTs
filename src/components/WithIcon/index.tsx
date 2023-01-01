import { View, TouchableNativeFeedback } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useTheme } from 'styled-components'
import { Container, Content, IconContent, SubTitle, Title } from './styles'

interface Props {
  icon: any
  title: string
  subtitle?: string
  onPress: () => void
  avatar?: boolean
}

export default function ButtonWithIcon({ icon, title, subtitle, onPress, avatar }: Props) {
  const { colors } = useTheme()
  return (
    <View>
      <TouchableNativeFeedback onPress={onPress}>
        <Container>
          <IconContent avatar={avatar}>{icon}</IconContent>
          <Content>
            <Title>{title}</Title>
            {subtitle ? <SubTitle>{subtitle}</SubTitle> : null}
          </Content>
          <Icon
            name="chevron-right"
            size={13}
            style={{
              position: 'absolute',
              right: 15,
              color: colors.secondary,
            }}
          />
        </Container>
      </TouchableNativeFeedback>
    </View>
  )
}
