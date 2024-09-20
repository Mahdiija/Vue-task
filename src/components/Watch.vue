<template>
    <div v-if="selectedItem" class="sidesheet">
      <div class="flex flex-col gap-2">
        <div class="flex justify-end" ><svg @click="$emit('close')" class=" cursor-pointer" fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490 490" xml:space="preserve">
<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "/>
</svg></div>
<div class=" flex justify-center"><img class="h-[150px] w-[150px] object-cover" :src="selectedItem.image" alt="" /></div>
        
        
          <div class=" flex flex-col  gap-2"><p class="text-lg">Name:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedItem.name }}</p>
          </div></div>
            
          <div class=" flex flex-col  gap-2"><p class="text-lg">Ingredients:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full overflow-hidden">
            <p class="font-bold">{{ selectedItem.ingredients }}</p>
          </div></div>
        
        <div class=" flex items-center   gap-3 w-full"> <div class=" flex flex-col  gap-2 w-full"><p class="text-lg">Weight:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedItem.weight }}</p>
          </div></div>
          <div class=" flex flex-col  gap-2 w-full"><p class="text-lg">Calories:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedItem.calorie }}</p>
          </div></div></div>
         
        

          <div class=" flex flex-col  gap-2"><p class="text-lg">Price:</p>
            <div class="flex gap-2 items-center border-[1px] border-gray-300 rounded-xl p-4 w-full">
            <p class="font-bold">{{ selectedItem.price }}</p>
          </div></div>
        <div class="absolute top-2 left-2" v-if="selectedItem.hasGluten">
          <img src="../assets/vegan.png" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedIndex: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        selectedItem: null,  
      };
    },
    mounted() {

      const items = JSON.parse(localStorage.getItem('items'));
  
      
      if (items && items.length > this.selectedIndex) {
        this.selectedItem = items[this.selectedIndex]; 
      } else {
        this.selectedItem = null;  
      }
    },
  };
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