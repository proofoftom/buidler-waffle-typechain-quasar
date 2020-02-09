# Quasar Buidler TypeScript

[Quasar](https://quasar.dev) + [Buidler](https://buidler.dev) + [Ethers](https://docs.ethers.io/ethers.js) + [Waffle](https://getwaffle.io) + [TypeChain](https://github.com/ethereum-ts/TypeChain)

> Opinionated smart contract development environment and frontend.

Buidler provides next level Solidity debugging, Waffle makes writing tests dead simple, and TypeChain makes your tests and frontend code type safe and magically autocompletes smart contract function names!

Quasar is a popular Vue framework with a built in component/style system. You can use it to build web, mobile, and desktop native apps.

## Install the dependencies
```
yarn
```

### Compile and type safe the contracts
```
npx buidler compile
```
```
npx buidler typechain
```

### Run Waffle tests
```
npx buidler test
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```
npx quasar dev
```

### Lint the files
```
yarn run lint
```

### Build the app for production
```
npx quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
