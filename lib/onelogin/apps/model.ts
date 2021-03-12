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
