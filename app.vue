<script setup lang="ts">
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";

const route = useRoute();

const showNavbar = computed(() => route.path !== "/login");
</script>

<template>
  <UApp>
    <Navbar v-if="showNavbar" />
    <div class="w-[90%] m-auto mt-5">
      <NuxtPage />
    </div>
  </UApp>
</template>
