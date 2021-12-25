<template>
  <div>{{ count }}</div>
  <h1>hi</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const start: number = 1
const count = ref(start)
</script>

<script lang="ts">
export const foo = 'foo'
</script>

<style scoped>
div {
  color: red;
}
</style>

<style scoped lang="stylus">
div
    font-size: 1em
</style>
