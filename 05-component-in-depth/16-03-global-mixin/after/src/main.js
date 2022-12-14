import { createApp } from "vue";
import App from "./App.vue";
import PaginationMixin from "./mixins/PaginationMixin";

const app = createApp(App);

app.mixin(PaginationMixin);

app.mixin({
  siteTitle: "ζη Vue εΊη¨",
  computed: {
    siteTitle() {
      return this.$options.siteTitle;
    },
  },
});

app.mount("#app");
