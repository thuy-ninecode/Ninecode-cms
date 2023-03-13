import Home from "@pages/Home";
import Login from "@pages/Login";
import AppLayout from "@layouts/AppLayout";
import EmptyLayout from "@layouts/EmptyLayout";

const ROUTES = [
    {
        label: "Home",
        path: "/",
        exact: true,
        isPrivate: false,
        authenticatedRedirect: false,
        component: Home,
        layout: AppLayout,
    },
    {
        label: "Login",
        path: "/login",
        exact: true,
        isPrivate: false,
        authenticatedRedirect: true,
        component: Login,
        layout: EmptyLayout,
    },
];

export default ROUTES;
