<script setup lang="ts">
import mainLayoutBackground from "@a/images/background/Splash.png";
import AppBackgroundPattern from "@a/images/background/AppBackgroundPattern.png";
const appLayoutWrapperRef = ref(null);
const appRef = ref(null);
const { width: appLayoutWrapperWidth } =
  useElementSize(appLayoutWrapperRef);
const { width: appWidth } = useElementSize(appRef);
</script>

<template>
  <div class="app" ref="appRef" :style="{ backgroundImage: `url(${AppBackgroundPattern})` }">
    <div class="container position-relative p-0">
      <div :class="[
          `app-layout-wrapper shadow-5-strong`,
          appLayoutWrapperWidth !== appWidth ? `rounded-9` : ``,
        ]" ref="appLayoutWrapperRef" :style="{
      backgroundImage: `url(${mainLayoutBackground})`,
      backdropFilter: 'opacity(50%)',
      backgroundBlendMode: 'multiply',
    }">
        <div class="app-layout d-flex flex-column gap-2">
          <div class="d-flex justify-content-center">
            <div class="col-12 col-sm-11 col-md-6 col-lg-5">
              <ComponentsUserHeader class="col-auto" />
            </div>
          </div>
          <main class="col">
            <div class="d-flex justify-content-center h-100 px-3">
              <div class="content col-12 col-sm-11 col-md-6 col-lg-5">
                <router-view />
              </div>
            </div>
          </main>
          <div class="d-flex justify-content-center">
            <div class="col-12 col-sm-11 col-md-6 col-lg-5">
              <ComponentsUserFooter class="col-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;

  &::before {
    content: "";
    @extend .app;
    position: absolute;
    background-color: rgba(#ffffff, 0.5);
    backdrop-filter: blur(1px);
  }
}

.app-layout-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;

  .app-layout {
    width: 100%;
  }
}

main {
  overflow: hidden;
  overflow-y: auto;

  .content {
    position: relative;
    z-index: 100;
  }
}
</style>
