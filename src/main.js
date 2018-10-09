// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Nav from "@/components/Nav";
import router from "./router";
import VueResource from "vue-resource";
import firebase from "firebase";

Vue.use(VueResource);

Vue.config.productionTip = false;

let app;
var config = {
  apiKey: "AIzaSyBhZPM23j7e-g3pqqrdnWSwry3zbzi4B5M",
  authDomain: "book-trader-96e8a.firebaseapp.com",
  databaseURL: "https://book-trader-96e8a.firebaseio.com",
  projectId: "book-trader-96e8a",
  storageBucket: "book-trader-96e8a.appspot.com",
  messagingSenderId: "86494859544"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      components: { App, Nav },
      template: "<App/>"
    });
  }
});
