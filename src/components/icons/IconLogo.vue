<script setup>
import { RouterLink } from 'vue-router'
import Logo from '../../assets/images/LogoPokemon.png'
</script>

<template>
  <RouterLink to="/">
    <a-image
      :width="30"
      :src="Logo"
      :previewMask="false"
      :preview="false"
      style="cursor: pointer"
    />
  </RouterLink>
</template>
