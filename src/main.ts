import { createApp } from 'vue'
import 'mdb-ui-kit/css/mdb.min.css'
import './assets/styles/Styles.scss'
import 'animate.css'
import BaseVue from '@/App.vue'
import AppRouter from '@/routers/Router'
import { createHead } from "@vueuse/head"
/////
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
/////
import PictureInput from 'vue-picture-input'

const App = createApp(BaseVue);
App.use(AppRouter)
App.use(createHead())
App.component('QuillEditor', QuillEditor)
App.component('PictureInput', PictureInput)
App.mount('body')
