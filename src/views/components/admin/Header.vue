<template>
  <header class="d-flex justify-content-between align-items-center p-2 px-3">
    <div class="col-auto">
      <div class="d-flex align-items-center gap-2">
        <span class="header-button p-2">
          <i class="fa-solid fa-bars" />
        </span>
        <components-EMTTitle class="s-md" />
      </div>
    </div>
    <div class="col-auto">
      <div class="d-flex align-items-center gap-2">
        <div class="header-button account px-3">
          <div class="me-2 text-capitalize small fw-bolder">
            <span>{{ UserStore().user.appData?.name }}</span>
          </div>
          <i class="fa-solid fa-user" />
        </div>
        <div class="account-menu">
          <button class="text-capitalize small px-3 fw-bolder header-button bg-transparent">
            keluar
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
header {
  background-image: linear-gradient(215deg,
      rgba(#000000, 0.2),
      rgba(#ffffff, 0.1));
  backdrop-filter: blur(5px);
}

.header-button {
  height: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--mdb-primary);
  border-radius: 0.3rem;
  color: var(--mdb-primary);
}
</style>
