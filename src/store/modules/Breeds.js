import { getAll, getBreedListOfImage } from "@/Breeds.service.js";
const state = {
  breedKeys: [],
  searchBreed: "",
  selectedBreedImages: []
};
const getters = {
  allBeedkeys: state => state.breedKeys,
  searchBreed: state => state.searchBreed,
  selectedBreedImages: state => state.selectedBreedImages
};
const actions = {
  async getBreedKeys({ commit }) {
    let response = await getAll();

    commit("setBreedKeys", Object.keys(response.data.message));
  },
  async getSelectedBreedImages({ commit }) {
    let response = await getBreedListOfImage(state.searchBreed);

    commit("setSelectedBreedImages", response.data.message);
  }
};
const mutations = {
  setBreedKeys: (state, breedKeys) => (state.breedKeys = breedKeys),
  setSearchBreed: (state, searchBreed) => (state.searchBreed = searchBreed),
  setSelectedBreedImages: (state, selectedBreedImages) => {
    state.selectedBreedImages = selectedBreedImages;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
