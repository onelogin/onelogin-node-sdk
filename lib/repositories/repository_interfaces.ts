/**
  RepositoryEntity
  @describe The data envelope for passing data between repository and consumer
*/
export interface RepositoryEntity<T = object> {
  id?: string | number;
  data?: T
}

/**
  HTTPRepositoryEntity
  @describe Adds additional fields to the RepositoryEntity for interfacing with HTTP APIs
*/
export interface HTTPRepositoryEntity<T = object> extends RepositoryEntity {
  url: string;
  status?: number;
  cursor?: string;
}

/**
  Repository
  @describe An interface for managing data via a repository
*/
export interface Repository {
  /**
    Queries the repository with given request or retrieves all entries if no request specified
    @async
    @param {RepositoryEntity} request - a set of keys and values to search on
    @returns {Promise<RepositoryEntity>} - The results of the lookup
  */
  Query (request: RepositoryEntity): Promise<RepositoryEntity>
  /**
    Finds one entry in the repository with the given ID
    @async
    @param {RepositoryEntity} request - must contain an ID to search on
    @returns {Promise<RepositoryEntity>} - The results of the lookup
  */
  ReadResource (request: RepositoryEntity): Promise<RepositoryEntity>
  /**
    Adds a resource to the repository if no ID is specified on the request. Updates item with that specified ID if given
    @async
    @param {RepositoryEntity} request - a set of key/value pairs representing the desired state of the resource
    @returns {Promise<RepositoryEntity>} - The results of the insertion or update
  */
  WriteResource (request: RepositoryEntity): Promise<RepositoryEntity>
  /**
    Removes resource from repository with the given criteria (usually the ID)
    @async
    @param {RepositoryEntity} request - a set of keys and values to search on
    @returns {Promise<RepositoryEntity>} - The results of the deletion
  */
  DestroyResource (request: RepositoryEntity): Promise<RepositoryEntity>
}
