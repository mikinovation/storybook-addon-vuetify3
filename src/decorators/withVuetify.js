import { app } from '@storybook/vue3'
import {defineComponent} from 'vue'
import {makeDecorator} from '@storybook/addons'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const VuetifyPlugin = {
  installed: false,
  install() {
    if (this.installed) return
    this.installed = true

    require('vuetify/dist/vuetify.min.css')
    require('@mdi/font/css/materialdesignicons.min.css')
  }
}

export const withVuetify = makeDecorator({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: (Story, context, {options = { theme: {}}}) => {
    VuetifyPlugin.install()

    app.use(
      createVuetify(
        {
          components,
          directives,
          ...options
        }
      )
    )

    const WrappedComponent = Story(context)

    return defineComponent({
      components: {WrappedComponent},
      template: `
        <v-app :theme="theme">
          <v-container fluid>
            <wrapped-component />
          </v-container>
        </v-app>
      `,
      setup() {
        const theme = context.parameters.globalTypes ? context.parameters.globalTypes.defaultTheme : 'light'

        return { theme }
      }
    })
  }
})
