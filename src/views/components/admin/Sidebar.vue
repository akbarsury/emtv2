<template>
  <aside>
    <div class="d-flex flex-column p-2">
      <router-link
        v-for="(menuLink, key) in appStore.appData.menu"
        :key="key"
        :to="{
          name: 'dashboard-manage-content',
          params: {
            selectedContent: `${stringToUrlConverter(
              String(menuLink.name).toLowerCase()
            )}`,
          },
        }"
        class="menu-link p-3 py-1 text-dark text-capitalize rounded"
      >
        {{ menuLink.name }}
      </router-link>
    </div>
    <!-- <div class="p-4" v-else>
      <span class="loader" />
    </div> -->
  </aside>
</template>

<script setup lang="ts">
const appStore = AppStore();
</script>

<style scoped lang="scss">
aside {
  background-image: linear-gradient(
    35deg,
    rgba(#000000, 0.2),
    rgba(#ffffff, 0.1)
  );
  // background-image: linear-gradient(180deg, red, yellow);
  backdrop-filter: blur(5px);
}
.menu-link {
  white-space: nowrap;
  margin-bottom: 1px;
  &:hover,
  &.router-link-active.router-link-exact-active {
    background-color: var(--mdb-primary);
    backdrop-filter: opacity(10%);
    --webkit-backdrop-filter: hue-rotate(180deg);
    color: var(--mdb-light) !important;
  }
}
</style>
