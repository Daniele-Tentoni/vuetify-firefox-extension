const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;

const vt = createVuetify();

console.log("Created vt ", vt);

const app = createApp({
  setup() {
    const message = ref("Hello users!");

    return {
      message,
    };
  },
});
app.use(vt);
app.mount("#app");
