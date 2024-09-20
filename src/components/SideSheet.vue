<!-- src/components/SideSheet.vue -->
<template>
  <transition name="slide"
    ><div :class="['sidesheet', { 'sidesheet--visible': isVisible }]">
      <form @submit.prevent="submitForm">
        <div class="p-8 flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold text-xl text-gray-700 dark:text-gray-200">
                Add New Product
              </p>
            </div>
            <div class="cursor-pointer" @click="hideSideSheet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#222222"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#222222"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p
                class="font-medium text-gray-600 dark:text-gray-100 focus:outline-none"
              >
                Name of the product
              </p>
            </div>
            <input
              v-model="formData.name"
              class="border-[1px] rounded-lg py-3 border-gray-200 px-3"
              type="text"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p
                class="font-medium text-gray-600 dark:text-gray-200 focus:outline-none"
              >
                ingredients
              </p>
            </div>
            <input
              v-model="formData.ingredients"
              class="border-[1px] rounded-lg py-3 border-gray-200 px-3"
              type="text"
              required
            />
            <div class="mt-1 flex items-center gap-3">
              <input
                v-model="formData.hasGluten"
                class="w-9 h-8 border-gray-200 ring-gray-200 px-3"
                type="checkbox"
              />
              <div>
                <img class="w-8 h-8" src="../assets/vegan.png" alt="" />
              </div>
              <div>
                <p class="font-medium dark:text-gray-200">
                  Suitable for vegans
                </p>
              </div>
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="flex flex-col gap-2">
              <div><p class="dark:text-gray-200">Weight in grams</p></div>
              <input
                v-model="formData.weight"
                class="border-[1px] rounded-lg py-3 border-gray-200 w-[95%] px-3"
                type="number"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <div><p class="dark:text-gray-200">claori in grams</p></div>
              <input
                v-model="formData.calorie"
                class="border-[1px] rounded-lg py-3 border-gray-200 w-[95%] px-3"
                type="number"
                required
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p
                class="font-medium text-gray-600 focus:outline-none dark:text-gray-200"
              >
                Price of the product
              </p>
            </div>
            <input
              v-model="formData.price"
              class="border-[1px] rounded-lg py-3 border-gray-200 px-3"
              type="number"
              required
            />
          </div>
          <div>
            <div class="flex gap-6 justify-center">
              <div><p class=" font-semibold">Upload photo</p></div>
              <label for="fileInput" class="upload-button"
                >Choose Photo...</label
              >
              
              <input
                type="file"
                required
                id="fileInput"
                accept="image/*"
                @change="handleFileChange"
                style="display: none"
              />
            </div>

            <div v-if="file" class="progress-container">
              <div
                :style="{ width: uploadProgress + '%' }"
                class="progress-bar"
              ></div>
            </div>
          </div>
          <button
            @click="hideSideSheet"
            class="flex justify-center items-center gap-3 py-4 rounded-lg w-[100%] bg-black dark:bg-white"
            type="submit"
          >
          <div class=" flex "><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<title/>

<g id="Complete">

<g id="download">

<g>

<path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

<g>

<polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

<line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2"/>

</g>

</g>

</g>

</g>

</svg></div>
          
            <p
              class="text-white font-medium whitespace-nowrap dark:text-gray-900"
            >
              Add product to the menu
            </p>
          </button>
        </div>
      </form>
    </div></transition
  >
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { inject, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    editMode: Boolean, 
    isVisible: {
      type: Boolean,
      required: true,
    },
    product: Object, 
    productIndex: Number, 
  },
 
  methods: {},
  setup() {
    const store = useStore();
    const formData = ref({
      name: "",
      ingredients: "",
      hasGluten: false,
      weight: null,
      calorie: null,
      price: null,
      image: null,
    });
    function handleFileChange(event) {
      formData.value.image = event.target.files[0];
    }

    function submitForm() {
      const item = {
        ...formData.value,
        image: formData.value.image
          ? URL.createObjectURL(formData.value.image)
          : null,
      };
      store.dispatch("addItem", item);
      formData.value = {
        name: "",
        ingredients: "",
        hasGluten: false,
        weight: null,
        calorie: null,
        price: null,
        image: null,
      }; 
    }
    const isSideSheetVisible = inject("isSideSheetVisible");
    const hideSideSheet = inject("hideSideSheet");

    const isVisible = computed(() => isSideSheetVisible.value);

    return {
      isVisible,
      hideSideSheet,
      formData,
      handleFileChange,
      submitForm,
    };
  },
});
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sidesheet {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1000;
}
.dark .sidesheet {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: #000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1000;
}

.sidesheet--visible {
  z-index: 1000;
  right: 0; /* Slide-in to the right */
}
.dark .sidesheet--visible {
  z-index: 1000;
  right: 0; /* Slide-in to the right */
}

.sidesheet-content {
  padding: 20px;
}

.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.upload-button {
  background-color: #eaebec;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
}

.progress-container {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 5px;
  background-color: #007bff;
  border-radius: 5px;
  transition: width 0.2s;
}

.file-info {
  margin-top: 10px;
}
</style>
