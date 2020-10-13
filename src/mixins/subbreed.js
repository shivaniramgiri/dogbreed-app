import { getRandomImageOfBreed } from "@/Breeds.service.js";
export default {
  data() {
    return {
      subBreed: { breedName: "", breedImage: "" },
      subBreedlist: []
    };
  },
  methods: {
    async createSubreedlist(Keys, subbreed) {
      for (let index = 0; index < Keys.length; index++) {
        let image = await getRandomImageOfBreed(
          subbreed + "/" + Keys[index]
        ).then(res => {
          return res.data.message;
        });

        this.subBreed = { breedName: Keys[index], breedImage: image };
        this.subBreedlist.push(this.subBreed);
      }
      return this.subBreedlist;
    }
  }
};
