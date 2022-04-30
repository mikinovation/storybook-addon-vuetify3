# storybook-addon-vuetify3

**Install**

```sh
yarn add -D storybook-addon-vuetify3
```

**Usage**

Add `storybook-addon-vuetify3` addon to `.storybook/main.js`

```js
module.exports = {
  addons: [
    'storybook-addon-vuetify3'
  ]
}
```

Add `vueitfy` decorator to `.storybook/preview.js`

```js
import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'

export const decorators = [
  withVuetify
]
```

You can add withThemeProvider to use vuetify theme settings. But make sure to add globalTypes as shown.

/src/plugins/vuetify.js

```js
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#123456',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    }
  }
)
```

.storybook/preview.js

```js
import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'
import { myCustomLightTheme } from "../src/plugins/vuetify";

export const globalTypes = {
  vuetify: {
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  }
}

export const decorators = [
  withVuetify
]

```

## License

Licensed under the [MIT License](LICENSE).
