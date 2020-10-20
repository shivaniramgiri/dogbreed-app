<template>
  <div>
    <div>
      <h4>{{ selectedValue }} Images</h4>
      <select v-model="selectedValue" class="selectBox" @change="setBreed">
        <option v-for="breed in allBeedkeys" :Key="breed">{{ breed }} </option>
      </select>
    </div>
    <grid-layout
      :layout.sync="selectedBreedImages"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="true"
      :margin="[5, 5]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="(item, index) in selectedBreedImages"
        :key="item + index"
        style="display: inline-block"
      >
        <img :src="item" class="center" style="padding: 20px 10px;" />
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
//import VueGridLayout from "vue-grid-layout";
export default {
  name: "SearchBreed",
  // components: {
  //   GridLayout: VueGridLayout.GridLayout,
  //   GridItem: VueGridLayout.GridItem
  // },
  data() {
    return {
      selectedValue: "affenpinscher" // defalut select value
    };
  },
  methods: {
    ...mapActions(["getBreedKeys", "getSelectedBreedImages"]), //actions from store
    ...mapMutations(["setSearchBreed"]),
    // for setting value of searchBreed property in store
    setBreed() {
      this.setSearchBreed(this.selectedValue);

      this.getSelectedBreedImages();
    }
  },
  computed: {
    ...mapGetters(["allBeedkeys", "searchBreed", "selectedBreedImages"])
  },
  created() {
    this.getBreedKeys();
    this.setBreed();
  }
};
</script>
<style scoped>
.center {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  width: 250px;
  height: 200px;
}

</style>
