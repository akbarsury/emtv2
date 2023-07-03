<template>
  <div class="loader">
    <span>
      <i class="fa-solid fa-spinner" />
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
//// Loader
.loader > span > i {
  content: "spinner#";
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 100;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(200deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
