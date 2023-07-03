<script setup lang="ts">
import agencyLogo from "@a/images/icon/agencyLogo.png";
</script>

<template>
  <header class="animate__animated animate__slideInDown">
    <div class="container-fluid on-playing-header pt-3" v-if="useRoute().name === 'play'">
      <div class="d-flex justify-content-between">
        <div class="col-auto">
          <div class="d-flex gap-2">
            <div class="agency-logo col-auto rounded-pill shadow">
              <img class="position-relative" :src="agencyLogo" alt="" />
            </div>
            <div class="app-title col-auto rounded-pill shadow">
              <ComponentsEMTTitle class="s-sm" />
            </div>
          </div>
        </div>
        <div class="col-auto">
          <button class="btn btn-floating bg-warning">
            <i class="fa-sharp fa-2x fa-solid fa-pause"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="container default" v-else>
      <div class="d-flex justify-content-center">
        <div class="agency-logo rounded-9">
          <img class="position-relative" :src="agencyLogo" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  min-height: 3rem;
}

.default {
  .agency-logo {
    padding: 0.3rem;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    position: relative;
    overflow: hidden;
    background-color: rgba(#ffffff, 0.75);
  }

  img {
    height: 3rem;
  }
}

.on-playing-header {

  .agency-logo,
  .app-title {
    background-color: rgba(#ffffff, 0.75);
    padding: 0.2rem 0.5rem !important;
  }

  .agency-logo {
    display: flex;
    align-items: center;

    img {
      height: 2rem;
    }
  }

  .app-title {
    padding-top: 0.3rem !important;
  }
}
</style>
