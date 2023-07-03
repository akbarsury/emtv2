<template>
  <div class="splash">
    <div class="d-flex flex-column">
      <transition name="fade">
        <img class="img-fluid" src="@a/images/splash/loka.dev-light.png" alt="" v-if="splashLogo === 'loka'" />
      </transition>
      <transition name="fade">
        <div class="d-flex flex-column gap-2 text-center" v-if="splashLogo === 'appLogo'">
          <img class="img-fluid" src="@a/images/splash/emt.png" alt="" />
          <components-loader class="h1" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import appStore from "@/stores/AppStore";

const splashLogo = ref("loka");

setTimeout(() => {
  splashLogo.value = "";
  setTimeout(() => {
    splashLogo.value = "appLogo";
    setTimeout(() => {
      appStore().splashScreenStatus.value = false;
    }, 3000);
  }, 1000);
}, 3000);
</script>

<style scoped lang="scss">
.splash {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  &>div {
    height: 100px;
    width: 100px;
  }
}
</style>
