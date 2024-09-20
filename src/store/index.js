import { createStore } from "vuex";
export default createStore({
  state: {
    items: JSON.parse(localStorage.getItem("items")) || [],
    editSideSheetVisible: false,
    currentItem: null,
    currentIndex: null,
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    EDIT_ITEM(state, { index, updatedItem }) {
      state.items.splice(index, 1, updatedItem);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    DELETE_ITEM(state, index) {
      state.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    OPEN_EDIT_SIDESHEET(state, { item, index }) {
      state.currentItem = item;
      state.currentIndex = index;
      state.editSideSheetVisible = true;
    },
    CLOSE_EDIT_SIDESHEET(state) {
      state.editSideSheetVisible = false;
      state.currentItem = null;
      state.currentIndex = null;
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("ADD_ITEM", item);
    },
    editItem({ commit }, payload) {
      commit("EDIT_ITEM", payload);
    },
    deleteItem({ commit }, index) {
      commit("DELETE_ITEM", index);
    },
    openEditSideSheet({ commit }, payload) {
      commit("OPEN_EDIT_SIDESHEET", payload);
    },
    closeEditSideSheet({ commit }) {
      commit("CLOSE_EDIT_SIDESHEET");
    },
  },
  getters: {
    items: (state) => state.items,
    editSideSheetVisible: (state) => state.editSideSheetVisible,
    currentItem: (state) => state.currentItem,
    currentIndex: (state) => state.currentIndex,
  },
});
