<template>
  <div class="flex gap-6 items-center flex-wrap">
    
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white dark:bg-black rounded-2xl p-4 pt-28 relative w-[230px] z-auto dark:text-white"
      >
        <div class="absolute w-[200px] mx-auto flex justify-center -top-9">
          <img
            class="w-32 h-32 object-cover"
            v-if="item.image"
            :src="item.image"
          />
        </div>
        <div v-if="item.hasGluten" class="absolute top-1 right-1">
          <img class="w-9 h-9" src="../assets/vegan.png" alt="" />
        </div>
        <div class="flex justify-center">
          <p class="font-bold text-xl">{{ item.name }}</p>
        </div>
        <div class="flex justify-center mt-2">
          <p class="text-gray-400 text-sm">{{ item.weight }}g</p>
        </div>
        <div class="flex justify-center mt-2 w-[90%] h-full mx-auto overflow-hidden ">
          <p class="text-gray-400 text-sm text-center">
            {{ truncateText(item.ingredients) }}
          </p>
        </div>
        <div class="flex items-center justify-between pt-6">
          <div>
            <p class="text-2xl">${{ item.price }}</p>
          </div>
          <div class="flex gap-2 items-center">
            <div
           @click="openWatch(index)"
            class="border-[1px] border-gray-200 py-2 px-3 rounded hover:bg-slate-100">
              <div >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.97924 10.2709C4.36454 8.19808 7.26851 5 12 5C16.7314 5 19.6354 8.19808 21.0207 10.2709C21.4855 10.9665 21.718 11.3143 21.6968 11.9569C21.6757 12.5995 21.4088 12.9469 20.8752 13.6417C19.2861 15.7107 16.1129 19 12 19C7.88699 19 4.71384 15.7107 3.12471 13.6417C2.59106 12.9469 2.32424 12.5995 2.30308 11.9569C2.28193 11.3143 2.51436 10.9665 2.97924 10.2709ZM11.9999 16C14.2091 16 15.9999 14.2091 15.9999 12C15.9999 9.79086 14.2091 8 11.9999 8C9.79081 8 7.99995 9.79086 7.99995 12C7.99995 14.2091 9.79081 16 11.9999 16Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
            <div
              @click="togglePopup(index)"
              class="border-[1px] border-gray-200 py-2 px-3 rounded cursor-pointer hover:bg-slate-100"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9838 2.54161C14.0711 2.71093 14.0928 2.92777 14.1361 3.36144C14.2182 4.1823 14.2593 4.59274 14.4311 4.81793C14.649 5.10358 15.0034 5.25038 15.3595 5.20248C15.6402 5.16472 15.9594 4.90352 16.5979 4.38113C16.9352 4.10515 17.1038 3.96716 17.2853 3.90918C17.5158 3.83555 17.7652 3.84798 17.9872 3.94419C18.162 4.01994 18.3161 4.17402 18.6243 4.4822L19.5178 5.37567C19.8259 5.68385 19.98 5.83794 20.0558 6.01275C20.152 6.23478 20.1644 6.48415 20.0908 6.71464C20.0328 6.89612 19.8948 7.06478 19.6188 7.4021C19.0964 8.0406 18.8352 8.35984 18.7975 8.64056C18.7496 8.99662 18.8964 9.35102 19.182 9.56893C19.4072 9.74072 19.8176 9.78176 20.6385 9.86385C21.0722 9.90722 21.2891 9.92891 21.4584 10.0162C21.6734 10.1272 21.841 10.3123 21.9299 10.5373C22 10.7145 22 10.9324 22 11.3682V12.6319C22 13.0676 22 13.2855 21.93 13.4626C21.841 13.6877 21.6734 13.8729 21.4583 13.9838C21.289 14.0711 21.0722 14.0928 20.6386 14.1361L20.6386 14.1361C19.818 14.2182 19.4077 14.2592 19.1825 14.4309C18.8967 14.6489 18.7499 15.0034 18.7979 15.3596C18.8357 15.6402 19.0968 15.9593 19.619 16.5976C19.8949 16.9348 20.0328 17.1034 20.0908 17.2848C20.1645 17.5154 20.152 17.7648 20.0558 17.9869C19.98 18.1617 19.826 18.3157 19.5179 18.6238L18.6243 19.5174C18.3162 19.8255 18.1621 19.9796 17.9873 20.0554C17.7652 20.1516 17.5159 20.164 17.2854 20.0904C17.1039 20.0324 16.9352 19.8944 16.5979 19.6184L16.5979 19.6184C15.9594 19.096 15.6402 18.8348 15.3595 18.7971C15.0034 18.7492 14.649 18.896 14.4311 19.1816C14.2593 19.4068 14.2183 19.8173 14.1362 20.6383C14.0928 21.0722 14.0711 21.2891 13.9837 21.4585C13.8728 21.6735 13.6877 21.8409 13.4628 21.9299C13.2856 22 13.0676 22 12.6316 22H11.3682C10.9324 22 10.7145 22 10.5373 21.9299C10.3123 21.841 10.1272 21.6734 10.0162 21.4584C9.92891 21.2891 9.90722 21.0722 9.86385 20.6385C9.78176 19.8176 9.74072 19.4072 9.56892 19.182C9.35101 18.8964 8.99663 18.7496 8.64057 18.7975C8.35985 18.8352 8.04059 19.0964 7.40208 19.6189L7.40206 19.6189C7.06473 19.8949 6.89607 20.0329 6.71458 20.0908C6.4841 20.1645 6.23474 20.152 6.01272 20.0558C5.8379 19.9801 5.6838 19.826 5.37561 19.5178L4.48217 18.6243C4.17398 18.3162 4.01988 18.1621 3.94414 17.9873C3.84794 17.7652 3.8355 17.5159 3.90913 17.2854C3.96711 17.1039 4.10511 16.9352 4.3811 16.5979C4.90351 15.9594 5.16471 15.6402 5.20247 15.3594C5.25037 15.0034 5.10357 14.649 4.81792 14.4311C4.59273 14.2593 4.1823 14.2182 3.36143 14.1361C2.92776 14.0928 2.71093 14.0711 2.54161 13.9838C2.32656 13.8728 2.15902 13.6877 2.07005 13.4627C2 13.2855 2 13.0676 2 12.6318V11.3683C2 10.9324 2 10.7144 2.07008 10.5372C2.15905 10.3123 2.32654 10.1272 2.54152 10.0163C2.71088 9.92891 2.92777 9.90722 3.36155 9.86384H3.36155H3.36156C4.18264 9.78173 4.59319 9.74068 4.81842 9.56881C5.10395 9.35092 5.2507 8.99664 5.20287 8.64066C5.16514 8.35987 4.90385 8.04052 4.38128 7.40182C4.10516 7.06435 3.96711 6.89561 3.90914 6.71405C3.83557 6.48364 3.848 6.23438 3.94413 6.01243C4.01988 5.83754 4.17403 5.68339 4.48233 5.37509L5.37565 4.48177L5.37566 4.48177C5.68385 4.17357 5.83795 4.01947 6.01277 3.94373C6.23478 3.84753 6.48414 3.8351 6.71463 3.90872C6.89612 3.9667 7.06481 4.10472 7.4022 4.38076C8.04061 4.9031 8.35982 5.16427 8.64044 5.20207C8.99661 5.25003 9.35113 5.10319 9.56907 4.81742C9.74077 4.59227 9.78181 4.18195 9.86387 3.36131C9.90722 2.92776 9.9289 2.71098 10.0162 2.5417C10.1271 2.32658 10.3123 2.15898 10.5374 2.07001C10.7145 2 10.9324 2 11.3681 2H12.6318C13.0676 2 13.2855 2 13.4627 2.07005C13.6877 2.15902 13.8728 2.32656 13.9838 2.54161ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            v-if="isPopupVisible[index]"
            ref="popupRefs[index]"
            class="popup flex flex-col gap-2"
          >
            <div
              class="cursor-pointer text-blue px-4 py-2 hover:bg-slate-200 transition-all"
              @click="openEditSideSheet(index)"
            >
              <div class="flex gap-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.92971 19.283L5.92972 19.283L5.95149 19.2775L5.95151 19.2775L8.58384 18.6194C8.59896 18.6156 8.61396 18.6119 8.62885 18.6082C8.85159 18.5528 9.04877 18.5037 9.2278 18.4023C9.40683 18.301 9.55035 18.1571 9.71248 17.9947C9.72332 17.9838 9.73425 17.9729 9.74527 17.9618L16.9393 10.7678L16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.5461 10.1611 17.7333 9.91573C17.9339 9.65281 18.0858 9.36038 18.0858 9C18.0858 8.63961 17.9339 8.34719 17.7333 8.08427C17.5461 7.83894 17.276 7.5689 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L16.7445 7.03738C16.4311 6.72395 16.1611 6.45388 15.9157 6.2667C15.6528 6.0661 15.3604 5.91421 15 5.91421C14.6396 5.91421 14.3472 6.0661 14.0843 6.2667C13.8389 6.45388 13.5689 6.72395 13.2555 7.03739L13.2322 7.06066L6.03816 14.2547C6.02714 14.2658 6.01619 14.2767 6.00533 14.2875C5.84286 14.4496 5.69903 14.5932 5.59766 14.7722C5.4963 14.9512 5.44723 15.1484 5.39179 15.3711C5.38809 15.386 5.38435 15.401 5.38057 15.4162L4.71704 18.0703C4.71483 18.0791 4.7126 18.088 4.71036 18.097C4.67112 18.2537 4.62921 18.421 4.61546 18.5615C4.60032 18.7163 4.60385 18.9773 4.81326 19.1867C5.02267 19.3961 5.28373 19.3997 5.43846 19.3845C5.57899 19.3708 5.74633 19.3289 5.90301 19.2896C5.91195 19.2874 5.92085 19.2852 5.92971 19.283Z"
                      stroke="#222222"
                    />
                    <path
                      d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z"
                      fill="#222222"
                    />
                  </svg>
                </div>
                <p class="text-blue-400">Edit</p>
              </div>
            </div>
            <div
              class="cursor-pointer text-red px-4 py-2 hover:bg-slate-200 transition-all"
              @click="deleteCard(index)"
            >
              <div class="flex gap-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.5 14.5L9.5 11.5"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.5 14.5L14.5 11.5"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3 6.5H21V6.5C19.5955 6.5 18.8933 6.5 18.3889 6.83706C18.1705 6.98298 17.983 7.17048 17.8371 7.38886C17.5 7.89331 17.5 8.59554 17.5 10V15.5C17.5 17.3856 17.5 18.3284 16.9142 18.9142C16.3284 19.5 15.3856 19.5 13.5 19.5H10.5C8.61438 19.5 7.67157 19.5 7.08579 18.9142C6.5 18.3284 6.5 17.3856 6.5 15.5V10C6.5 8.59554 6.5 7.89331 6.16294 7.38886C6.01702 7.17048 5.82952 6.98298 5.61114 6.83706C5.10669 6.5 4.40446 6.5 3 6.5V6.5Z"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.5 3.50024C9.5 3.50024 10 2.5 12 2.5C14 2.5 14.5 3.5 14.5 3.5"
                      stroke="#222222"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <p class="text-red-700">Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    <SideSheetTrigger />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideSheetTrigger from "../components/SideSheetTrigger.vue";
