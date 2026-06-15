import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../View/Home/Home.vue";

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    }
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route