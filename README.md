# dogbreed-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Requirements to Start Application
vue: version "^2.6.11" or above,
axios,
bootstrap vue,
vue-router,
vuex

Include node modules

### Architectural decisions
 In home page to display all the breeds avaliable (breed and breedimage) along with pagination(like per page there should 10 images)
 If user clicks on any image in home page it will redirect to SubBreed page
 In SubBreeed page can see all the subbreed avaliable for particular breed which was selected in home page.
 In search page user can search breeds from dropdown and for the selected value random images  are shown and defalut value is provided if user is not selecting any breed.
 
 choose to use  Vuejs for implementing.

### Production ready 
A constant API is received and It will be production ready once unit testing is done .