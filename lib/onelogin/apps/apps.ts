import { Repository, RepositoryEntity, HTTPRepositoryEntity } from '../../repositories/repository_interfaces'
import { OneLoginResponse } from '../interfaces'
import { App } from './model'

export class OneLoginAppsRepository {
  repository: Repository
  endpoint: string

  constructor(repository: Repository){
    this.repository = repository
    this.endpoint = "/api/2/apps"
  }

  Query = async (query?: object): Promise<OneLoginResponse<App[]>> => {
    let request: HTTPRepositoryEntity<App> = { data: query, url: this.endpoint }
    let result: RepositoryEntity<App> = await this.repository.Query(request)
    if( result.error ) return{ data: null, error: result.error }
    let apps: App[] = result.data as App[]
    return { data: apps }
  }

  FindByID = async (id: number): Promise<OneLoginResponse<App>> => {
    let request: HTTPRepositoryEntity<App> = { id, url: this.endpoint }
    let result = await this.repository.ReadResource(request) as HTTPRepositoryEntity<App>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }

  Create = async(app: App): Promise<OneLoginResponse<App>> => {
    let request: HTTPRepositoryEntity<App> = { data: app, url: this.endpoint }
    let result = await this.repository.WriteResource(request) as HTTPRepositoryEntity<App>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }

  Update = async(app: App): Promise<OneLoginResponse<App>> => {
    let appID = app.id
    delete app.id
    if( !appID ) throw new Error("Resource ID must be given")
    let request: HTTPRepositoryEntity<App> = { id: appID, data: app, url: this.endpoint }
    let result = await this.repository.WriteResource(request) as HTTPRepositoryEntity<App>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }

  Destroy = async(id: number): Promise<OneLoginResponse<object>> => {
    let request: HTTPRepositoryEntity<App> = { id, url: this.endpoint }
    let result= await this.repository.DestroyResource(request) as HTTPRepositoryEntity<object>
    if( result.error ) return{ data: null, error: result.error }
    return { data: result.data }
  }
}
