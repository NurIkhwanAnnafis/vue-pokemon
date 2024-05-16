<script lang="ts" setup>
import useDetail from './controllers/useDetail'

const { reset, detail, handleFetchDetail } = useDetail

reset()
handleFetchDetail()
</script>

<template>
  <div style="margin-top: 40px">
    <div v-if="detail">
      <h2><i>pokemon name</i></h2>
      <div class="box-pokemon">
        <img :src="detail.sprites.front_default" alt="" />
      </div>
      <div class="box-detail-pokemon">
        <h3>Battles</h3>
      </div>
      <a-button type="primary">Try to Catch</a-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './Detail/style/index.less';
</style>
