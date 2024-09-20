<template>
  <div
    class="dark:text-white border-[1px] border-gray-300 py-4 px-6 cursor-pointer content-center rounded-2xl hover:bg-slate-200 transition-all hover:shadow-lg w-[230px] h-[270px]"
    @click="showSideSheet"
  >
    <div class="flex justify-center mt-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M12 6L12 18" stroke="#222222" stroke-linecap="round" />
        <path d="M18 12L6 12" stroke="#222222" stroke-linecap="round" />
      </svg>
    </div>
    <div class="w-[45%] mx-auto">
      <p class="text-center font-semibold text">Add New Product</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  props: {
    showSideSheet: Boolean,
  },
  setup() {
    const showSideSheet = inject("showSideSheet");
    console.log(showSideSheet);

    return { showSideSheet };
  },
});
</script>

<style scoped>
.dark svg > path {
  stroke: #c5c8c4;
  fill: #c5c8c4;
}
.dark svg {
  fill: #c5c8c4;
}
.dark svg > circle {
  fill: #c5c8c4;
}
.dark svg > rect {
  stroke: #c5c8c4;
  fill: #c5c8c4;
}
</style>
