import axios from "axios";
const URL = "https://dog.ceo/api/";

export function getAll() {
  return axios.get(URL + "breeds/list/all");
}

export function getSingleRandomImageofDogBreed() {
  return axios.get(URL + "breeds/image/random");
}

export function getBreedListOfImage(breed_name) {
  return axios.get(URL + "breed/" + breed_name + "/images/random/20");
}

export function getRandomImageOfBreed(breed_name) {
  return axios.get(URL + "breed/" + breed_name + "/images/random");
}

export function getListOfsubbreeds(breed_name) {
  return axios.get(URL + "breed/" + breed_name + "/list");
}
