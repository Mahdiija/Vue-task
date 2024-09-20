<script>
import { defineComponent, ref } from "vue";
import Burger from "../assets/Burger.png";
import Tea from "../assets/Tea.png";
import Drink from "../assets/Drink.png";
import Ice from "../assets/Ice.png";
import Cards from "../components/Cards.vue";
export default defineComponent({
  name: "Products",
  components: {
    Cards,
  },

  data() {
    return {
      activeTab: 0,
      searchTerm: "", 
      items: [], 
      filteredProducts: [], 
      showModal: false, 
      selectedProduct: null,
      tabs: [
        {
          logo: Burger,
          name: "Main Courses",
          content: "Here is the content for Main Courses.",
        },
        {
          logo: Tea,
          name: "Side Dishes",
          content: "Here is the content for Side Dishes.",
        },
        {
          logo: Drink,
          name: "Drinks",
          content: "Here is the content for Drinks.",
        },
        {
          logo: Ice,
          name: "Others",
          content: "Here is the content for Others.",
        },
      ],
    };
  },

  mounted() {
    this.loadItems(); 
  },
  methods: {
    editItem(index) {
      this.$refs.sideSheet.openForEditing(index);
    },

    loadItems() {
      const storedItems = localStorage.getItem("items"); 
      if (storedItems) {
        this.items = JSON.parse(storedItems); 
      }
    },
    filterProducts() {
      if (!this.searchTerm.trim()) {
        this.filteredProducts = [];
        this.showModal = false; 
        return;
      }

     
      this.filteredProducts = this.items.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    },
    showProductDetails(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  setup() {
    const isSidebarActive = ref(false);

    const openSidebar = () => {
      isSidebarActive.value = true;
    };

    const closeSidebar = () => {
      isSidebarActive.value = false;
    };

    return {
      isSidebarActive,
      openSidebar,
      closeSidebar,
    };
  },
});
</script>

<template>
  <div class="pt-8 pl-6">
    <div>
      <div
        class="flex items-center border-b-[1px] border-gray-300 gap-2 pb-1 w-[650px]"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2" />
            <path
              d="M20 20L17 17"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <input
          class="w-full bg-inherit focus:outline-none"
          @input="filterProducts"
          v-model="searchTerm"
          placeholder="Search products..."
          type="text"
        />
        <button
          class="font-semibold text-gray-700 dark:text-gray-200"
          type="submit"
        >
          Search
        </button>
      </div>
      <div
        class="flex flex-col gap-2 mt-3 transition-all absolute w-[80%] z-30"
        v-if="filteredProducts.length"
      >
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          @click="showProductDetails(product)"
          class="bg-gray-400 rounded-xl cursor-pointer py-4 w-[30%]"
        >
          <div class="flex items-center gap-3 py-4">
            <div class="flex rounded-full bg-white w-3 h-3 ml-4"></div>
            <div class="text-lg font-bold text-white px-1">
              {{ product.name }}
            </div>
          </div>
          <div class="w-[90%] h-[1px] bg-white mx-auto"></div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="sidesheet">
      <div class="flex flex-col gap-2">
        <div class="flex justify-end" @click="closeModal"><svg class=" cursor-pointer" fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490 490" xml:space="preserve">
<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "/>
</svg></div>
<div class=" flex justify-center"><img class="h-[150px] w-[150px] object-cover" :src="selectedProduct.image" alt="" /></div>
        
        
          <div class=" flex flex-col  gap-2"><p class="text-lg">Name:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedProduct.name }}</p>
          </div></div>
            
          <div class=" flex flex-col  gap-2"><p class="text-lg">Ingredients:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full overflow-hidden">
            <p class="font-bold">{{ selectedProduct.ingredients }}</p>
          </div></div>
        
        <div class=" flex items-center   gap-3 w-full"> <div class=" flex flex-col  gap-2 w-full"><p class="text-lg">Weight:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedProduct.weight }}</p>
          </div></div>
          <div class=" flex flex-col  gap-2 w-full"><p class="text-lg">Calories:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedProduct.calorie }}</p>
          </div></div></div>
         
        

          <div class=" flex flex-col  gap-2"><p class="text-lg">Price:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedProduct.price }}</p>
          </div></div>
        <div class="absolute top-2 left-2" v-if="selectedProduct.hasGluten">
          <img src="../assets/vegan.png" alt="" />
        </div>
      </div>
    </div>
    <div class="my-4">
      <div class="tab-slider">
        <div class="flex my-8 bg-white dark:bg-black rounded-2xl gap-8 px-8">
          <button
            class="bg-white dark:bg-black text-center dark:text-white flex py-6 px-6 gap-1 items-center font-semibold"
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            <img class="w-6 h-6" :src="tab.logo" alt="" />
            {{ tab.name }}
            <span
              class="border-bottom"
              :class="{ active: activeTab === index }"
            ></span>
          </button>
        </div>

        <div class="tab-content-wrapper">
          <div
            class="tab-content"
            :style="{ transform: `translateX(-${activeTab * 100}%)` }"
          >
            <div v-for="(tab, index) in tabs" :key="index" class="tab-pane">
              <div class="flex items-center gap-8 flex-wrap">
                <div class=" ">
                  <Cards
                    @open-EditSideSheet="$emit('open-EditSideSheet', $event)"
                    @open-Watch="$emit('open-Watch', $event)"
                    :show-Watch="showWatch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tab-slider {
  width: 100%;
}

button {
  position: relative;
  transition: color 0.3s ease;
}

button:hover {
  background-color: #e0e0e0;
}
.dark button:hover {
  background-color: #4e4e4e;
}

.border-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
}

.border-bottom.active {
  background-color: #000;
}
.dark .border-bottom.active {
  background-color: #fff;
}

.tab-content-wrapper {
  overflow: hidden;

  position: relative;
}

.tab-content {
  display: flex;
  transition: transform 0.5s ease;
}
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
.tab-pane {
  flex: 1 0 100%;
  padding: 20px;
  height: 480px;
  overflow-y: scroll;
  background-color: #f4f4f4;
}
.dark .tab-pane {
  flex: 1 0 100%;
  padding: 20px;
  height: 480px;
  overflow-y: scroll;
  background-color: #27272a;
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
  padding: 24px;
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
