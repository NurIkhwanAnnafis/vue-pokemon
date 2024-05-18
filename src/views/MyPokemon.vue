<script setup>
import NoPokemon from './MyPokemon/component/NoPokemon.vue'
import CardPokemon from './MyPokemon/component/CardPokemon.vue'
import useMyPokemon from './controllers/useMyPokemon'
import { normalizeTypes } from './configs/utils'

const { myPokemon, handleGetLisMyPokemon, handleRelease } = useMyPokemon
handleGetLisMyPokemon()
</script>

<template>
  <div class="container-my-pokemon">
    <CardPokemon
      v-for="pokemon in myPokemon"
      v-bind:key="pokemon.id"
      :id="pokemon.id"
      :image="pokemon.sprites.front_default"
      :nickname="pokemon.nickname"
      :name="pokemon.name"
      :types="normalizeTypes(pokemon.types)"
      :handle-release="handleRelease"
    />

    <NoPokemon v-if="myPokemon.length === 0" />
  </div>
</template>

<style lang="less">
@import './MyPokemon/style/index.less';
</style>
