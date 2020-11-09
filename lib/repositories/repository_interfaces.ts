export interface RepositoryEntity<T = object> {
  id?: string | number;
  data?: T
}

export interface HTTPRepositoryEntity<T = object> extends RepositoryEntity {
  url: string;
  cursor?: string;
}

export interface Repository {
  Query (request: RepositoryEntity): Promise<RepositoryEntity>
  ReadResource (request: RepositoryEntity): Promise<RepositoryEntity>
  WriteResource (request: RepositoryEntity): Promise<RepositoryEntity>
  DestroyResource (request: RepositoryEntity): Promise<RepositoryEntity>
}
