import { createRouter, createWebHashHistory } from "vue-router";

import Consultar from "../pages/Consultar.vue";
import Crear from "../pages/Crear.vue";
import Welcome from "../pages/Welcome.vue";
import NotFoundPage from "../pages/NoFoundPage.vue";

const routes = [
    {
        path: "/crear",
        component: Crear,
    },
    {
        path: "/consultar",
        component: Consultar,
    },
    {
        path: "/",
        component: Welcome,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
      routes,
  });
  export default router;