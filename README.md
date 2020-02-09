# Quasar Buidler TypeChain

[Quasar](https://quasar.dev) + [Buidler](https://buidler.dev) + [Ethers](https://docs.ethers.io/ethers.js) + [Waffle](https://getwaffle.io) + [TypeChain](https://github.com/ethereum-ts/TypeChain) + [OpenZeppelin SDK](https://docs.openzeppelin.com/openzeppelin)

> Opinionated smart contract development environment and frontend.

* **Buidler** - next level Solidity debugging

* **Waffle** - makes writing tests dead simple

* **TypeChain** - makes your tests and frontend code type safe and magically autocompletes smart contract function names in your IDE!

* **OpenZeppelin SDK** - upgradeable proxy deployments

* **Quasar** - a popular Vue framework with a built in component/style system. You can use it to build web, mobile, and desktop native apps.

* **Ethers + Vuex module** - allows you to interact with the TypeChain contracts from the frontend.

## Install the dependencies
```
yarn
```

### Compile and type safe the contracts
```
yarn compile
```

### Run Waffle tests
```
yarn test
```

### Start the frontend app in development mode (hot-code reloading, error reporting, etc.)
```
yarn ganache
```
and in a new terminal
```
yarn dev
```

### Start the frontend sans a local blockchain
```
yarn web
```

### Lint the files
```
yarn lint
```

### Build the app for production
```
yarn build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
