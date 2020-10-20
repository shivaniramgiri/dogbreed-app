import { mount, createLocalVue } from "@vue/test-utils";
import SearchBreed from "@/views/SearchBreed.vue";
import Vue from "vue";
import Vuex from "vuex";

//import { config } from `@vue/test-utils`

Vue.config.silent = true;
///import sinon from "sinon";
Vue.config.ignoredElements = ["grid-layout", "grid-item"];
const localVue = createLocalVue();
localVue.use(Vuex);
describe("SearchBreed.vue", () => {
  let actions, mutations, state, getters, store;
  let wrapper;
  beforeEach(() => {
    (actions = {
      getBreedKeys: jest.fn(),
      getSelectedBreedImages: jest.fn()
    }),
      (mutations = {
        setBreedKeys: jest.fn(),
        setSearchBreed: jest.fn(),
        setSelectedBreedImages: jest.fn()
      }),
      (state = {
        breedKeys: [],
        searchBreed: "",
        selectedBreedImages: []
      }),
      (getters = {
        allBeedkeys: jest.fn(),
        searchBreed: jest.fn(),
        selectedBreedImages: jest.fn()
      });
    store = new Vuex.Store({
      actions,
      mutations,
      getters,
      state
    });
    wrapper = mount(SearchBreed, {
      localVue,
      store,
      //methods: { setBreed: setBreedMock }
      //});
      computed: {
        allBeedkeys() {
          let items = ["hound", "afircan"];
          return items;
        },
        searchBreed() {
          return "hound";
        },
        selectedBreedImages() {
          let item = [
            "https://images.dog.ceo/breeds/affenpinscher/n02110627_6842.jpg",
            "https://images.dog.ceo/breeds/african/n02116738_7170.jpg"
          ];
          return item;
        }
      }
    });
  });

  it("selectdropdown", async () => {
    const select = wrapper.find("select"); // get select html element to test

    await select.setValue("hound"); // set value using helper methods

    expect(wrapper.find("select").element.value).toBe("hound");
  });
  it("on change selectedValue should change", async () => {
    expect(wrapper.find("h4").text()).toMatch("affenpinscher Images")// before selection default
    const select = wrapper.find("select");
    select.trigger("change", "hound");
    await select.setValue("hound");
    expect(wrapper.vm.selectedValue).toBe("hound");
    expect(wrapper.find("h4").text()).toMatch("hound Images")// when hound is selected
  });

  it("on change methode is called", async () => {
    const setBreedMock = jest.fn();
    wrapper.setMethods({ setBreed: setBreedMock });
    wrapper.find("select").trigger("change", "hound");
    expect(setBreedMock).toBeCalled();
    expect(mutations.setSearchBreed).toHaveBeenCalled();
    expect(actions.getSelectedBreedImages).toHaveBeenCalled();
    expect(actions.getBreedKeys).toHaveBeenCalled();
  });
  it("on created() hook methods to called, and computed methods", () => {
    expect(actions.getBreedKeys).toHaveBeenCalled();
    //expect(getters.allBeedkeys).toHaveBeenCalled();
    expect(wrapper.vm.allBeedkeys).toHaveLength(2); //to have length 2
    expect(wrapper.vm.selectedBreedImages).toHaveLength(2); //to have length 2
    expect(wrapper.vm.searchBreed).toMatch("hound"); //default search
    expect(
      wrapper
        .findAll("img")
        .at(0)
        .attributes().src
    ).toEqual("https://images.dog.ceo/breeds/affenpinscher/n02110627_6842.jpg");// image tag is render or not
  });
  // it("on change", () => {
  //   const setBreedMock = sinon.stub();
  //   wrapper.find("select").trigger("change", "hound");
  //   wrapper.setMethods({ setBreed: setBreedMock });
  //   expect(setBreedMock.called).toBe(true);
  // });
  it("render grid-layout ", () => {
    expect(wrapper.find("grid-layout").exists()).toBe(true);
    expect(wrapper.find("grid-item").exists()).toBe(true);
    expect(
      wrapper
        .findAll("grid-layout")
        .at(0)
        .attributes().layout
    ).toMatch(
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_6842.jpg,https://images.dog.ceo/breeds/african/n02116738_7170.jpg"
    );
  });
  // wrapper.setData({ selectedBreedImages: [] }); to check it should not render when selected breed is empty

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
