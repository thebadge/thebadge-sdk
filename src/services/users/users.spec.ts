import { RPCProvider } from '@businessLogic/chains'
import { UsersService } from './users'

describe('UsersService', () => {
  it('should check service initialization', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const usersService = new UsersService(5, { rpcProviderConfig: { name: RPCProvider.infura, token: '' } })
    expect(usersService).not.toBeUndefined()
    expect('get' in usersService).toBeFalsy()
    expect('getIds' in usersService).toBeTruthy()
  })
})
