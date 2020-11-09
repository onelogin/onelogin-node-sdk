import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

const expect = chai.expect

import { OneLoginAppsRepository } from '../../lib/onelogin/apps/apps'
import { App } from '../../lib/onelogin/apps/model'
import { Repository, RepositoryEntity } from '../../lib/repositories/repository_interfaces'

class TestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    if( request.data && request.data.hasOwnProperty('connector_id')){
      return { data: [ {name: "first", connector_id: 123, id: 1} ] }
    }
    return { data: [
      {name: "first", connector_id: 123, id: 1},
      {name: "second", connector_id: 575, id: 2}
    ] }
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    return {data: {name: "first", connector_id: 123, id: 1}}
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    if( request.id ) return {data: {name: "updated_resource", connector_id: 123, id: 1}}
    return {data: {name: "app", connector_id: 123, id: 1}}
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    return { data: {} }
  }
}

class ErrorTestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    return { data: [ ] } // Didnt find any or an error happened
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    return // no response or an error
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    return // no response or an error
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity> => {
    return // no response or an error
  }
}

describe('Happy Paths', () => {
  it('Indexes the Apps', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let allApps = await appsRepo.Query()
    let specialApp = await appsRepo.Query({connector_id: 123}) as App[]
    expect(allApps).to.have.deep.members([
      {name: "first", connector_id: 123, id: 1},
      {name: "second", connector_id: 575, id: 2}
    ])
    expect(specialApp[0]).to.eql({name: "first", connector_id: 123, id: 1})
  })
  it('Retrieves an App by ID', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.FindByID(123)
    expect(app).to.eql({name: "first", connector_id: 123, id: 1})
  })
  it('Creates an App', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.Create({name: "app", connector_id: 123})
    expect(app).to.eql({name: "app", connector_id: 123, id: 1})
  })
  it('Updates an App', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.Update({id: 1, name: "updated_resource", connector_id: 123})
    expect(app).to.eql({name: "updated_resource", connector_id: 123, id: 1})
  })
  it('Destroys an App', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.Destroy(1)
    expect(app).to.eql({})
  })
})

describe('Sad Paths', () => {
  it('Returns an empty array if index reports an error', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    let allApps = await appsRepo.Query()
    let specialApp = await appsRepo.Query({connector_id: 123}) as App[]
    expect(allApps).to.eql([])
    expect(specialApp[0]).to.equal(undefined)
  })
  it('Throws an error if ReadResource fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    expect( appsRepo.FindByID(123) ).to.eventually.throw()
  })
  it('Throws an error if Create fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    expect( appsRepo.Create({}) ).to.eventually.throw()
  })
  it('Throws an error if no ID given on Update', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    expect( appsRepo.Update({}) ).to.eventually.throw()
  })
  it('Throws an error if Update fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    expect( appsRepo.Update({id: 3}) ).to.eventually.throw()
  })
  it('Throws an error if Delete fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    expect( appsRepo.Destroy(0) ).to.eventually.throw()
  })
})
