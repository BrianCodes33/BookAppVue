import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Register from "@/components/Register";
import Profile from "@/components/Profile";
import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
