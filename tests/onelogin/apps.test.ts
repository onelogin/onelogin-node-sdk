import { expect, GoodTestRepository, BadTestRepository  } from '../main.test'
import OneLoginAppsRepository, { App } from '../../lib/onelogin/resources/apps'
import { OneLoginResponse } from '../../lib/onelogin/interface'

describe('Happy Paths', () => {
  let mockData = new GoodTestRepository([
    {name: "first", connector_id: 123, id: 1},
    {name: "second", connector_id: 575, id: 2}
  ])
  let repo = new OneLoginAppsRepository(mockData)

  it('Indexes the Apps', async () => {
    let all = await repo.Query()
    let searched = await repo.Query({connector_id: 123}) as OneLoginResponse<App[]>
    expect(all.data).to.have.deep.members([
      {name: "first", connector_id: 123, id: 1},
      {name: "second", connector_id: 575, id: 2}
    ])
    expect(searched.data[0]).to.eql({name: "first", connector_id: 123, id: 1})
    expect(all.error).to.eql(undefined)
    expect(searched.error).to.eql(undefined)
  })
  it('Retrieves an App by ID', async () => {
    let {data, error} = await repo.FindByID(0)
    expect(data).to.eql({name: "first", connector_id: 123, id: 1})
    expect(error).to.eql(undefined)
  })
  it('Creates an App', async () => {
    let {data, error} = await repo.Create({name: "name", connector_id: 123})
    expect(data).to.eql({name: "name", connector_id: 123, id: 1})
    expect(error).to.eql(undefined)
  })
  it('Updates an App', async () => {
    let {data, error} = await repo.Update({id: 1, name: "updated_resource", connector_id: 123})
    expect(data).to.eql({name: "updated_resource", connector_id: 123, id: 1})
    expect(error).to.eql(undefined)
  })
  it('Destroys an App', async () => {
    let {data, error} = await repo.Destroy(1)
    expect(data).to.eql({})
    expect(error).to.eql(undefined)
  })
})

describe('Sad Paths', () => {
  let mockData = new BadTestRepository()
  let repo = new OneLoginAppsRepository(mockData)

  it('Returns an null data and an error if index reports an error', async () => {
    let all = await repo.Query()
    let searched = await repo.Query({connector_id: 123}) as OneLoginResponse<App[]>
    expect(all.data).to.equal(null)
    expect(searched.data).to.equal(null)
    expect(all.error).to.equal(`Its Borked`)
    expect(searched.error).to.equal(`Its Borked`)
  })
  it('Throws an error if ReadResource fails', async () => {
    let {data, error} = await repo.FindByID(123)
    expect(data).to.eql(null)
    expect(error).to.equal(`Its Borked`)
  })
  it('Throws an error if Create fails', async () => {
    let {data, error} = await repo.Create({})
    expect(data).to.eql(null)
    expect(error).to.equal(`Its Borked`)
  })
  it('Throws an error if no ID given on Update', async () => {
    expect(repo.Update({})).to.eventually.throw()
  })
  it('Throws an error if Update fails', async () => {
    let {data, error} = await repo.Update({id: 3})
    expect(data).to.eql(null)
    expect(error).to.equal(`Its Borked`)
  })
  it('Throws an error if Delete fails', async () => {
    let {data, error} = await repo.Destroy(0)
    expect(data).to.eql(null)
    expect(error).to.equal(`Its Borked`)
  })
})
