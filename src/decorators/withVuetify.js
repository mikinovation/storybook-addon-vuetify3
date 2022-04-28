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
  wrapper: (Story, context, {options = {}}) => {
    VuetifyPlugin.install()

    app.use(
      createVuetify(
        {
          components,
          directives
        }
      )
    )

    const WrappedComponent = Story(context)

    return defineComponent({
      components: {WrappedComponent},
      template: `
        <v-app>
          <v-container fluid>
            <wrapped-component/>
          </v-container>
        </v-app>
      `
    })
  }
})
