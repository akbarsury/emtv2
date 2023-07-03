<script setup lang="ts">
// import orgazationLogo from "@a/images/LogoInstansi.svg?url";
import coverIlustration from "@a/images/splash/coverIlustration.png";
const router = useRouter();
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    <div class="content-cover d-flex flex-column my-4 gap-4">
      <ComponentsEMTTitle class="animate__animated animate__zoomInUp" />
      <div class="ilustration animate__animated animate__zoomIn d-flex justify-content-center p-0">
        <img class="img-fluid" :src="coverIlustration" alt="E-Modul Terintegrasi SEAFOD - Sex Education For Children" />
        <div class="start-button-container">
          <button @click="router.push({ name: `get-started` })"
            class="button-style bg-primary p-2 px-5 text-light disabled">
            mulai belajar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;

  .ilustration {
    position: relative;
    flex: 1;
    margin-top: -1rem;

    .start-button-container {
      position: absolute;
      bottom: 6rem;
    }
  }

  .conten-cover-footer {
    position: absolute;
    bottom: 10px;
    right: 0;

    .class-module,
    .class-thema-subthema {
      display: inline-flex;
      width: fit-content;
      padding: 0.2rem 1rem;
      font-weight: 700;
      border-radius: 1rem;
      ////
      background-color: rgba(#ffffff, 0.5);
      background-blend-mode: multiply;
    }
  }
}
</style>
