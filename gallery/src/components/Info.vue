<template>
  <div class="info__header overflow-hidden">
    <div class="logo-wrapper w-6 h-6 bg-dark-50 p-5 box-content rounded-full m-5">
      <img src="../assets/logo.svg" />
    </div>
  </div>

  <div class="info__body flex min-h-60">
    <div class="left w-1/3 <md:w-5"></div>
    <div class="right w-2/3">
      <h1 class="text-6xl mb-4">Slides.</h1>
      <div class="desc flex">
        <div class="w-5 h-1 bg-dark-50 mr-2 mt-2"></div>
        <TypingContent
          :content-arr="['Share to everyone.', 'Keep calm & make EPIC shit.']"
        />
      </div>
    </div>
  </div>

  <div class="info__footer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TypingContent from "./TypingContent.vue";

export default defineComponent({
  name: "Info",
  components: { TypingContent },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.info {
  &__header {
    height: 20vh;
  }

  &__body {
  }
}
</style>
