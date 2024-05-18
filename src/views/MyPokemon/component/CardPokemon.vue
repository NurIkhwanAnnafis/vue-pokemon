<script lang="ts" setup>
defineProps({
  id: String,
  image: String,
  nickname: String,
  name: String,
  types: String,
  handleRelease: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="card-my-pokemon">
    <a-row>
      <a-col :span="8" class="pr-my-pokemon-image">
        <div class="box-my-pokemon">
          <img :src="image" alt="" />
        </div>
      </a-col>
      <a-col :span="16" class="pl-my-pokemon-desc">
        <div class="box-my-desc-pokemon">
          <a-row align="center" style="text-align: start">
            <a-col :span="8">
              <a-typography-text type="secondary">Nickname</a-typography-text>
            </a-col>
            <a-col :span="16">
              <a-typography-title :level="5">: {{ nickname }}</a-typography-title>
            </a-col>

            <a-col :span="8">
              <a-typography-text type="secondary">Name</a-typography-text>
            </a-col>
            <a-col :span="16">
              <a-typography-title :level="5">: {{ name }}</a-typography-title>
            </a-col>

            <a-col :span="8">
              <a-typography-text type="secondary">types</a-typography-text>
            </a-col>
            <a-col :span="16">
              <a-typography-title :level="5">: {{ types }}</a-typography-title>
            </a-col>
          </a-row>
          <div style="text-align: end; margin-right: 0.5rem; margin-top: 0.2rem">
            <a-button
              type="primary"
              size="small"
              danger
              @click="() => handleRelease(name, nickname)"
            >
              Release
            </a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
