<template>
  >
  <div class="sidesheet">
    <form @submit.prevent="submitEditForm">
      <div class="p-8 flex flex-col gap-6">
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold text-xl text-gray-700 dark:text-gray-200">
              Edit New Product
            </p>
          </div>
          <div class="cursor-pointer" @click="close">
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
              <p class="font-medium dark:text-gray-200">Suitable for vegans</p>
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
        <div class="flex items-center gap-4">
          <div class="flex flex-col gap-1">
            <label class="dark:text-gray-100">Upload Photo</label>
            <input
              type="file"
              required
              id="fileInput"
              accept="image/*"
              @change="handleFileUpload"
            />
          </div>
        </div>

        <button
          class="flex justify-center py-4 rounded-lg w-[100%] bg-black dark:bg-white"
          type="submit"
        >
          <p class="text-white dark:text-black font-medium">Edit Product</p>
        </button>
      </div>
    </form>
  </div>
  >
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { inject, computed } from "vue";
import { watch } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    editMode: Boolean, 
    EditVisble: Boolean,
    product: Object, 
    productIndex: Number, 
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    selectedIndex: {
      type: Number,
      required: true,
    },
  },
 
  
  methods: {
    close() {
      this.$emit("close");
    },
  },

  
  setup(props, { emit }) {
    const EditisSideSheetVisible = inject("EditisSideSheetVisible");
    const EdithideSideSheet = inject("EdithideSideSheet");
    const EditVisble = computed(() => EditisSideSheetVisible.value);

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


    watch(
      () => props.item,
      (newItem) => {
        if (newItem) {
          formData.value = { ...newItem };
        }
      },
      { immediate: true },
    );

    function handleFileUpload(event) {
      formData.value.image = event.target.files[0];
    }

    function submitEditForm() {
      const updatedItem = {
        ...formData.value,
        image: formData.value.image
          ? URL.createObjectURL(formData.value.image)
          : null,
      };
      store.dispatch("editItem", { index: props.index, updatedItem });
      formData.value = {
        name: "",
        ingredients: "",
        hasGluten: false,
        weight: null,
        calorie: null,
        price: null,
        image: null,
      }; // Reset form
      emit("close");
    }
    const close = () => {
      emit("close");
    };
    return {
      EditVisble,
      EdithideSideSheet,
      formData,
      close,
      handleFileUpload,
      submitEditForm,
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
  right: 0;
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
  right: 20%;
  border-radius: 16px;
  height: 100%;
  background-color: #000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1000;
}
</style>
