import { expect } from '../main.test'

import { OneLoginAppsRepository } from '../../lib/onelogin/apps/apps'
import { App } from '../../lib/onelogin/apps/model'
import { OneLoginResponse } from '../../lib/onelogin/interfaces'
import { Repository, RepositoryEntity, HTTPRepositoryEntity } from '../../lib/repositories/repository_interfaces'

class TestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    if( request.data && request.data.hasOwnProperty('connector_id')){
      return { data: [ {name: "first", connector_id: 123, id: 1} ] }
    }
    return {
      status: 200,
      data: [
        {name: "first", connector_id: 123, id: 1},
        {name: "second", connector_id: 575, id: 2}
      ]
    }
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return {data: {name: "first", connector_id: 123, id: 1}, status: 200}
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    if( request.id ) return {data: {name: "updated_resource", connector_id: 123, id: 1}}
    return {data: {name: "app", connector_id: 123, id: 1}, status: 201}
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: {}, status: 200 }
  }
}

class ErrorTestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: [ ], status: 500 } // Didnt find any or an error happened
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, status: 500 } // no response or an error
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, status: 500 } // no response or an error
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, status: 500 } // no response or an error
  }
}

describe('Happy Paths', () => {
  it('Indexes the Apps', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let allApps = await appsRepo.Query()
    let specialApp = await appsRepo.Query({connector_id: 123}) as OneLoginResponse<App[]>
    expect(allApps.data).to.have.deep.members([
      {name: "first", connector_id: 123, id: 1},
      {name: "second", connector_id: 575, id: 2}
    ])
    expect(specialApp.data[0]).to.eql({name: "first", connector_id: 123, id: 1})
  })
  it('Retrieves an App by ID', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.FindByID(123)
    expect(app.data).to.eql({name: "first", connector_id: 123, id: 1})
  })
  it('Creates an App', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.Create({name: "app", connector_id: 123})
    expect(app.data).to.eql({name: "app", connector_id: 123, id: 1})
  })
  it('Updates an App', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.Update({id: 1, name: "updated_resource", connector_id: 123})
    expect(app.data).to.eql({name: "updated_resource", connector_id: 123, id: 1})
  })
  it('Destroys an App', async () => {
    let appsRepo = new OneLoginAppsRepository(new TestRepository())
    let app = await appsRepo.Destroy(1)
    expect(app.data).to.eql({})
  })
})

describe('Sad Paths', () => {
  it('Returns an empty array if index reports an error', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    let allApps = await appsRepo.Query()
    let specialApp = await appsRepo.Query({connector_id: 123}) as OneLoginResponse<App[]>
    expect(specialApp.data).to.equal(null)
    expect(specialApp.error.httpStatusCode).to.equal(500)
  })
  it('Throws an error if ReadResource fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    let appResponse = await appsRepo.FindByID(123)
    expect(appResponse.data).to.eql(null)
    expect(appResponse.error.httpStatusCode).to.equal(500)
  })
  it('Throws an error if Create fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    let appResponse = await appsRepo.Create({})
    expect(appResponse.data).to.eql(null)
    expect(appResponse.error.httpStatusCode).to.equal(500)
  })
  it('Throws an error if no ID given on Update', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    expect(appsRepo.Update({})).to.eventually.throw()
  })
  it('Throws an error if Update fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    let appResponse = await appsRepo.Update({id: 3})
    expect(appResponse.data).to.eql(null)
    expect(appResponse.error.httpStatusCode).to.equal(500)
  })
  it('Throws an error if Delete fails', async () => {
    let appsRepo = new OneLoginAppsRepository(new ErrorTestRepository())
    let appResponse = await appsRepo.Destroy(0)
    expect(appResponse.data).to.eql(null)
    expect(appResponse.error.httpStatusCode).to.equal(500)
  })
})
