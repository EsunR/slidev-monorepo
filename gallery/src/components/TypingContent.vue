<template>
  <ul ref="typingDom" class="typing-content"></ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRefs } from "vue";
import { wait } from "../utils";

export default defineComponent({
  name: "TypingContent",
  props: {
    contentArr: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const { contentArr } = toRefs(props);
    const typingDom = ref<HTMLElement>();

    async function pushTextToDomCharByChar(str: string, dom: HTMLElement) {
      let currentText = "";
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        await wait(100);
        currentText += char;
        dom.innerText = currentText;
      }
    }

    async function startTyping() {
      if (!typingDom.value) {
        return;
      }
      for (let i = 0; i < contentArr.value.length; i++) {
        const liDom = document.createElement("li");
        typingDom.value.appendChild(liDom);
        const str = contentArr.value[i];
        await pushTextToDomCharByChar(str, liDom);
      }
    }

    onMounted(() => {
      startTyping();
    });

    return {
      typingDom,
    };
  },
});
</script>

<style lang="stylus" scoped></style>
