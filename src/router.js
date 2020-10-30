import Router from 'vue-router'
//import Vue from 'vue'
import Home from './components/Home.vue'
import FileDownload from './components/FileDownload.vue'

//Vue.use(Router);

const router = new Router({
    routes: [
        {path: '/', component: Home, name: 'home'},
        {path: '/download', component: FileDownload, name: 'download'},
    ]
});


export default router;
