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
    plugins: [
      ['expo-build-properties', { android: { kotlinVersion: '1.6.10' } }],
      ['./app.plugin', { devTeamId: '<APPLE_DEV_TEAM_ID>' }],
    ],
  }
}
