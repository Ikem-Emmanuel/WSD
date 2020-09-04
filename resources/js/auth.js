import bearer from "@websanova/vue-auth/drivers/auth/bearer";
import axios from "@websanova/vue-auth/drivers/http/axios.1.x";
import router from "@websanova/vue-auth/drivers/router/vue-router.2.x";
// Auth base configuration some of this options
// can be override in method calls
const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: "WSD",
    tokenStore: ["localStorage"],
    rolesKey: "role", //‘rolesVar’ is used to determine which user model field is used to define the user’s role ||  If you nammed your field differently or use a package to handle roles in Laravel, modify this value consequently. (Note: In the latests version of the package, ‘rolesVar’ should be replaced by ‘rolesKey’)
    // =======================================================================

    // /‘registerData’, ‘loginData’, ‘logoutData’, ‘fetchData’ and ‘refreshData’ are used to define API endpoints that Vue-Auth is gonna use.
    registerData: { url: "auth/register", method: "POST", redirect: "/login" },
    loginData: {
        url: "auth/login",
        method: "POST",
        redirect: "",
        fetchUser: true
    },
    logoutData: {
        url: "auth/logout",
        method: "POST",
        redirect: "/",
        makeRequest: true
    },
    fetchData: { url: "auth/user", method: "GET", enabled: true },
    refreshData: {
        url: "auth/refresh",
        method: "GET",
        enabled: true,
        interval: 30
    }
};
export default config;
