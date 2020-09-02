//This file is used to define the differents routes of the application, and which components are used for each one of them. The ‘meta’ parameter is used to define the access rules for each route.
// - ‘auth:undefined’ will be used for public routes;
// - ‘auth:true’ will be used for routes only accessible for connected users;
// - ‘auth:false’ will be used for routes only accessible for unconnected users;
// - ‘auth: {roles: 2, …}’ will be used for routes only accessible for an administrator. In this object, we can provide redirection rules if the user is not    conected or if he has’nt the rights to access.

import VueRouter from "vue-router";
// Pages
import Home from "./components/Home.vue";
import Register from "./pages/auth/Login.vue";
import Login from "./pages/auth/Login.vue";
import Dashboard from "./pages/user/user/Dashboard.vue";
import AdminDashboard from "./pages/user/admin/Dashboard.vue";
// Routes
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            auth: undefined
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    // ADMIN ROUTES
    {
        path: "/admin",
        name: "admin.dashboard",
        component: AdminDashboard,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    }
];
const router = new VueRouter({
    history: true,
    mode: "history",
    routes
});
export default router;
