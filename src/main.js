import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/font.css";

// SweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Vuetify
import "../node_modules/vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import DayJsAdapter from "@date-io/dayjs";
import th from "date-fns/locale/th";

const vuetify = createVuetify({
  date: {
    adapter: DayJsAdapter,
    locale: { th },
  },
  ssr: false,
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
});

const app = createApp(App);
app.use(VueSweetalert2); // ใช้งาน SweetAlert2
app.use(vuetify); // ใช้งาน Vuetify
app.use(router);
app.mount("#app");
