<div style="text-align: center;">
  <a href="https://thebadge.xyz">
    <img alt="TheBadge" src="https://www.thebadge.xyz/the_badge_github_logo.png">
  </a>
</div>

<h1 align="center">TheBadge - SDK</h1>

<p align="center">
  <a href="https://discord.com/invite/FTxtkgbAC4"><img src="https://img.shields.io/discord/1006480637512917033?style=plastic" alt="Join to Discord"></a>
  <a href="https://github.com/thebadge/thebadge-sdk/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions welcome"></a>
  <a href="https://twitter.com/intent/user?screen_name=thebadgexyz"><img src="https://img.shields.io/twitter/follow/thebadgexyz?style=social" alt="Follow us on Twitter"></a>
  <a href="https://github.com/thebadge/thebadge-sdk/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT licensed"></a>
  <a href="https://github.com/thebadge/thebadge-sdk/releases"><img src="https://img.shields.io/github/v/release/thebadge/thebadge-sdk?label=Latest%20Release" alt="Latest release"></a>
</p>

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
      name: 'infura',
    
      // your infura/alchemy apiKey
      apiKey: '00000000000000', 
    }, 
        
    // OPTIONAL: web3Provider instance, needed for write methods e.g. mint badge
    web3Provider,
        
    // OPTIONAL: use dev mode (relevant only on testnets where qa env is default), 
    // default value: false
    devMode: true,  
  }
)
```

## Supported chains

Get the list of supported chain ids:
```
TheBadgeSDK.getSupportedChainIds()
```

Check if a chain is supported:
```
TheBadgeSDK.isChainSupported(chainId)
// chainId is a number, for example: 1, 5, etc
```

## Sources of information

- [Used smart contracts deployed](./src/contracts/contracts.ts)
- Subgraphs: 
  - [dev subgraphs urls](src/subgraph/dev/endpoints.ts)
  - [staging subgraphs urls](src/subgraph/staging/endpoints.ts)
  - [prod subgraphs urls](src/subgraph/prod/endpoints.ts)
