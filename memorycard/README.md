# memorycard

## Project setup
```
yarn install
yarn install -g cors-backdoor
```

### Compiles and hot-reloads for development
##### Remember to run cors-backdoor!
```
cors-backdoor --target https://api.igdb.com/v4/
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
cors-backdoor --target https://api.igdb.com/v4/
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
