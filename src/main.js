import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// vue3-particles
import Particles from "vue3-particles";

// Emitter
import mitt from "mitt";
const Emitter = mitt();

// vue-writer
import VueWriter from "vue-writer";

// Aos
import "aos/dist/aos.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("Emitter", Emitter)
  .use(router)
  .use(VueWriter)
  .use(Particles)
  .use(vuetify)
  .mount("#app");
