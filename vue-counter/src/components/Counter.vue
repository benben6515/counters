<script setup>
import { useCounter } from '../composition/useCounter'

const { msg } = defineProps()

const {
  globalCount,
  addGlobalCount,
  localCount,
  addLocalCount,
} = useCounter()
</script>

<template>
  <div class="card">
    <button type="button" @click="addLocalCount">{{ msg }} count is: {{ localCount }}</button>
    <button type="button" @click="addGlobalCount">global count is: {{ globalCount }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
