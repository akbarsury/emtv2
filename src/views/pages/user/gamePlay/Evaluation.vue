<template>
    <div>
        <div class="d-flex flex-column gap-4 w-100" v-if="ready">
            <div class="border-bottom border-secondary">
                <h1 class="h4 fw-bolder text-uppercase">evaluasi {{
                    Object(AppStore().appCacheData.pembelajaran.subContent)[`${useRoute().query.evaluation}`].name }}
                </h1>
            </div>
            <div v-if="Object(UserStore().user.appData.evaluation)[`${route.query.evaluation}`]">
                <div class="container">
                    <div class="p-3 bg-success text-light rounded-4">
                        Evaluasi sudah dilaksanakan
                    </div>
                </div>
            </div>
            <div v-if="!Object(UserStore().user.appData.evaluation)[`${route.query.evaluation}`]">
                <div class=""
                    v-for="(question, i) in AppStore().appCacheData[`${useRoute().params.playingContent}`].evaluation[`${useRoute().query.evaluation}`]"
                    :key="i">
                    <div class="container">
                        <div class="d-flex ">
                            <div class="col-auto">
                                <span class="">{{ i + 1 }}.</span>
                            </div>
                            <div class="col text-wrap">
                                <span class="">{{ Object(question).question }}</span>
                            </div>
                        </div>
                        <div class="ps-4">
                            <div class="form-check d-flex" v-for="(option, i) in Object(question).answerOption" :key="i">
                                <div class="col-auto">
                                    <input class="form-check-input" type="radio" :name="Object(question).id"
                                        :id="`${i}${Object(question).id}`" :value="i"
                                        v-model="evaluation[`${route.query.evaluation}`][`${Object(question).id}`]" />
                                </div>
                                <div class="col">
                                    <label class="form-check-label" :for="`${i}${Object(question).id}`"> {{ Object(option)
                                    }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!Object(UserStore().user.appData.evaluation)[`${route.query.evaluation}`]">
                <button v-if="useRoute().params.playingContent === 'pembelajaran' && useRoute().query.evaluation"
                    class="footer-select-content button-style bg-primary text-light px-auto" @click="sendEvaluation()">
                    kirim jawaban
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const ready = ref(false)
const route = useRoute()
const evaluation: { [learningId: string]: { [questionId: string]: string } | {} } = reactive({
})

setTimeout(() => {

    evaluation[`${route.query.evaluation}`] = {}
    setTimeout(() => {
        ready.value = true
    }, 500);
}, 500);


const sendEvaluation = () => {
    const question = Object.keys(AppStore().appCacheData[`${route.params.playingContent}`].evaluation[`${route.query.evaluation}`])
    if (question.length > Object.keys(evaluation[`${route.query.evaluation}`]).length) {
        alert("jawaban harus terisi semua")
    } else {
        UserStore().user.appData.evaluation = {
            ...UserStore().user.appData.evaluation,
            ...evaluation
        }
        setTimeout(() => {
            AppDB.updateUserAppData().then((x: any) => {
                if (x.status === true) {
                    alert("evaluasi terkirim")
                } else {
                    alert("evaluasi gagal terkirim")
                }
            })
        }, 1000);
    }
}

</script>

<style scoped></style>