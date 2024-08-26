import { BadgeModelsService } from './badgeModels'
import { RPCProvider } from '@businessLogic/chains'

describe('BadgeModelsService', () => {
  it('should check service initialization', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgeModelsService = new BadgeModelsService(11155111, {
      rpcProviderConfig: { name: RPCProvider.infura, apiKey: '' },
    })
    expect(badgeModelsService).not.toBeUndefined()
    expect('get' in badgeModelsService).toBeTruthy()
    expect('notExistingMethod' in badgeModelsService).toBeFalsy()
  })
  it('should query a tp model and should return data', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgeModelsService = new BadgeModelsService(11155111, {
      rpcProviderConfig: { name: RPCProvider.infura, apiKey: '' },
    })

    const metadata = await badgeModelsService.getMetadataOfBadgeModel(2)

    expect(metadata.badgeModelThirdPartyMetaData.id).toBe('2')
    expect(badgeModelsService).not.toBeUndefined()
    expect('get' in badgeModelsService).toBeTruthy()
    expect('notExistingMethod' in badgeModelsService).toBeFalsy()
  })
  it('should query a kleros model and should return data', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgeModelsService = new BadgeModelsService(11155111, {
      rpcProviderConfig: { name: RPCProvider.infura, apiKey: '' },
    })

    const metadata = await badgeModelsService.getMetadataOfBadgeModel(12)

    expect(metadata.badgeModelKlerosMetaData.id).toBe('12')
    expect(badgeModelsService).not.toBeUndefined()
    expect('get' in badgeModelsService).toBeTruthy()
    expect('notExistingMethod' in badgeModelsService).toBeFalsy()
  })
  it('should return the evidences list for tpBadgeModel', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgeModelsService = new BadgeModelsService(11155111, {
      rpcProviderConfig: { name: RPCProvider.infura, apiKey: '' },
    })

    const metadata = await badgeModelsService.getEvidenceRequirementsOfBadgeModel(2)

    expect(metadata.length).toBe(1)
    expect(badgeModelsService).not.toBeUndefined()
    expect('get' in badgeModelsService).toBeTruthy()
    expect('notExistingMethod' in badgeModelsService).toBeFalsy()
  })
})
