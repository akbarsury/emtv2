<script setup lang="ts">
const router = useRouter();

const userStore = UserStore();
const appStore = AppStore();

onAuthStateChanged(Authentication, (user) => {
  userStore.userStatus.tryToAuthenticated = true;
  setTimeout(() => {
    if (user) {
      AppDB.getUserData(user.email, user).then((x: any) => {
        userStore.user = x;

        if (x.status === "active") {
          router.push({ name: "menu" }),
            (userStore.userStatus.tryToAuthenticated = false);
        } else if (x.status === "nonactive") {
          userStore.userStatus.tryToAuthenticated = false;
        } else {
          userStore.userStatus.tryToAuthenticated = false;
          appStore.appData.error.admin.message = "data guru tidak ditemukan";
          appStore.appData.error.admin.status = true;
        }
      });
    } else {
      signOut(Authentication).then(() => {
        userStore.user.id = null;
        userStore.userStatus.tryToAuthenticated = false;
        appStore.appData.error.admin.message = "";
        appStore.appData.error.admin.status = false;
      });
    }
  }, 3000);
});

///////
const userSignOut = () => {
  // appAuth.userTryToSignOut().then((x: any) => {
  //   x ? alert("berhasil keluar") : true;
  // });
};
</script>

<template>
  <div>
    <div class="content d-flex flex-column my-4 gap-4">
      <ComponentsEMTTitle class="animate__animated animate__zoomInUp" />
      <div
        class="registrasi animate__animated animate__fadeInUpBig shadow rounded-9 p-4"
      >
        <div
          class="animate__animated animate__zoomIn"
          v-if="userStore.user.id === null"
        >
          <div class="registrasi-header">
            <h1
              class="h5 title-style text-uppercase fw-bolder text-center mb-3"
            >
              masuk
            </h1>
          </div>
          <div>
            <button
              class="button-style bg-primary text-light p-3 rounded"
              @click="appStore.tryToLogin()"
            >
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <div class="col-auto">
                  <i class="fa-brands fa-google fa-2x"></i>
                </div>
                <div class="col-auto">
                  <span class="p text-uppercase fw-bolder"
                    >Masuk dengan Google</span
                  >
                </div>
                <div class="col-auto">
                  <ComponentsLoader
                    v-if="userStore.userStatus.tryToAuthenticated"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div
          class="animate__animated animate__zoomIn"
          v-else-if="
            userStore.user.id !== null && userStore.user.status === 'active'
          "
        >
          <div class="registrasi-header">
            <h1
              class="h5 title-style text-uppercase fw-bolder text-center mb-3"
            >
              masuk
            </h1>
          </div>
          <div
            class="p text-center bg-success text-light text-uppercase p-3 rounded"
          >
            data siswa teridentifikasi, harap menunggu
            <span v-if="true" class="loader" />
          </div>
        </div>
        <div class="animate__animated animate__zoomIn" v-else-if="false">
          <div class="registrasi-header">
            <h1
              class="h5 title-style text-uppercase fw-bolder text-center mb-3"
            >
              masuk
            </h1>
          </div>

          <div
            class="p text-center bg-danger text-light text-uppercase p-3 mb-3 rounded"
          >
            akun belum diaktivasi oleh guru
          </div>
          <button
            class="button-style bg-warning mb-3 text-white"
            :disabled="true"
          >
            <span> kembali </span>
          </button>
          <button
            class="button-style bg-danger text-white"
            :disabled="true"
            @click="userSignOut()"
          >
            <span> keluar </span>
          </button>
        </div>
        <div
          class="animate__animated animate__zoomIn"
          v-if="
            userStore.user.id !== null && userStore.user.status === 'nonactive'
          "
        >
          <div class="registrasi-header">
            <h1
              class="h5 title-style text-uppercase fw-bolder text-center mb-3"
            >
              data diri siswa
            </h1>
          </div>
          <div class="d-flex flex-column gap-3">
            <div class="g-input-group">
              <label for="nama-lengkap">nama lengkap</label>
              <input
                class="text-upppercase input-style"
                type="text"
                name="nama-lengkap"
                id="nama-lengkap"
                placeholder="nama lengkap"
                v-model="userStore.user.appData.name"
              />
            </div>
            <div class="g-input-group">
              <label for="nomor-absen">nomor absen</label>
              <input
                class="text-upppercase input-style"
                type="number"
                name="nomor-absen"
                id="nomor-absen"
                placeholder="nomor absen"
                v-model="userStore.user.appData.ruleNumber"
              />
            </div>
            <div class="g-input-group">
              <label for="kelas">kelas</label>
              <input
                class="text-upppercase input-style"
                type="text"
                name="kelas"
                id="kelas"
                placeholder="kelas"
                v-model="userStore.user.appData.class"
              />
            </div>

            <button
              class="button-style bg-primary text-white"
              @click="userStore.registerUser()"
            >
              <span>
                ajukan akses
                <ComponentsLoader
                  class="d-inline"
                  v-if="userStore.userStatus.tryToAuthenticated"
                />
              </span>
            </button>
            <button
              class="button-style bg-warning text-white"
              @click="router.back()"
            >
              kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: max-content;
  width: 100%;

  .registrasi {
    // flex: 1;
    background-color: rgba(#ffffff, 0.75);
    align-items: stretch;
  }
}
</style>
