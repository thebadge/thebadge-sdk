import { RPCProvider, RPCProviderConfig, TheBadgeSDK, TheBadgeSDKEnv, TheBadgeSDKPermissions } from './index'
import { Web3Provider } from '@ethersproject/providers'
import { SupportedChains } from '@businessLogic/chains'

describe('TheBadgeSDK', () => {
  const infuraProvider: RPCProviderConfig = { name: RPCProvider.infura, apiKey: '' }
  const alchemyProvider: RPCProviderConfig = { name: RPCProvider.alchemy, apiKey: '' }
  let sampleSDK: TheBadgeSDK

  beforeEach(() => {
    sampleSDK = new TheBadgeSDK(5, { rpcProviderConfig: infuraProvider })
  })

  it('should check if a chain id is supported or not', () => {
    expect(TheBadgeSDK.isChainSupported(5)).toBeTruthy() // goerli is supported
    expect(TheBadgeSDK.isChainSupported(11155111)).toBeTruthy() // sepolia is supported
    expect(TheBadgeSDK.isChainSupported(100)).toBeTruthy() // gnosis is supported
    expect(TheBadgeSDK.isChainSupported(42161)).toBeFalsy() // arbitrum is not supported
    expect(TheBadgeSDK.isChainSupported(56)).toBeFalsy() // bnb is not supported
  })

  it('should initialize a TheBadgeSDK instance correctly', () => {
    const sdk1 = new TheBadgeSDK(5, { rpcProviderConfig: infuraProvider })
    expect(sdk1.getChainId()).toBe(5)
    expect(sdk1.getRPCProviderName()).toBe(RPCProvider.infura)
    expect(sdk1.getEnv()).toBe(TheBadgeSDKEnv.STAGING)
    expect(sdk1.getWeb3Provider()).toBeUndefined()
    expect(sdk1.getPermissions()).toBe(TheBadgeSDKPermissions.READ_ONLY)

    const sdk2 = new TheBadgeSDK(11155111, { rpcProviderConfig: alchemyProvider })
    expect(sdk2.getChainId()).toBe(11155111)
    expect(sdk2.getRPCProviderName()).toBe(RPCProvider.alchemy)
    expect(sdk2.getEnv()).toBe(TheBadgeSDKEnv.STAGING)
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
    expect(sdk3.getEnv()).toBe(TheBadgeSDKEnv.DEVELOPMENT)
    expect(sdk3.getWeb3Provider()).not.toBeUndefined()
    expect(sdk3.getPermissions()).toBe(TheBadgeSDKPermissions.READ_AND_WRITE)

    // TODO add test checking init prod sdk when a mainnet chain is available
  })

  it('should initialize the needed services correctly', () => {
    // badges service
    expect(sampleSDK.badges).not.toBeUndefined()
    expect(sampleSDK.badges.get).not.toBeUndefined()

    // badge models service
    expect(sampleSDK.badgeModels).not.toBeUndefined()
    expect(sampleSDK.badgeModels.get).not.toBeUndefined()

    // users service
    expect(sampleSDK.users).not.toBeUndefined()
    expect(sampleSDK.users.getIds).not.toBeUndefined()
  })

  it('should return the supported chain ids', () => {
    const supportedChainIds = Object.values(SupportedChains) as Array<number>
    expect(TheBadgeSDK.getSupportedChainIds()).toEqual(supportedChainIds)
  })

  it.each([
    ['Goerli', SupportedChains.goerli, true],
    ['Sepolia', SupportedChains.sepolia, true],
    ['Gnosis', SupportedChains.gnosis, true],
    ['Eth Mainnet', 1, false], // not yet supported
    ['Avalanche', 43114, false],
  ])('should check that chain %s (id: %s) is supported: %s', (chainName, chainId, isSupported) => {
    expect(TheBadgeSDK.isChainSupported(chainId)).toBe(isSupported)
  })
})
