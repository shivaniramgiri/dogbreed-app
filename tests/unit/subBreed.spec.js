import { mount, createLocalVue } from "@vue/test-utils";
import SubBreed from "@/views/SubBreed.vue";
import Vue from "vue";
import Vuex from "vuex";
import ShowSubBreed from "../../src/store/modules/ShowSubBreed";

Vue.config.ignoredElements = ["grid-layout", "grid-item"];

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ShowSubBreed);

describe("searchBreed.vue", () => {
  let actions, mutations, state, getters, store;
  let wrapper;
  beforeEach(() => {
    (actions = {
      getSubBreed: jest.fn()
    }),
      (mutations = {
        setSubBreeds: jest.fn(),
        setSubBreedName: jest.fn()
      }),
      (state = {
        subBreed: [],
        breed: ""
      }),
      (getters = {
        allSubBreeds: jest.fn(),
        subbreed: jest.fn()
      });
    store = new Vuex.Store({
      modules: {
        ShowSubBreed: {
          actions,
          mutations,
          getters,
          state
        }
      }
    });
  });

  it("vuex methods", () => {
    wrapper = mount(SubBreed, {
      localVue,
      store,
      computed: {
        allSubBreeds() {
          let item = [];
          return item;
        },
        subbreed() {
          return "hound";
        }
      }
    });
    expect(actions.getSubBreed).toHaveBeenCalled(); // action is called while created hook
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it(" h1 tag is render", () => {
    wrapper = mount(SubBreed, {
      localVue,
      store,
      computed: {
        allSubBreeds() {
          let item = [];
          return item;
        },
        subbreed() {
          return "hound";
        }
      }
    });
    //expect(getters.allSubBreeds).toHaveBeenCalled();
    //expect(wrapper.vm.subbreed).toHaveBeenCalled();
    expect(wrapper.find("h1").text()).toMatch("SubBreed of hound");
  });
  it("div v-if  render if dispalyBreeds is true  ", () => {
    wrapper = mount(SubBreed, {
      localVue,
      store,
      computed: {
        allSubBreeds() {
          let item = ["a", "b"];
          return item;
        },
        subbreed() {
          return "hound";
        }
      }
    });

    expect(wrapper.find("#p2").exists()).toBe(false);
    expect(wrapper.find("#div2").exists()).toBe(true);
  });
  it("div should not render and v-else should render", () => {
    wrapper = mount(SubBreed, {
      localVue,
      store,
      computed: {
        allSubBreeds() {
          let item = [];
          return item;
        },
        subbreed() {
          return "hound";
        }
      }
    });
    expect(wrapper.find("p").text()).toMatch(
      "for hound no subbreeds avaliable"
    );

    expect(wrapper.find("#div2").exists()).toBe(false);
  });

  // it("testing mixin method  and data", () => {
  //   let mixinmock = {
  //     data() {
  //       return {
  //         subBreed: { breedName: "", breedImage: "" },
  //         subBreedlist: []
  //       };
  //     },
  //     createSubreedlist: jest.fn()
  //   };
  //   wrapper = mount(SubBreed, {
  //     localVue,
  //     store,
  //     computed: {
  //       allSubBreeds() {
  //         let item = ["a","b"];
  //         return item;
  //       },
  //       subbreed() {
  //         return "hound";
  //       }
  //     },
  //     mixins: [mixinmock]
  //   });
  //   expect(mixinmock.createSubreedlist).toBeCalled();
  // });
});
