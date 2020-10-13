import { getListOfsubbreeds } from "@/Breeds.service.js";

const state = {
  subBreed: [],
  breed: ""
};
const getters = {
  allSubBreeds: state => state.subBreed,
  subbreed: state => state.breed
};
const actions = {
  async getSubBreed({ commit }) {
    const response = await getListOfsubbreeds(state.breed);
    commit("setSubBreeds", response.data.message);
  }
};
const mutations = {
  setSubBreeds: (state, subBreed) => (state.subBreed = subBreed),
  setSubBreedName: (state, subbreed) => (state.breed = subbreed)
};

export default {
  state,
  getters,
  actions,
  mutations
};
