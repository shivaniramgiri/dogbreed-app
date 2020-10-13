import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Home from "@/views/Home.vue";
import SubBreed from "@/views/SubBreed";
import SearchBreed from "@/views/SearchBreed.Vue";

describe("In app component ", () => {
  let appWrapper;
  const router = new VueRouter(
    { path: "/", name: "Home", component: Home },
    { path: "/subbreed", name: "SubBreed", component: SubBreed },
    { path: "//searchbreed", name: "SearchBreed", component: SearchBreed }
  );

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    appWrapper = shallowMount(App, {
      localVue,
      router
    });
  });
  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("renders the correct markup", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });
  it('it should have b-navbar element with type="drak"', () => {
    const byType = appWrapper.find("b-navbar");
    expect(byType.attributes("type")).toBe("dark");
  });
  it('it should have a b-navbar-brand with text "Dog Breed"', () => {
    const text = appWrapper.find("b-navbar-brand").text();
    expect(text).toMatch("Dog Breed");
  });
  // it('it have nav-item with text ')
});
