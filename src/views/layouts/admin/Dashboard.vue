<template>
  <div class="app-layout adminDashboard" :style="{ display: 'grid' }">
    <components-admin-sidebar class="sidebar" />
    <components-admin-header class="header" />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-layout {
  position: relative;
  width: 100vw;

  &.adminDashboard {
    min-height: 100vh;
    height: auto;
    overflow: auto;
    grid-template-areas:
      "header header"
      "sidebar content";
    grid-template-columns: min-content auto;
    grid-template-rows: min-content auto;

    .header {
      grid-area: header;
      border-bottom: 1.5px solid rgba(#7a7a7a, 0.2);
    }

    .content {
      grid-area: content;
      overflow-y: auto;
      width: 100%;
    }

    .sidebar {
      grid-area: sidebar;
      border-right: 1.5px solid rgba(#7a7a7a, 0.2);
      width: fit-content;
    }
  }
}
</style>
