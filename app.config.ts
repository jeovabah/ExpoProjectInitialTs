import { ExpoConfig, ConfigContext } from '@expo/config'

export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  return {
    ...config,
    extra: {
      universalLinks: [],
      eas: {
        projectId: 'c25cd2e2-6391-49e8-9ef2-98ffaee202d6',
      },
    },
  }
}
