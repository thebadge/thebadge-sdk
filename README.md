# thebadge-sdk


## Develop the sdk
- Run lint checker:
```
yarn lint
```

- Run tests:
```
yarn test
```

- Build sdk:
```
yarn build
```

## Setup on your project

1) Install the sdk:
```
npm install @thebadge/sdk
```
or
```
yarn add @thebadge/sdk
```

2) Initialize sdk instance:

```ts
const sdkInstance = new TheBadgeSDK(
  // check if your chain id is supported with TheBadgeSDK.isChainSupported(chainId)
  chainId, // chain id numeric value 
    
  // configuration object
  {
    // read only provider
    rpcProviderConfig: {
      // your desired provider: 'infura' or 'alchemy'
      name: RPCProviders.infura,
    
      // your provider token
      token: '00000000000000', 
    }, 
        
    // OPTIONAL: web3Provider instance, needed for write methods e.g. mint badge
    web3Provider,
        
    // OPTIONAL: use dev mode (relevant only on testnets where qa env is default), 
    // default value: false
    devMode: true,  
  }
)
```
