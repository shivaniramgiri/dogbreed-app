import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vue from "vue";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Home.vue", () => {
  let wrapper, store;
  Vue.config.ignoredElements = ["grid-layout", "grid-item"];
  beforeEach(() => {
    let mutationMock = {
      setSearchBreed: jest.fn()
    };
    store = new Vuex.Store({
      mutationMock
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("renders heading in component", () => {
    //expect(wrapper.name()).toMatch("Home");
    wrapper = shallowMount(Home);
    expect(wrapper.text()).toMatch("Welcome to Dog Breed App");
  });
  it("vue instance", () => {
    // const setUpDataMock = jest.fn();
    wrapper = shallowMount(Home, { localVue, store });
    // wrapper.setMethods({ setUpData: setUpDataMock });
    //expect(setUpDataMock).toBeCalled();
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
