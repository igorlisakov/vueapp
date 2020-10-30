import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import FileDownload from "@/views/FileDownload.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/download",
        name: "FileDownload",
        component: FileDownload,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
