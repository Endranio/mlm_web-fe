// plugins/vue-google-charts.ts

import { GChart } from 'vue-google-charts';

export default defineNuxtPlugin((nuxtApp) => {
  // Mendaftarkan komponen GChart secara global
  nuxtApp.vueApp.component('GChart', GChart);
});