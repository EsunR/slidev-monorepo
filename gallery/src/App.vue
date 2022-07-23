<template>
  <div class="app-container min-h-screen bg-light-600 md:flex">
    <div class="left-container md:w-1/2">
      <Info/>
    </div>
    <div class="right-container md:w-1/2">
      <GalleryList/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Info from "./components/Info.vue";
import GalleryList from "./components/GalleryList.vue";

export default defineComponent({
    name: "App",
    components: { Info, GalleryList },
    setup() {
        return {};
    }
});
</script>
