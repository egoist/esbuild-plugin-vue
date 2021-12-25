<script setup lang="ts">
console.log('app')

let a: number = 1
</script>

<template>
  <div class="app">app {{ a as unknown as string }}</div>
</template>

<style scoped>
.app {
  color: red;
}
</style>
