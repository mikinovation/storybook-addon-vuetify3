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
import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const decorators = [
  withVuetify
]
```

## License

Licensed under the [MIT License](LICENSE).
