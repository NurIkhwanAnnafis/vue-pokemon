<script setup>
import Loading from '../assets/images/loading.gif'
</script>

<template>
  <div class="container-loading">
    <div class="loading">
      <a-image
        :width="40"
        :src="Loading"
        :previewMask="false"
        :preview="false"
        style="cursor: pointer"
      />
    </div>
  </div>
</template>

<style scoped>
.container-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loading {
  padding: 20% 0;
  position: fixed;
  top: 54px;
  z-index: 1010;
  width: 425px;
  height: 100%;
  background-color: #0000005e;
}
</style>
