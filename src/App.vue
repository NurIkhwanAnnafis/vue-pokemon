<script setup>
import { RouterView } from 'vue-router'
import { useLoadingStore } from './stores/layout'

import Loading from './components/Loading.vue'
import Header from './components/Header.vue'

const storeLoading = useLoadingStore()
</script>

<template>
  <Header></Header>
  <div class="wrapper">
    <div v-if="storeLoading.loading">
      <Loading />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
@import './assets/app.css';
</style>
