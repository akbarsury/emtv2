<script setup lang="ts">
const userStore = UserStore();
const appStore = AppStore();
</script>

<template>
  <div class="login d-flex justify-content-center align-items-center h-100">
    <div class="col-12 col-sm-11 col-md-6 col-lg-5">
      <div class="container p-5 rounded-9 shadow">
        <div class="login-header">
          <h1 class="h2 title-style text-uppercase fw-bolder text-center">
            Login
          </h1>
          <ComponentsEMTTitle class="mb-4" />
        </div>
        <div>
          <div class="d-flex flex-column gap-3">
            <!-- <div class="g-input-group shadow">
                <label for="nomor-absen">email</label>
                <input
                class="text-upppercase input-style"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                v-model="globalStore().adminData.initial.email"
                />
            </div>
            <div class="g-input-group shadow">
                <label for="kelas">kata sandi</label>
                <input
                class="text-upppercase input-style"
                type="password"
                name="kata-sandi"
                id="kata-sandi"
                placeholder="kata sandi"
                v-model="globalStore().adminData.initial.password"
                />
            </div>
            <button
                class="button-style bg-primary text-white shadow"
                @click="tryToAuthentication()"
                :disabled="globalStore().appData.gettingAccountCredential"
            >
                <span>
                login
                <span
                    v-if="globalStore().appData.gettingAccountCredential"
                    class="loader"
                />
                </span>
            </button> -->
            <button
              class="button-style bg-danger text-white fw-bolder shadow p-2"
              @click="appStore.tryToLogin()"
              :disabled="userStore.userStatus.tryToAuthenticated"
            >
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <i class="fa-brands fa-google fs-2" />
                <span> Masuk dengan Google </span>
                <ComponentsLoader
                  v-if="userStore.userStatus.tryToAuthenticated"
                />
              </div>
            </button>
            <div
              :class="[
                `p-1 px-3 rounded text-light text-center bg-warning border border-dark border-2`,
              ]"
              v-if="appStore.appData.error.admin.status"
            >
              {{ appStore.appData.error.admin.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: max-content;
  width: 100%;

  .container {
    position: relative;
    // background-color: rgba(#39b6bb, 0.35);
    background-color: rgba(#ffffff, 0.5);
    overflow: hidden;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0px;
      right: 0px;
      background-image: url("@a/images/background/SchoolOnTown.png");
      background-position: bottom;
      background-size: cover;
      opacity: 50%;
      z-index: -1;
    }

    // & > * {
    //   z-index: 100;
    // }
  }
}
</style>
