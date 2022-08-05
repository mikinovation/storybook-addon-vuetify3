<template>
  <v-btn color="primary" @click="onClick">
    <slot></slot>
  </v-btn>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'my-button',
  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
