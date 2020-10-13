import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Home);
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("renders heading in component", () => {
    expect(wrapper.name()).toMatch("Home");
    expect(wrapper.text()).toMatch("Welcome to Dog Breed App");
  });

  // it("goToSubBreed() is called",()=>{
  //   const options = wrapper.find('select').findAll('option')
  //   //option.element.selected = true
  //   parentSelect.trigger('click')
  //    options.at(1).setSelected()

  //   expect(wrapper.find('option:checked').element.value).toBe('Affenpinscher')

  //  })
});
