import { ActivityIndicator } from 'react-native'
import theme from '~styles/theme'
interface Props {
  loading: boolean | any
  size?: 'small' | 'large' | number
  children: any
}
export const IfLoaderInsideScreen = ({ children, loading, size }: Props) => {
  return loading ? (
    <ActivityIndicator
      size={size || 20}
      style={{ marginVertical: 10 }}
      color={theme.colors.primary}
    />
  ) : (
    <>{children}</>
  )
}
