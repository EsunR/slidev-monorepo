<template>
  <div class="lazy-load-image box-content relative" :style="{ paddingBottom: imageHeight }">
    <!-- <h1 v-if="loading" class="absolute loading-view">Loading...</h1> -->
    <img v-if="!loading" class="w-full absolute" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs, computed } from "vue";

export default defineComponent({
  name: "LazyLoadImage",
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
    alt: {
      type: String as PropType<string>,
      required: true,
    },
    /**
     * 图片比例 h/w
     */
    ratio: {
      type: Number as PropType<number>,
      default: 9 / 16,
    },
  },
  setup(props) {
    const { src, ratio } = toRefs(props);
    const loading = ref<boolean>(true);

    const imageHeight = computed(() => {
      const numVal = ratio.value * 0.5;
      const percentVal = `${numVal * 100}%`;
      return percentVal;
    });

    function loadImg() {
      const img = new Image();
      img.src = src.value;
      img.onload = () => {
        loading.value = false;
      };
    }

    loadImg();

    return {
      imageHeight,
      loading,
    };
  },
});
</script>

<style lang="scss" scoped>
.lazy-load-image{
  background: linear-gradient(to right, #ececf0 8%, #d3d3d9 18%, #ececf0 33%);
  background-size: 800px 45px;
  animation: shine 2s ease-in-out infinite;
}
.loading-view {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes shine {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}
</style>
