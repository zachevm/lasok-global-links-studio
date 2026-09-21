import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yh6wh5qj',
    dataset: 'production'
  },
  deployment: {
    appId: 'yj3zlrgqjckhhm88nsk80g0g',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
