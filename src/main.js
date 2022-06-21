import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueApexCharts from "vue3-apexcharts";

loadFonts();
// eslint-disable-next-line
createApp(App).use(VueApexCharts).use(router).use(store).use(vuetify).mount("#app");
