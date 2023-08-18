import { RPCProvider, TheBadgeSDK, TheBadgeSDKPermissions } from './index'
import { Web3Provider } from '@ethersproject/providers'

describe('TheBadgeSDK', () => {
  const infuraProvider = { name: RPCProvider.infura, token: '' }
  const alchemyProvider = { name: RPCProvider.alchemy, token: '' }

  it('should check if a chain id is supported or not', () => {
    expect(TheBadgeSDK.isChainSupported(5)).toBeTruthy() // goerli is supported
    expect(TheBadgeSDK.isChainSupported(100)).toBeTruthy() // gnosis is supported
    expect(TheBadgeSDK.isChainSupported(42161)).toBeFalsy() // arbitrum is not supported
    expect(TheBadgeSDK.isChainSupported(56)).toBeFalsy() // bnb is not supported
  })

  it('should initialize a TheBadgeSDK instance correctly', () => {
    const sdk1 = new TheBadgeSDK(5, { rpcProviderConfig: infuraProvider })
    expect(sdk1.getChainId()).toBe(5)
    expect(sdk1.getRPCProviderName()).toBe(RPCProvider.infura)
    expect(sdk1.isDevMode()).toBeFalsy()
    expect(sdk1.getWeb3Provider()).toBeUndefined()
    expect(sdk1.getPermissions()).toBe(TheBadgeSDKPermissions.READ_ONLY)

    const sdk2 = new TheBadgeSDK(100, { rpcProviderConfig: alchemyProvider })
    expect(sdk2.getChainId()).toBe(100)
    expect(sdk2.getRPCProviderName()).toBe(RPCProvider.alchemy)
    expect(sdk2.isDevMode()).toBeFalsy()
    expect(sdk2.getWeb3Provider()).toBeUndefined()
    expect(sdk2.getPermissions()).toBe(TheBadgeSDKPermissions.READ_ONLY)

    const web3ProviderSample = new Web3Provider(() => Promise.resolve(null))
    const sdk3 = new TheBadgeSDK(5, {
      rpcProviderConfig: alchemyProvider,
      web3Provider: web3ProviderSample,
      devMode: true,
    })
    expect(sdk3.getChainId()).toBe(5)
    expect(sdk3.getRPCProviderName()).toBe(RPCProvider.alchemy)
    expect(sdk3.isDevMode()).toBeTruthy()
    expect(sdk3.getWeb3Provider()).not.toBeUndefined()
    expect(sdk3.getPermissions()).toBe(TheBadgeSDKPermissions.READ_AND_WRITE)
  })

  it('should initialize the needed services correctly', () => {
    const sdk = new TheBadgeSDK(5, { rpcProviderConfig: infuraProvider })

    // badges service
    expect(sdk.badges).not.toBeUndefined()
    expect(sdk.badges.get).not.toBeUndefined()

    // badge models service
    expect(sdk.badgeModels).not.toBeUndefined()
    expect(sdk.badgeModels.get).not.toBeUndefined()

    // users service
    expect(sdk.users).not.toBeUndefined()
    expect(sdk.users.getIds).not.toBeUndefined()
  })
})