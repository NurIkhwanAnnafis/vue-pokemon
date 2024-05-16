<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Loading from './components/Loading.vue'
import { useLoadingStore } from './stores/layout'

const storeLoading = useLoadingStore()
</script>

<template>
  <Header />
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
