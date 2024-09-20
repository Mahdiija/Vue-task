<template>
  <div
    :class="{ dark: isDarkMode }"
    class="w-full bg-gray-300 h-[100vh] flex flex-col justify-center content-center transition-all duration-500"
  >
    <div class="w-[90%] rounded-3xl bg-gray-100 mx-auto flex dark:bg-zinc-800">
      <SideBar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <div class="w-[80%]">
        <router-view @open-EditSideSheet="openEditSideSheet" @open-watch="openWatch" />
      </div>

      <SideSheet :isActive="showSideSheet" @close="closeSideSheet" />
      <EditSideSheet
        v-if="isEditSheetVisible"
        :item="selectedIndex"
        :index="selectedIndex"
        @close="isEditSheetVisible = false"
      />
      <Watch v-if="showWatch"  :item="selectedIndex"
      :selectedIndex="selectedIndex" @close="showWatch = false"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import SideBar from "./components/SideBar.vue";
import SideSheet from "./components/SideSheet.vue";
import EditSideSheet from "./components/EditSideSheet.vue";
import Watch from "./components/Watch.vue";

export default defineComponent({
  props: {
    closeSideSheet: Boolean, 
    showSideSheet: Boolean,
    EditshowSideSheet: Boolean,
    EditcloseSideSheet: Boolean,
  },
  components: {
    SideSheet,
    SideBar,
    EditSideSheet,
    Watch,
  },

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("darkMode", this.isDarkMode ? "dark" : "light");
      this.applyDarkMode();
    },

    applyDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    loadDarkModePreference() {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode) {
        this.isDarkMode = savedMode === "dark";
        this.applyDarkMode();
      }
    },
  },
  mounted() {
    this.loadDarkModePreference();
  },
  setup() {
    const isSideSheetVisible = ref(false);
    const isEditSheetVisible = ref(false);
    const showWatch = ref(false);
    const selectedIndex = ref(null); 
    const fileInput = ref(null);
    const fileInfo = ref(null);
    const isUploading = ref(false);
    const progress = ref(0);
    const showSideSheet = () => {
      isSideSheetVisible.value = true;
    };
    const hideSideSheet = () => {
      isSideSheetVisible.value = false;
    };
    const triggerFileUpload = () => {
      fileInput.value.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        // Extract file information
        const fileSizeInKB = (file.size / 1024).toFixed(2);
        const fileFormat = file.type.split("/")[1];

        fileInfo.value = {
          format: fileFormat,
          size: fileSizeInKB,
        };

        // Simulate file upload with a progress bar
        uploadFile(file);
      }
    };

    const uploadFile = (file) => {
      isUploading.value = true;
      progress.value = 0;

      // Fake upload progress using setInterval
      const uploadInterval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 10; // Increase progress
        } else {
          clearInterval(uploadInterval);
          isUploading.value = false;
        }
      }, 300); // Update progress every 300ms
    };


    provide("isSideSheetVisible", isSideSheetVisible);
    provide("showSideSheet", showSideSheet);
    provide("hideSideSheet", hideSideSheet);

    
    function openEditSideSheet(index) {
      selectedIndex.value = index; 
      isEditSheetVisible.value = true;
    }
    const openWatch = (index) => {
      selectedIndex.value = index; // Update the selectedIndex ref
      showWatch.value = true;      // Show the modal
    };
    return { openEditSideSheet, isEditSheetVisible, selectedIndex, openWatch, showWatch ,   fileInput,
      fileInfo,
      isUploading,
      progress,
      triggerFileUpload,
      handleFileChange, };
  },
});
</script>

<style scoped>
body {
  transition: background-color 0.5s ease;
}
</style>
