import { expect } from '../main.test'

import OneLoginUsersRepository from '../../lib/onelogin/users/users'
import { User } from '../../lib/onelogin/users/model'
import { OneLoginResponse } from '../../lib/onelogin/interfaces'
import { Repository, RepositoryEntity, HTTPRepositoryEntity } from '../../lib/repositories/repository_interfaces'

class TestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    if( request.data && request.data.hasOwnProperty('connector_id')){
      return { data: [ {username: "first", email: "first@onelogin.com", id: 1} ] }
    }
    return {
      status: 200,
      data: [
        {username: "first", email: "first@onelogin.com", id: 1},
        {username: "second", email: "second@onelogin.com", id: 2}
      ]
    }
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return {data: {username: "first", email: "first@onelogin.com", id: 1}, status: 200}
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    if( request.id ) return {data: {username: "updated_username", email: "user@onelogin.com", id: 1}}
    return {data: {username: "user", email: "user@onelogin.com", id: 1}, status: 201}
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: {}, status: 200 }
  }
}

class ErrorTestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: [ ], status: 500, error: "Its Borked" } // Didnt find any or an error huserened
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, status: 500, error: "Its Borked" } // no response or an error
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, status: 500, error: "Its Borked" } // no response or an error
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, status: 500, error: "Its Borked" } // no response or an error
  }
}

describe('Happy Paths', () => {
  it('Indexes the Users', async () => {
    let usersRepo = new OneLoginUsersRepository(new TestRepository())
    let allUsers = await usersRepo.Query()
    let specialUser = await usersRepo.Query({email: "first@onelogin.com"}) as OneLoginResponse<User[]>
    expect(allUsers.data).to.have.deep.members([
      {username: "first", email: "first@onelogin.com", id: 1},
      {username: "second", email: "second@onelogin.com", id: 2}
    ])
    expect(specialUser.data[0]).to.eql({username: "first", email: "first@onelogin.com", id: 1})
  })
  it('Retrieves an User by ID', async () => {
    let usersRepo = new OneLoginUsersRepository(new TestRepository())
    let user = await usersRepo.FindByID(123)
    expect(user.data).to.eql({username: "first", email: "first@onelogin.com", id: 1})
  })
  it('Creates an User', async () => {
    let usersRepo = new OneLoginUsersRepository(new TestRepository())
    let user = await usersRepo.Create({email: "user@onelogin.com", username: "user"})
    expect(user.data).to.eql({email: "user@onelogin.com", username: "user", id: 1})
  })
  it('Updates an User', async () => {
    let usersRepo = new OneLoginUsersRepository(new TestRepository())
    let user = await usersRepo.Update({id: 1, username: "updated_username", email: "user@onelogin.com"})
    expect(user.data).to.eql({username: "updated_username", email: "user@onelogin.com", id: 1})
  })
  it('Destroys an User', async () => {
    let usersRepo = new OneLoginUsersRepository(new TestRepository())
    let user = await usersRepo.Destroy(1)
    expect(user.data).to.eql({})
  })
})

describe('Sad Paths', () => {
  it('Returns an null data and an error if index reports an error', async () => {
    let usersRepo = new OneLoginUsersRepository(new ErrorTestRepository())
    let allUsers = await usersRepo.Query()
    let specialUser = await usersRepo.Query({email: "first@onelogin.com"}) as OneLoginResponse<User[]>
    expect(specialUser.data).to.equal(null)
    expect(specialUser.error).to.equal(`Its Borked`)
  })
  it('Throws an error if ReadResource fails', async () => {
    let usersRepo = new OneLoginUsersRepository(new ErrorTestRepository())
    let userResponse = await usersRepo.FindByID(123)
    expect(userResponse.data).to.eql(null)
    expect(userResponse.error).to.equal(`Its Borked`)
  })
  it('Throws an error if Create fails', async () => {
    let usersRepo = new OneLoginUsersRepository(new ErrorTestRepository())
    let userResponse = await usersRepo.Create({})
    expect(userResponse.data).to.eql(null)
    expect(userResponse.error).to.equal(`Its Borked`)
  })
  it('Throws an error if no ID given on Update', async () => {
    let usersRepo = new OneLoginUsersRepository(new ErrorTestRepository())
    expect(usersRepo.Update({})).to.eventually.throw()
  })
  it('Throws an error if Update fails', async () => {
    let usersRepo = new OneLoginUsersRepository(new ErrorTestRepository())
    let userResponse = await usersRepo.Update({id: 3})
    expect(userResponse.data).to.eql(null)
    expect(userResponse.error).to.equal(`Its Borked`)
  })
  it('Throws an error if Delete fails', async () => {
    let usersRepo = new OneLoginUsersRepository(new ErrorTestRepository())
    let userResponse = await usersRepo.Destroy(0)
    expect(userResponse.data).to.eql(null)
    expect(userResponse.error).to.equal(`Its Borked`)
  })
})
