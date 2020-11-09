import { Repository, RepositoryEntity, HTTPRepositoryEntity } from '../../repositories/repository_interfaces'
import { App } from './model'

export class OneLoginAppsRepository {
  repository: Repository
  endpoint: string

  constructor(repository: Repository){
    this.repository = repository
    this.endpoint = "/api/2/apps"
  }

  Query = async (query?: object): Promise<App[]> => {
    let request: HTTPRepositoryEntity<App> = { data: query, url: this.endpoint }
    let result = await this.repository.Query(request)
    let apps: App[] = result.data as App[]
    return apps
  }

  FindByID = async (id: number): Promise<App> => {
    let request: HTTPRepositoryEntity<App> = { id, url: this.endpoint }
    let result: RepositoryEntity<App> = await this.repository.ReadResource(request)
    if( !result ) throw new Error("Unable to locate resource")
    return {...result.data}
  }

  Create = async(app: App): Promise<App> => {
    let request: HTTPRepositoryEntity<App> = { data: app, url: this.endpoint }
    let result: RepositoryEntity<App> = await this.repository.WriteResource(request)
    if( !result ) throw new Error("Unable to create resource")
    return {...result.data}
  }

  Update = async(app: App): Promise<App> => {
    let appID = app.id
    delete app.id
    if( !appID ) throw new Error("Resource ID must be given")
    let request: HTTPRepositoryEntity<App> = { id: appID, data: app, url: this.endpoint }
    let result: RepositoryEntity<App> = await this.repository.WriteResource(request)
    if( !result ) throw new Error("Unable to update resource")
    return {...result.data}
  }

  Destroy = async(id: number): Promise<object> => {
    let request: HTTPRepositoryEntity<App> = { id, url: this.endpoint }
    let result: RepositoryEntity<object> = await this.repository.DestroyResource(request)
    return {...result.data}
  }
}
