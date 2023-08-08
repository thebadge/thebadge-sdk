import { RPCProvider } from '@businessLogic/chains'
import { BadgesService } from './badges'

describe('BadgesService', () => {
  it('should check service initialization', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgesService = new BadgesService(5, { rpcProviderConfig: { name: RPCProvider.infura, token: '' } })
    expect(badgesService).not.toBeUndefined()
    expect('get' in badgesService).toBeTruthy()
    expect('notExistingMethod' in badgesService).toBeFalsy()
  })
})
