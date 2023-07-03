<script setup lang="ts">
import adminBackground from "@a/images/background/AdminBackground.png";
const router = useRouter()
const route = useRoute()

onAuthStateChanged(Authentication, (user) => {
  UserStore().userStatus.tryToAuthenticated = true;
  if (user) {
    AppDB.getUserData(user.email, user)
      .then((x: any) => {
        UserStore().user = x

        if (route.matched.find(async (routerList) => { routerList.name === "auth" }) && x.status === "active" && x.isTeacher) {
          router.push({ name: "dashboard" })
          UserStore().userStatus.tryToAuthenticated = false;
        }
        else if (route.matched.find(async (routerList) => { routerList.name === "auth" }) && x.status === "nonactive") {
          router.push({ name: "registration" })
          UserStore().userStatus.tryToAuthenticated = false;
        }
        else {
          UserStore().userStatus.tryToAuthenticated = false;
          AppStore().appData.error.admin.message = "data guru tidak ditemukan"
          AppStore().appData.error.admin.status = true
        }
      })
  } else {
    UserStore().userStatus.tryToAuthenticated = false;
    AppStore().appData.error.admin.message = ""
    AppStore().appData.error.admin.status = false
  }
})
</script>

<template>
  <div class="app" :style="{ backgroundImage: `url(${adminBackground})` }">
    <router-view />
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
</style>
