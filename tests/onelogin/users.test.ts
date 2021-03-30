import { expect, GoodTestRepository, BadTestRepository  } from '../main.test'
import OneLoginUsersRepository, { User } from '../../lib/onelogin/resources/users'
import { OneLoginResponse } from '../../lib/onelogin/interface'

describe('Husery Paths', () => {
  let mockData = new GoodTestRepository([
    {username: "first", email: "first@onelogin.com", id: 1},
    {username: "second", email: "second@onelogin.com", id: 2}
  ])
  let repo = new OneLoginUsersRepository(mockData)

  it('Indexes the Users', async () => {
    let all = await repo.Query()
    let searched = await repo.Query({email: "first@onelogin.com"}) as OneLoginResponse<User[]>
    expect(all.data).to.have.deep.members([
      {username: "first", email: "first@onelogin.com", id: 1},
      {username: "second", email: "second@onelogin.com", id: 2}
    ])
    expect(searched.data[0]).to.eql({username: "first", email: "first@onelogin.com", id: 1})
    expect(all.error).to.eql(undefined)
    expect(searched.error).to.eql(undefined)
  })
  it('Retrieves an User by ID', async () => {
    let {data, error} = await repo.FindByID(0)
    expect(data).to.eql({username: "first", email: "first@onelogin.com", id: 1})
    expect(error).to.eql(undefined)
  })
  it('Creates an User', async () => {
    let {data, error} = await repo.Create({username: "name", email: "name@onelogin.com"})
    expect(data).to.eql({username: "name", email: "name@onelogin.com", id: 1})
    expect(error).to.eql(undefined)
  })
  it('Updates an User', async () => {
    let {data, error} = await repo.Update({id: 1, username: "updated_resource", email: "first@onelogin.com"})
    expect(data).to.eql({username: "updated_resource", email: "first@onelogin.com", id: 1})
    expect(error).to.eql(undefined)
  })
  it('Destroys an User', async () => {
    let {data, error} = await repo.Destroy(1)
    expect(data).to.eql({})
    expect(error).to.eql(undefined)
  })
})

describe('Sad Paths', () => {
  let mockData = new BadTestRepository()
  let repo = new OneLoginUsersRepository(mockData)

  it('Returns an null data and an error if index reports an error', async () => {
    let all = await repo.Query()
    let searched = await repo.Query({email: "first@onelogin.com"}) as OneLoginResponse<User[]>
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
