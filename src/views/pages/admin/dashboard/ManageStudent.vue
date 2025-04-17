<template>
  <div class="d-flex">
    <div class="col-12 table-wrapper">
      <table
        class="student-table table table-bordered table-hover table-sm border-secondary rounded-5"
      >
        <thead>
          <tr class="table-primary text-center text-capitalize text-nowrap">
            <th class="fw-bolder" scope="col">Nomor</th>
            <th class="fw-bolder" scope="col">email</th>
            <th class="fw-bolder" scope="col">nama</th>
            <th class="fw-bolder" scope="col">kelas</th>
            <th class="fw-bolder" scope="col">no. Absen</th>
            <th class="fw-bolder" scope="col">nilai evaluasi akhir</th>
            <th class="fw-bolder" scope="col">status</th>
          </tr>
        </thead>
        <tbody v-if="appStore.allStudent.isGettingData">
          <tr>
            <td
              class="text-center text-danger fw-bolder"
              scope="row"
              colspan="5"
            >
              <div class="d-flex justify-content-center align-items-center">
                <div class="col-auto">Mengambil data siswa</div>
                <div class="col-auto">
                  <components-loader />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody
          v-if="
            !appStore.allStudent.isGettingData &&
            appStore.allStudent.data.length !== 0
          "
        >
          <tr
            class="text-lowercase text-nowrap"
            v-for="(student, index) in appStore.allStudent.data"
            :key="index"
          >
            <th class="text-center" scope="row">{{ Number(index) + 1 }}</th>
            <td>
              <!-- <router-link :to="{name: 'student-detail', params: { email: Object(student).email}}"> -->
              {{ Object(student).email }}
              <!-- </router-link> -->
            </td>
            <td class="w-100">{{ Object(student).appData.name }}</td>
            <td class="text-center">{{ Object(student).appData.class }}</td>
            <td class="text-center">
              {{ Object(student).appData.ruleNumber }}
            </td>
            <td class="text-center">
              <span v-if="Object(student).appData?.finalEvaluation">
                {{
                  markFinalEvaluation(Object(student).appData?.finalEvaluation)
                }}
              </span>
              <span class="text-danger" v-else>
                evaluasi belum dilaksanakan
              </span>
            </td>
            <td>
              <div class="container">
                <div class="d-flex align-items-center gap-3">
                  <span
                    :class="[
                      'col-auto fw-bolder p-0',
                      Object(student).status === 'nonactive'
                        ? 'text-danger'
                        : 'text-success',
                    ]"
                  >
                    {{ Object(student).status }}
                  </span>
                  <!-- <button class="col-auto button-style small bg-success text-light" style="width: fit-content"
                    v-if="Object(student).status === 'nonactive'">
                    aktivasi sekarang
                  </button>
                  <button class="col-auto button-style small bg-danger text-light" style="width: fit-content" v-else>
                    hapus
                  </button> -->
                </div>
              </div>
            </td>
          </tr>
          <tr
            v-if="
              !appStore.allStudent.isGettingData &&
              appStore.allStudent.data.length === 0
            "
          >
            <td
              class="text-center text-danger fw-bolder"
              scope="row"
              colspan="6"
            >
              <div class="container">
                <div class="d-flex">
                  <div class="col">Tidak ada data siswa</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const appStore = AppStore();

if (appStore.allStudent.lastGettingData === 0 && appStore.appData.appRef) {
  AppDB.getAllStudentData();
}

const markFinalEvaluation = (studentResult) => {
  const value = ref(0);
  let answerKeys = {};
  appStore.appCacheData[`evaluasi akhir`].data.forEach(
    (x, i) => (answerKeys[`${x.id}`] = x.trueAnswer)
  );
  Object.keys(studentResult).forEach((id) => {
    studentResult[`${id}`] === answerKeys[`${id}`] ? value.value++ : false;
  });
  return (value.value / Object.keys(answerKeys).length) * 100;
};
</script>

<style scoped lang="scss">
.table-wrapper {
  overflow: auto;
}
</style>
