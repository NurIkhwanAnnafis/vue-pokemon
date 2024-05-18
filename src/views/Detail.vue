<script lang="ts" setup>
import { normalizeTypes } from './configs/utils'
import useDetail from './controllers/useDetail'

const { reset, detail, handleFetchDetail, modal, handleOpen, handleClose, formState, onFinish } =
  useDetail

reset()
handleFetchDetail()
</script>

<template>
  <div style="margin-top: 40px">
    <div v-if="detail">
      <h2>
        <i>{{ detail.name }}</i>
      </h2>
      <div class="box-pokemon">
        <img :src="detail.sprites.front_default" alt="" />
      </div>
      <div class="box-detail-pokemon">
        <h3>Battles</h3>
        <a-row style="height: 72%" :gutter="4" align="middle">
          <a-col :span="8" class="pr-title">
            <div class="box-detail-pokemon-battles title">
              <p style="margin: 0.25rem 0px" class="white">Types</p>
            </div>
          </a-col>
          <a-col :span="16" class="pl-title">
            <div class="box-detail-pokemon-battles desc">
              <p style="margin: 0.25rem 0px" class="white">{{ normalizeTypes(detail.types) }}</p>
            </div>
          </a-col>

          <a-col :span="24">
            <div class="box-detail-pokemon-moves title">
              <p style="margin: 0.25rem 0px">Moves</p>
            </div>
          </a-col>

          <a-col :span="24" style="height: 95%">
            <div class="box-detail-pokemon-moves desc">
              <p
                style="margin: 0.25rem 0px"
                v-for="move in detail.moves"
                v-bind:key="move.move.url"
              >
                {{ move.move.name }}
              </p>
            </div>
          </a-col>
        </a-row>
      </div>
      <a-button type="primary" @click="handleOpen">Try to Catch</a-button>
    </div>
  </div>

  <a-modal :width="320" :open="modal" title="Give The Name" :footer="null" @cancel="handleClose">
    <a-form
      :model="formState"
      name="formPokemon"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 24 }"
      autoComplete="off"
      @finish="onFinish"
    >
      <a-form-item
        label="Nickname"
        name="nickname"
        :rules="[{ required: true, message: 'Please input your nickname!' }]"
      >
        <a-input v-model:value="formState.nickname" />
      </a-form-item>
      <a-form-item style="text-align: center">
        <a-button type="primary" htmlType="submit"> Submit </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped>
@import './Detail/style/index.less';
</style>
