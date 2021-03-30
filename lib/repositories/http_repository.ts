/**
  HTTPRepository
  @describe An implimentation of the Repository interface that utilizes an http client for persistence
*/

import { HTTPClient } from '../http_clients/interface'
import { Repository, RepositoryEntity, HTTPRepositoryEntity } from './repository_interfaces'

export class HTTPRepository implements Repository {
  client: HTTPClient

  /**
    Creates a reference to the initialized HTTP client used in requests
    @constructor
    @param {HTTPClient} client - The preconfigured http based client for the http API
  */
  constructor(client: HTTPClient) {
    this.client = client
  }

  /**
    Continually request all resources by sending the specified next cursor value until the
    API stops responding with the specified cursor header
    @async
    @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
    @returns {Promise<HTTPRepositoryEntity[]>} - Eventually returns an array of resources
    returns empty list if there was a problem executing the request
  */
  Query = async (request: HTTPRepositoryEntity): Promise<RepositoryEntity> => {
    let {data, headers, status} = await this.client.Do({
      url: request.url,
      params: request.data,
      method: "get"
    })

    let result = Array.isArray(data) ? data : [data]
    if( headers[request.cursor] ){
      for(;;){
        let {data, headers, status} = await this.client.Do({
          url: request.url,
          method: "get",
          params: { cursor: request.cursor, ...request.data, }
        })
        result = result.concat(data)
        if( status >= 400 || !headers[request.cursor] ) break
      }
    }
    console.log(`Exectued Query and got Response ${status} From API`)
    if( status < 400 ) {
      return { data: result }
    } else {
      return { error: `There was a problem retrieving all the results: ${data.message}` }
    }
  }

  /**
    Request a resource by id, or via some query parameters
    @async
    @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
    @returns {Promise<HTTPRepositoryEntity>} - Eventually returns the resource
    returns nothing if there was a problem executing the request
  */
  ReadResource = async (request: HTTPRepositoryEntity): Promise<RepositoryEntity> => {
    let {data, status} =  await this.client.Do({
      url: request.id ? `${request.url}/${request.id}` : request.url,
      params: request.data,
      method: "get",
    })
    console.log(`Exectued Read and got Response ${status} From API`)
    if( status < 400 ) {
      return { data }
    } else {
      return { error: `There was a problem reading the resource: ${data.message}` }
    }
  }

  /**
    Create or Update a resource by id
    @async
    @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
    @returns {Promise<HTTPRepositoryEntity>} - Eventually returns some indication that the write request was accepted.
    returns nothing if there was a problem executing the request
  */
  WriteResource = async (request: HTTPRepositoryEntity): Promise<RepositoryEntity> => {
    let {data, status} =  await this.client.Do({
      url: request.id ? `${request.url}/${request.id}` : request.url,
      data: request.data,
      method: request.id ? "put" : "post",
    })
    console.log(`Exectued Write and got Response ${status} From API`)
    if( status < 400 ) {
      return { data }
    } else {
      return { error: `There was a problem writing the resource: ${data.message}` }
    }
  }

  /**
    Destroy a resource by id
    @async
    @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
  */
  DestroyResource = async (request: HTTPRepositoryEntity) => {
    let {data, status} = await this.client.Do({
      url: `${request.url}/${request.id}`,
      method: "delete"
    })
    console.log(`Exectued Delete and got Response ${status} From API`)
    if( status < 400 ) {
      return { data: {} }
    } else {
      return { error: `There was a problem destroying the resource: ${data.message}` }
    }
  }
}
