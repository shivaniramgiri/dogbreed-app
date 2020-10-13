<template>
  <div>
    <div>
      <h1 style="text-align:center">
        <marquee width="90%">Welcome to Dog Breed App</marquee>
      </h1>
    </div>

    <div>
      <grid-layout
        :layout.sync="diplayBreeds"
        :col-num="4"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="(breed, index) in diplayBreeds"
          :key="index + breed"
          style="display: inline-block"
        >
          <p class="centertext">{{ breed.breedName }}</p>

          <img
            :src="breed.breedImage"
            class="center"
            @click="goToSubBreed(breed.breedName)"
            style="padding: 20px;"
          />
        </grid-item>
      </grid-layout>
    </div>
    <div class="pagenationcenter">
      <div class="navcenter">
        <ul class="pagination">
          <li class="page-item">
            <button
              type="button"
              class="page-link"
              v-if="page != 1"
              @click="page--"
            >
              Previous
            </button>
          </li>
          <li class="page-item">
            <button
              type="button"
              class="page-link"
              v-for="pageNumber in pages.slice(page - 1, page + 1)"
              :key="pageNumber"
              @click="page = pageNumber"
            >
              {{ pageNumber }}
            </button>
          </li>
          <li class="page-item">
            <button
              type="button"
              @click="page++"
              v-show="page < pages.length"
              class="page-link"
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getAll, getRandomImageOfBreed } from "@/Breeds.service.js";
import subbreed from "../mixins/subbreed";
import { mapMutations } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      breedsKeys: [],
      page: 1,
      perPage: 10,
      pages: [],
      Breed: { breedName: "", breedImage: "" },
      breedlist: []
    };
  },
  mixins: [subbreed],
  methods: {
    // for calculating total no of pages
    setpages() {
      let numberOfPages = Math.ceil(this.breedsKeys.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    //to create data for each page
    paginate(breedsKeys) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return breedsKeys.slice(from, to);
    },
    //going to subbreed page and calling setSubBreedName method
    goToSubBreed(breed) {
      this.setSubBreedName(breed);
      this.$router.push("/subbreed");
    },
    ...mapMutations(["setSubBreedName"]), //for using the action methods in component
    // creating breedlist
    async createBreedList(breedsKeys) {
      for (let index = 0; index < breedsKeys.length; index++) {
        let image = await getRandomImageOfBreed(breedsKeys[index]).then(res => {
          return res.data.message;
        });
        this.Breed = { breedName: breedsKeys[index], breedImage: image };
        this.breedlist.push(this.Breed);
      }
    },
    setUpData() {
      getAll().then(res => {
        this.breedsKeys = Object.keys(res.data.message); //get only name of the breeds
        this.createBreedList(this.breedsKeys);

        this.setpages();
      });
    }
  },
  computed: {
    //it contians per page breeds
    diplayBreeds() {
      return this.paginate(this.breedlist);
    }
  },

  created() {
    this.setUpData();
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
button.page-link {
  display: inline-block;
  width: 100px;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
.column {
  float: left;
  width: 20%;
  padding: 10px;
  display: block;
}
.navcenter {
  display: block;
  float: center;
  justify-content: center;
}
.pagenationcenter {
  width: 500px;
  margin: 0 auto;
  display: block;
  justify-content: center;
  position: relative;
  bottom: auto;
  /* background-color: lavender; */
}
.centertext {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
