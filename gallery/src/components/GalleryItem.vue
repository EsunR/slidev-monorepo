<template>
  <div
    :class="[
      'gallery-item flex items-stretch',
      isEven ? '' : 'flex-row-reverse',
    ]"
  >
    <!-- slide info -->
    <a
      ref="slideInfoDomRef"
      :href="path"
      target="_blank"
      class="block w-1/2 p-3 box-border relative cursor-pointer"
    >
      <!-- info text -->
      <div
        :class="[
          'info-text relative z-10 text-black',
          isEven ? 'text-right' : '',
          slideInfoHovered ? 'text-white' : '',
        ]"
      >
        <div class="text-6xl <md:text-xl opacity-10 font-bold mb-10 <xl:mb-5 <lg:text-4xl <lg:mb-2 <md:mb-0">
          {{ index + 1 }}
        </div>
        <div class="text-2xl <md:text-xl font-bold">{{ name }}</div>
        <div class="opacity-80 <md:text-sm truncate">{{ desc }}</div>
      </div>
      <!-- info text -->

      <!-- info bg -->
      <div
        :class="[
          'info-bg absolute w-full h-full bg-dark-50 top-0 left-0',
          isEven ? 'info-bg__hide-right' : 'info-bg__hide-left',
          slideInfoHovered ? 'info-bg__show' : '',
        ]"
      ></div>
      <!-- info bg -->
    </a>
    <!-- slide info -->

    <!-- slide cover -->
    <LazyLoadImage
      class="w-1/2"
      :src="`/api${GET_COVER_API}/?slide=${name}`"
      :alt="name"
    />
    <!-- slide cover -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  computed,
  ref,
  onMounted,
} from "vue";
import { GET_COVER_API } from "../api/url";
import LazyLoadImage from "./LazyLoadImage.vue";

export default defineComponent({
  name: "GalleryItem",
  components: { LazyLoadImage },
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    desc: {
      type: String as PropType<string>,
      required: true,
    },
    path: {
      type: String as PropType<string>,
      required: true,
    },
    index: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup(props) {
    const { index } = toRefs(props);
    const slideInfoDomRef = ref<HTMLElement | null>(null);
    const slideInfoHovered = ref<boolean>(false);

    const isEven = computed(() => index.value % 2 === 0);

    onMounted(() => {
      slideInfoDomRef.value?.addEventListener("mouseenter", () => {
        slideInfoHovered.value = true;
      });
      slideInfoDomRef.value?.addEventListener("mouseleave", () => {
        slideInfoHovered.value = false;
      });
    });

    return {
      GET_COVER_API,
      isEven,
      slideInfoDomRef,
      slideInfoHovered,
    };
  },
});
</script>

<style lang="scss" scoped>
.info-text {
  transition: all ease 0.3s;
}

.info-bg {
  transition: all ease 0.3s;
  &__hide-left {
    transform: translateX(-101%);
  }
  &__hide-right {
    transform: translateX(101%);
  }
  &__show {
    transform: translateX(0);
  }
}
</style>
