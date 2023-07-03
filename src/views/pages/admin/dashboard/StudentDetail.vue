<script setup lang="ts">
const route = useRoute()
const user = ref()

user.value = useArrayFind(
              AppStore().allStudent.data,
              user => Object(user).email === route.params.email
            ).value
</script>

<template>
  <div class="p-3">
    <div class="bg-light border shadow p-2 rounded-5">
      <div class="border rounded" v-if="user.appData">
        <table class="table table-borderless table-sm">
          <tbody>
            <tr>
              <th class="fw-bolder">Nama</th>
              <td class="fw-bolder">:</td>
              <td>{{ user.appData.name }}</td>
            </tr>
            <tr>
              <th class="fw-bolder">Nomor Absen</th>
              <td class="fw-bolder">:</td>
              <td>{{ user.appData.ruleNumber }}</td>
            </tr>
            <tr>
              <th class="fw-bolder">Kelas</th>
              <td class="fw-bolder">:</td>
              <td>{{ user.appData.class }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .table {
    width: min-content;
    white-space: nowrap;
  }
</style>