import EditSideSheet from "../components/EditSideSheet.vue";
import { useStore } from "vuex";
import {
  computed,
  ref,
  getCurrentInstance
} from "vue";
export default defineComponent({
  name: "Cards",

  components: {
    SideSheetTrigger,
    EditSideSheet,
  },
  props: {
    showWatch: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      showSideSheet: true,
      editMode: false,
      selectedProduct: null,
      selectedIndex: null,
    };
  },

  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);
    const isModalVisible = ref(false);
    const isEditSheetVisible = ref(false);
    const instance = getCurrentInstance();
    const isPopupVisible = ref<boolean[]>([]);
    const popupRefs = ref<(HTMLElement | null)[]>([]);

    const togglePopup = (index: number) => {
      isPopupVisible.value[index] = !isPopupVisible.value[index];
    };

    const openEditSideSheet = (index) => {
      instance.emit("open-EditSideSheet", index);
      isPopupVisible.value[index] = !isPopupVisible.value[index];
    }
    const openWatch = (index) => {
      instance.emit('open-watch', index); // Emit the selected index
    }
    const truncateText = (ingredients, maxLength = 50) => {
      if (ingredients.length > maxLength) {
        return ingredients.slice(0, maxLength) + '...';
      }
      return ingredients;
    }


    function deleteCard(index) {
      store.dispatch("deleteItem", index);
    }

    return {
      items,
      isModalVisible,
      isEditSheetVisible,
      openEditSideSheet,
      deleteCard,
      isPopupVisible,
      popupRefs,
      togglePopup,
      openWatch,
      truncateText
    };
  },
});
</script>

<style scoped>
.product-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.popup {
  position: absolute;
  bottom: 65px;
  right: -50px;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;
}
.dark .popup {
  position: absolute;
  bottom: 65px;
  right: -50px;
  background-color: black;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;
}
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.ingredients {
  margin-top: 10px;
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
</style>
