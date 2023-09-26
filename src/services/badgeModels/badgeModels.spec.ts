import { BadgeModelsService } from './badgeModels'
import { RPCProvider } from '@businessLogic/chains'

describe('BadgeModelsService', () => {
  it('should check service initialization', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgeModelsService = new BadgeModelsService(5, {
      rpcProviderConfig: { name: RPCProvider.infura, apiKey: '' },
    })
    expect(badgeModelsService).not.toBeUndefined()
    expect('get' in badgeModelsService).toBeTruthy()
    expect('notExistingMethod' in badgeModelsService).toBeFalsy()
  })
})
