<template>
  <div class="about">
    <h1 style="text-align:center">SubBreed of {{ subbreed }}</h1>

    <div v-if="displaySubBreed > 0">
      <grid-layout
        :layout.sync="subBreedlist"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :margin="[5, 5]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="(breed, index) in subBreedlist"
          :key="index + breed"
          style="display: inline-block"
        >
          <p class="centertext">{{ breed.breedName }}</p>

          <img :src="breed.breedImage" class="center" style="padding: 20px;" />
        </grid-item>
      </grid-layout>
    </div>
    <div v-else>
      <p>for {{ subbreed }} No subbreeds avaliable</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import subbreed from "../mixins/subbreed";
export default {
  name: "SubBreed",
  data() {
    return {
      subBreedlistlength: 0
    };
  },

  mixins: [subbreed],

  methods: {
    ...mapActions(["getSubBreed"]) // using actions in store
  },
  computed: {
    ...mapGetters(["allSubBreeds", "subbreed"]), //using getters in store

    displaySubBreed() {
      let l = [];
      l = this.allSubBreeds;
      this.createSubreedlist(this.allSubBreeds, this.subbreed); // getting this method from mixin
      return l.length;
    }
  },

  created() {
    this.getSubBreed();
  }
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  width: 200px;
  height: 200px;
}
.column {
  float: left;
  width: 20%;
  padding: 10px;
  display: block;
}
</style>
