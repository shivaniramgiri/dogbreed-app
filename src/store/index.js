import Vue from "vue";
import Vuex from "vuex";
import ShowSubBreed from "./modules/ShowSubBreed";
import Breed from "./modules/Breeds";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ShowSubBreed,
    Breed
  }
});
