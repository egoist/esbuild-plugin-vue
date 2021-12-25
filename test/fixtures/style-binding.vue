<script setup lang="ts">
let color = 'red'
</script>

<template>
  <button>click me</button>
</template>

<style scoped>
button {
  color: v-bind(color);
}
</style>
