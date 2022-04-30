import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'
import {myCustomLightTheme} from "@/plugins/vuetify";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: myCustomLightTheme
}

export const decorators = [
  withVuetify
]
