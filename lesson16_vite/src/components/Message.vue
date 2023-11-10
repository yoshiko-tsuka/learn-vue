<script setup lang="ts"></script>

<template>
  <div class="box">
    <p>
      <slot></slot>
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
