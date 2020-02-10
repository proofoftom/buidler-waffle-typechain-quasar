<template>
  <q-page class="flex flex-center column">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <div class="q-pa-md text-h6">Count: {{ $store.state.counter.count.toString() }}</div>
    <div class="row q-gutter-md">
      <q-btn @click="decrement">Decrement</q-btn>
      <q-btn @click="increment">Increment</q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageIndex',
  created() {
    this.$store.dispatch('counter/init');
  },
  methods: {
    decrement() {
      this.$store.dispatch('counter/decrement');
    },
    increment() {
      this.$store.dispatch('counter/increment');
    }
  },
})
</script>
