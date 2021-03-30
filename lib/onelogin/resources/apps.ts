import { Repository, RepositoryEntity, HTTPRepositoryEntity } from '../../repositories/interface'
import { OneLoginResponse } from '../interface'

export default class OneLoginAppsRepository {
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

export interface App {
  connector_id?:         number
  name?:                 string
  id?:                   number
  auth_method?:          number
  policy_id?:            number
  tab_id?:               number
  description?:          string
  notes?:                string
  icon_url?:             string
  created_at?:           string
  updated_at?:           string
  visible?:              boolean
  allow_assumed_signin?: boolean
  role_ids?:             number[]
  configuration?:        AppConfiguration
  provisioning?:         { enabled?: boolean }
  parameters?:           { [key: string]: AppParameter }
  sso?: {
    client_id?:     string
    client_secret?: string
    metadata_url?:  string
    acs_url?:       string
    sls_url?:       string
    issuer?:        string
    certificate?: { id?: number; name?: string; value?: string }
  }
}

export interface AppConfiguration {
	refresh_token_expiration_minutes?:   number
	oidc_application_type?:              number
	token_endpoint_auth_method?:         number
	access_token_expiration_minutes?:    number
	redirect_uri?:                       string
	login_url?:                          string
	provider_arn?:                       string
	signature_algorithm?:                string
	logout_url?:                         string
	audience?:                           string
	consumer_url?:                       string
	login?:                              string
	recipient?:                          string
	validator?:                          string
	relay_state?:                        string
	saml_not_valid_on_or_after?:         string
	generate_attribute_value_tags?:      string
	saml_initiater_id?:                  string
	saml_not_valid_before?:              string
	saml_issuer_type?:                   string
	saml_sign_element?:                  string
	encrypt_assertion?:                  string
	saml_session_not_valid_on_or_after?: string
	saml_encryption_method_id?:          string
	saml_name_id_format_id?:             string
}

export interface AppParameter {
	id?:                         number
	label?:                      string
	user_attribute_mappings?:    string
	user_attribute_macros?:      string
	attributes_transformations?: string
	values?:                     string
	default_values?:             string
	param_key_name?:             string
  skip_if_blank?:              boolean
	provisioned_entitlements?:   boolean
	safe_entitlements_enabled?:  boolean
	include_in_saml_assertion?:  boolean
}
