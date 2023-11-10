<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="box">
    <p>
      <slot></slot>
      <button type="button" @click="count++">count is {{ count }}</button>
    </p>
  </div>
</template>

<style scoped>
.box {
  background: #e3e3e3;
  padding: 10px;
  border: 1px solid #c5c5c5;
}
</style>
