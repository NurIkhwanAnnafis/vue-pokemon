<script setup>
import IconLogo from './icons/IconLogo.vue'
</script>

<template>
  <div class="header">
    <IconLogo />
    <RouterLink to="/my-pokemon">
      <h2>My Pokemon</h2>
    </RouterLink>
  </div>
</template>

<style scoped>
.header {
  height: 54px;
  top: 0;
  position: fixed;
  z-index: 1009;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #000;
  max-width: 425px;
}

a:hover {
  background-color: transparent;
}

h2 {
  text-decoration: underline;
  color: #fff;
  font-weight: 600;
}
</style>
