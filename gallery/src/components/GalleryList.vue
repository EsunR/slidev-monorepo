<template>
  <div class="gallery-list h-screen overflow-y-auto border-l relative">
    <div class="h-screen border-l absolute left-1/2"></div>
    <GalleryItem
      v-for="(item,index) in listData"
      :key="item.name"
      :name="item.name"
      :desc="item.desc"
      :path="item.path"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getSlides } from "../api";
import { SlidesItem } from "../api/types";
import GalleryItem from "./GalleryItem.vue";

export default defineComponent({
  name: "GalleryList",
  components: {
    GalleryItem,
  },
  setup() {
    const listData = ref<SlidesItem[]>([]);

    async function fetchListData() {
      const resData = (await getSlides()).data;
      if (resData instanceof Array) {
        listData.value = resData;
      }
    }

    onMounted(() => {
      fetchListData();
    });

    return {
      listData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
