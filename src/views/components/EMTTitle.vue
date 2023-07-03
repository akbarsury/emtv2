<template>
  <div class="g-title-style text-center">
    <h3>
      E-Modul Terintegrasi
      <slot name="appShortName"> SEAFOD </slot>
    </h3>
    <p>
      (
      <slot name="appName"> Sex Education For Children </slot>
      )
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.g-title-style {
  padding: 0px 0.5rem;
  * {
    margin-bottom: 0.2rem;
  }
  /////
  &.s-md {
    h3 {
      font-size: 16px !important;
    }
    p {
      font-size: 12px;
    }
    * {
      margin-bottom: 0.2rem;
    }
  }
  &.s-sm {
    h3 {
      font-size: 12px !important;
    }
    p {
      font-size: 10px;
    }
    * {
      margin-bottom: 0.1rem;
    }
  }
}
</style>
