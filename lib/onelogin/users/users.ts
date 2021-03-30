import { Repository, RepositoryEntity, HTTPRepositoryEntity } from '../../repositories/repository_interfaces'
import { OneLoginResponse } from '../interfaces'
import { User } from './model'

export default class OneLoginUsersRepository {
  repository: Repository
  endpoint: string

  constructor(repository: Repository){
    this.repository = repository
    this.endpoint = "/api/2/users"
  }

  Query = async (query?: object): Promise<OneLoginResponse<User[]>> => {
    let request: HTTPRepositoryEntity<User> = { data: query, url: this.endpoint }
    let result: RepositoryEntity<User> = await this.repository.Query(request)
    if( result.error ) return{ data: null, error: result.error }
    let users: User[] = result.data as User[]
    return { data: users }
  }

  FindByID = async (id: number): Promise<OneLoginResponse<User>> => {
    let request: HTTPRepositoryEntity<User> = { id, url: this.endpoint }
    let result = await this.repository.ReadResource(request) as HTTPRepositoryEntity<User>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }

  Create = async(user: User): Promise<OneLoginResponse<User>> => {
    let request: HTTPRepositoryEntity<User> = { data: user, url: this.endpoint }
    let result = await this.repository.WriteResource(request) as HTTPRepositoryEntity<User>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }

  Update = async(user: User): Promise<OneLoginResponse<User>> => {
    let userID = user.id
    delete user.id
    if( !userID ) throw new Error("Resource ID must be given")
    let request: HTTPRepositoryEntity<User> = { id: userID, data: user, url: this.endpoint }
    let result = await this.repository.WriteResource(request) as HTTPRepositoryEntity<User>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }

  Destroy = async(id: number): Promise<OneLoginResponse<object>> => {
    let request: HTTPRepositoryEntity<User> = { id, url: this.endpoint }
    let result= await this.repository.DestroyResource(request) as HTTPRepositoryEntity<object>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }
}
