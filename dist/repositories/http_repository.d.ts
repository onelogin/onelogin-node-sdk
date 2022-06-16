/**
  HTTPRepository
  @describe An implimentation of the Repository interface that utilizes an http client for persistence
*/
import { HTTPClient } from '../http_clients/interface';
import { Repository, RepositoryEntity, HTTPRepositoryEntity } from './interface';
export default class HTTPRepository implements Repository {
    client: HTTPClient;
    /**
      Creates a reference to the initialized HTTP client used in requests
      @constructor
      @param {HTTPClient} client - The preconfigured http based client for the http API
    */
    constructor(client: HTTPClient);
    /**
      Continually request all resources by sending the specified next cursor value until the
      API stops responding with the specified cursor header
      @async
      @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
      @returns {Promise<HTTPRepositoryEntity[]>} - Eventually returns an array of resources
      returns empty list if there was a problem executing the request
    */
    Query: (request: HTTPRepositoryEntity) => Promise<RepositoryEntity>;
    /**
      Request a resource by id, or via some query parameters
      @async
      @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
      @returns {Promise<HTTPRepositoryEntity>} - Eventually returns the resource
      returns nothing if there was a problem executing the request
    */
    ReadResource: (request: HTTPRepositoryEntity) => Promise<RepositoryEntity>;
    /**
      Create or Update a resource by id
      @async
      @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
      @returns {Promise<HTTPRepositoryEntity>} - Eventually returns some indication that the write request was accepted.
      returns nothing if there was a problem executing the request
    */
    WriteResource: (request: HTTPRepositoryEntity) => Promise<RepositoryEntity>;
    /**
      Destroy a resource by id
      @async
      @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
    */
    DestroyResource: (request: HTTPRepositoryEntity) => Promise<{
        data: {};
        error?: undefined;
    } | {
        error: string;
        data?: undefined;
    }>;
    List: (request: HTTPRepositoryEntity) => Promise<{
        data: any;
        error?: undefined;
    } | {
        error: string;
        data?: undefined;
    }>;
}
