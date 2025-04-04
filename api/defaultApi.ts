import localVarRequest from "request";
import http from "http";

/* tslint:disable:no-unused-locals */
import { ActivateFactorRequest } from "../model/activateFactorRequest";
import { AddAccessTokenClaimRequest } from "../model/addAccessTokenClaimRequest";
import { AddClientAppRequest } from "../model/addClientAppRequest";
import { AddRoleUsers200ResponseInner } from "../model/addRoleUsers200ResponseInner";
import { AddScopeRequest } from "../model/addScopeRequest";
import { AuthMethod } from "../model/authMethod";
import { ClientApp } from "../model/clientApp";
import { Connector } from "../model/connector";
import { CreateAuthorizationServerRequest } from "../model/createAuthorizationServerRequest";
import { CreateEnvironmentVariableRequest } from "../model/createEnvironmentVariableRequest";
import { CreateRoles201ResponseInner } from "../model/createRoles201ResponseInner";
import { Device } from "../model/device";
import { EnrollFactorRequest } from "../model/enrollFactorRequest";
import { Envvar } from "../model/envvar";
import { ErrorStatus } from "../model/errorStatus";
import { FactorInner } from "../model/factorInner";
import { GenerateMfaToken200Response } from "../model/generateMfaToken200Response";
import { GenerateMfaToken422Response } from "../model/generateMfaToken422Response";
import { GenerateMfaTokenRequest } from "../model/generateMfaTokenRequest";
import { GenerateSamlAssertionRequest } from "../model/generateSamlAssertionRequest";
import { GenerateToken200Response } from "../model/generateToken200Response";
import { GenerateToken400Response } from "../model/generateToken400Response";
import { GenerateTokenRequest } from "../model/generateTokenRequest";
import { GetAuthorizationServer200Response } from "../model/getAuthorizationServer200Response";
import { GetAvailableFactors200ResponseInner } from "../model/getAvailableFactors200ResponseInner";
import { GetClientApps200ResponseInner } from "../model/getClientApps200ResponseInner";
import { GetRateLimit200Response } from "../model/getRateLimit200Response";
import { GetRiskScore200Response } from "../model/getRiskScore200Response";
import { GetRiskScore400Response } from "../model/getRiskScore400Response";
import { GetRiskScoreRequest } from "../model/getRiskScoreRequest";
import { GetScoreInsights200Response } from "../model/getScoreInsights200Response";
import { GetUserApps200ResponseInner } from "../model/getUserApps200ResponseInner";
import { Hook } from "../model/hook";
import { HookStatus } from "../model/hookStatus";
import { Id } from "../model/id";
import { ListAccessTokenClaims200ResponseInner } from "../model/listAccessTokenClaims200ResponseInner";
import { ListActions200ResponseInner } from "../model/listActions200ResponseInner";
import { ListAppUsers200ResponseInner } from "../model/listAppUsers200ResponseInner";
import { ListAuthorizationServers200ResponseInner } from "../model/listAuthorizationServers200ResponseInner";
import { ListConditionOperators200ResponseInner } from "../model/listConditionOperators200ResponseInner";
import { ListConditionValues200ResponseInner } from "../model/listConditionValues200ResponseInner";
import { ListConditions200ResponseInner } from "../model/listConditions200ResponseInner";
import { ListMappingConditionOperators200ResponseInner } from "../model/listMappingConditionOperators200ResponseInner";
import { ListMappingConditions200ResponseInner } from "../model/listMappingConditions200ResponseInner";
import { ListScopes200ResponseInner } from "../model/listScopes200ResponseInner";
import { Log } from "../model/log";
import { Mapping } from "../model/mapping";
import { Registration } from "../model/registration";
import { RemoveRoleUsersRequest } from "../model/removeRoleUsersRequest";
import { RevokeTokenRequest } from "../model/revokeTokenRequest";
import { RiskRule } from "../model/riskRule";
import { Role } from "../model/role";
import { Rule } from "../model/rule";
import { RuleId } from "../model/ruleId";
import { Schema } from "../model/schema";
import { Schema1 } from "../model/schema1";
import { Schema3 } from "../model/listAppsSchema";
import { SetRoleApps200ResponseInner } from "../model/setRoleApps200ResponseInner";
import { Status1 } from "../model/status1";
import { Status2 } from "../model/status2";
import { TrackEventRequest } from "../model/trackEventRequest";
import { UpdateAuthorizationServer400Response } from "../model/updateAuthorizationServer400Response";
import { UpdateClientAppRequest } from "../model/updateClientAppRequest";
import { UpdateEnvironmentVariableRequest } from "../model/updateEnvironmentVariableRequest";
import { UpdateRole200Response } from "../model/updateRole200Response";
import { User } from "../model/user";
import { VerifyEnrollmentRequest } from "../model/verifyEnrollmentRequest";
import { VerifyFactorRequest } from "../model/verifyFactorRequest";
import { VerifyFactorSaml200Response } from "../model/verifyFactorSaml200Response";
import { VerifyFactorSamlRequest } from "../model/verifyFactorSamlRequest";
import { VerifyFactorVoice200ResponseInner } from "../model/verifyFactorVoice200ResponseInner";
import { AccountBrand1 } from "../model/accountBrand1";
import { AccountBrand } from "../model/accountBrand";
import { Brand } from "../model/brand";
import { Brands } from "../model/brands";
import { LookupCustomMessage } from "../model/lookupCustomMessage";

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
} from "../model/models";

import { HttpError, RequestFile } from "./apis";
import { RoleAppResponse } from "../model/RoleAppResponse";
import { listUserResponse } from "../model/listUserResponse";
import { Groups } from "../model/groups";
import { EventTypes } from "../model/eventTypes";
import { Events } from "../model/events";
import { Event } from "../model/events1";
import { Group } from "../model/group";
import { GenerateInviteLinkResponse } from "../model/generateInviteLinkResponse";
import { GenerateSendInviteLinkRequest } from "../model/generateSendInviteLinkRequest";
import { ListPrivilegeResponse } from "../model/listPrivilegeResponse";
import { listPrivilegeArrayResponse } from "../model/listPrivilegeArrayResponse";
import { AssignedRoleResponse } from "../model/assignedRoleResponse";
import { AssignRoleRequest } from "../model/assignRoleRequest";
import { StatusMessage } from "../model/statusMessage";
import { AssignedUsersResponse } from "../model/assignedUserResponse";
import { AssignUsersRequest } from "../model/assignedUserRequest";
import { MessageTemplate } from "../model/MessageTemplate";
import { MessageTemplateSchema } from "../model/messageTemplateSchema";
import { MessageTemplateType } from "../model/MessageTemplateType";
import { MessageTemplateSchema1 } from "../model/messageTemplateSchema1";
import { MessageTemplateSchema2 } from "../model/messageTemplateSchema2";
import { CustomMessageSchema } from "../model/customMessageSchema";
import { CustomAttributeResponse } from "../model/customAttributeResponse";
import { CreateCustomAttributeRequest } from "../model/createCustomAttributeRequest";
import { GenerateSessionLoginTokenRequest } from "../model/generateSessionLoginTokenRequest";
import { LoginSessionToken } from "../model/loginSessionToken";
import { VerifyFactorLoginPagesRequest } from "../model/verifyFactorLoginPagesRequest";
import { VerifyFactorLoginPagesResponse } from "../model/verifyFactorLoginPagesResponse";

let defaultBasePath = "https://onelogininc.onelogin.com";

export enum DefaultApiApiKeys {}

export class DefaultApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: DefaultApiApiKeys, value: string) {
    (this.authentications as any)[DefaultApiApiKeys[key]].apiKey = value;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  private async request<T>(
    method: string,
    path: string,
    authorization: string,
    body?: any,
    queryParameters: any = {},
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: T }> {
    const localVarPath = this.basePath + path;
    let localVarHeaderParams: any = {
      ...this._defaultHeaders,
      ...options.headers,
    };
    const produces = ["application/json"];
    localVarHeaderParams.Accept = produces.includes("application/json")
      ? "application/json"
      : produces.join(",");

    if (!authorization) {
      throw new Error(
        `Required parameter authorization was null or undefined when calling ${path}.`
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );

    let localVarRequestOptions: localVarRequest.Options = {
      method,
      qs: queryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: body
        ? ObjectSerializer.serialize(body, body?.constructor?.name)
        : undefined,
    };

    let authenticationPromise = Promise.resolve();
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      return new Promise<{ response: http.IncomingMessage; body: T }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                body = ObjectSerializer.deserialize(
                  body,
                  body?.constructor?.name
                );
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param activateFactorRequest
   */
  public async activateFactor(
    authorization: string,
    userId: number,
    activateFactorRequest: ActivateFactorRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "POST",
      `/api/2/mfa/users/${encodeURIComponent(userId)}/verifications`,
      authorization,
      activateFactorRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   * @param addAccessTokenClaimRequest
   */
  public async addAccessTokenClaim(
    authorization: string,
    id: number,
    addAccessTokenClaimRequest: AddAccessTokenClaimRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    return this.request<Id>(
      "POST",
      `/api/2/api_authorizations/${encodeURIComponent(id)}/claims`,
      authorization,
      addAccessTokenClaimRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   * @param addClientAppRequest
   */
  public async addClientApp(
    authorization: string,
    id: number,
    addClientAppRequest: AddClientAppRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: ClientApp }> {
    return this.request<ClientApp>(
      "POST",
      `/api/2/api_authorizations/${encodeURIComponent(id)}/clients`,
      authorization,
      ObjectSerializer.serialize(addClientAppRequest, "AddClientAppRequest"),
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param requestBody
   */
  public async addRoleAdmins(
    authorization: string,
    roleId: number,
    requestBody: number[],
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AddRoleUsers200ResponseInner[];
  }> {
    return this.request<AddRoleUsers200ResponseInner[]>(
      "POST",
      `/api/2/roles/${encodeURIComponent(roleId)}/admins`,
      authorization,
      requestBody, // Request body
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param requestBody
   */
  public async addRoleUsers(
    authorization: string,
    roleId: number,
    requestBody: number[],
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AddRoleUsers200ResponseInner[];
  }> {
    return this.request<AddRoleUsers200ResponseInner[]>(
      "POST",
      `/api/2/roles/${encodeURIComponent(String(roleId))}/users`,
      authorization,
      requestBody, // Request body
      undefined, // No query parameters needed
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   * @param addScopeRequest
   */
  public async addScope(
    authorization: string,
    id: number,
    addScopeRequest: AddScopeRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    return this.request<Id>(
      "POST",
      `/api/2/api_authorizations/${encodeURIComponent(id)}/scopes`,
      authorization,
      addScopeRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param requestBody The request body must contain an array of User Mapping IDs in the desired order.
   */
  public async bulkMappingSort(
    authorization: string,
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<number> }> {
    return this.request<Array<number>>(
      "PUT",
      "/api/2/mappings/sort",
      authorization,
      requestBody, // Sending requestBody
      {}, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param requestBody The request body must contain an array of App Rule IDs in the desired order.
   */
  public async bulkSort(
    authorization: string,
    appId: number,
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<number> }> {
    return this.request<Array<number>>(
      "PUT",
      `/api/2/apps/${encodeURIComponent(appId)}/rules/sort`,
      authorization,
      requestBody,
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param schema
   */
  public async createApp(
    authorization: string,
    schema: Schema,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Schema }> {
    return this.request<Schema>(
      "POST",
      "/api/2/apps",
      authorization,
      schema,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param createAuthorizationServerRequest
   */
  public async createAuthorizationServer(
    authorization: string,
    createAuthorizationServerRequest: CreateAuthorizationServerRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    return this.request<Id>(
      "POST",
      "/api/2/api_authorizations",
      authorization,
      createAuthorizationServerRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param createEnvironmentVariableRequest
   */
  public async createEnvironmentVariable(
    authorization: string,
    createEnvironmentVariableRequest: CreateEnvironmentVariableRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Envvar }> {
    return this.request<Envvar>(
      "POST",
      "/api/2/hooks/envs",
      authorization,
      createEnvironmentVariableRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param hook
   */
  public async createHook(
    authorization: string,
    hook: Hook,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "POST",
      "/api/2/hooks",
      authorization,
      hook,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param mapping
   */
  public async createMapping(
    authorization: string,
    mapping: Mapping,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: number }> {
    return this.request<number>(
      "POST",
      "/api/2/mappings",
      authorization,
      mapping, // Body for the POST request
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param riskRule
   */
  public async createRiskRule(
    authorization: string,
    riskRule: RiskRule,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "POST",
      "/api/2/risk/rules",
      authorization,
      riskRule,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   */
  public async createRoles(
    authorization: string,
    role: Role,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CreateRoles201ResponseInner;
  }> {
    return this.request<CreateRoles201ResponseInner>(
      "POST",
      "/api/2/roles",
      authorization,
      role,
      {}, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param rule
   */
  public async createRule(
    authorization: string,
    appId: number,
    rule: Rule,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RuleId }> {
    return this.request<RuleId>(
      "POST",
      `/api/2/apps/${encodeURIComponent(String(appId))}/rules`,
      authorization,
      rule,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param user
   * @param mappings Controls how mappings will be applied to the user on creation. Defaults to async.
   * @param validatePolicy Will passwords validate against the User Policy? Defaults to true.
   */
  public async createUser(
    authorization: string,
    user: User,
    mappings?: "async" | "sync" | "disabled",
    validatePolicy?: boolean,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: User }> {
    return this.request<User>(
      "POST",
      "/api/2/users",
      authorization,
      user,
      {
        ...(mappings !== undefined && { mappings }),
        ...(validatePolicy !== undefined && {
          validate_policy: validatePolicy,
        }),
      },
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   * @param claimId
   */
  public async deleteAccessTokenClaim(
    authorization: string,
    id: number,
    claimId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/api_authorizations/${encodeURIComponent(
        id
      )}/claims/${encodeURIComponent(claimId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   */
  public async deleteApp(
    authorization: string,
    appId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/apps/${encodeURIComponent(String(appId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param appId
   * @param parameterId
   */
  public async deleteAppParameter(
    authorization: string,
    appId: number,
    parameterId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/apps/${encodeURIComponent(
        String(appId)
      )}/parameters/${encodeURIComponent(String(parameterId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   */
  public async deleteAuthorizationServer(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/api_authorizations/${encodeURIComponent(id)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param envvarId Set to the id of the Hook Environment Variable that you want to fetch.
   */
  public async deleteEnvironmentVariable(
    authorization: string,
    envvarId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/hooks/envs/${encodeURIComponent(String(envvarId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param deviceId Set to the device_id of the MFA device.
   */
  public async deleteFactor(
    authorization: string,
    userId: number,
    deviceId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/mfa/users/${encodeURIComponent(
        userId
      )}/devices/${encodeURIComponent(deviceId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param hookId Set to the id of the Hook that you want to return.
   */
  public async deleteHook(
    authorization: string,
    hookId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/hooks/${encodeURIComponent(String(hookId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param mappingId The id of the user mapping to locate.
   */
  public async deleteMapping(
    authorization: string,
    mappingId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/mappings/${encodeURIComponent(String(mappingId))}`,
      authorization,
      undefined, // No request body for DELETE
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param riskRuleId
   */
  public async deleteRiskRule(
    authorization: string,
    riskRuleId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RiskRule }> {
    return this.request<RiskRule>(
      "DELETE",
      `/api/2/risk/rules/${encodeURIComponent(String(riskRuleId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   */
  public async deleteRole(
    authorization: string,
    roleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/roles/${encodeURIComponent(roleId)}`,
      authorization,
      undefined, // No body needed for DELETE
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param ruleId The id of the app rule to locate.
   */
  public async deleteRule(
    authorization: string,
    appId: number,
    ruleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/apps/${encodeURIComponent(
        String(appId)
      )}/rules/${encodeURIComponent(String(ruleId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   * @param scopeId
   */
  public async deleteScope(
    authorization: string,
    id: number,
    scopeId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<void>(
      "DELETE",
      `/api/2/api_authorizations/${encodeURIComponent(
        id
      )}/scopes/${encodeURIComponent(scopeId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user that you want to return.
   */
  public async deleteUser(
    authorization: string,
    userId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/users/${encodeURIComponent(String(userId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param mappingId The id of the user mapping to locate.
   * @param requestBody Request body is a list of user IDs tested against the mapping conditions to verify that the mapping would be applied
   */
  public async dryRunMapping(
    authorization: string,
    mappingId: number,
    requestBody: number[],
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object[] }> {
    return this.request<object[]>(
      "POST",
      `/api/2/mappings/${encodeURIComponent(String(mappingId))}/dryrun`,
      authorization,
      requestBody, // Body for the request
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param enrollFactorRequest
   */
  public async enrollFactor(
    authorization: string,
    userId: number,
    enrollFactorRequest: EnrollFactorRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: FactorInner }> {
    return this.request<FactorInner>(
      "POST",
      `/api/2/mfa/users/${encodeURIComponent(userId)}/registrations`,
      authorization,
      enrollFactorRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param generateMfaTokenRequest
   */
  public async generateMfaToken(
    authorization: string,
    userId: number,
    generateMfaTokenRequest: GenerateMfaTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GenerateMfaToken200Response;
  }> {
    return this.request<GenerateMfaToken200Response>(
      "POST",
      `/api/1/users/${encodeURIComponent(userId)}/mfa_token`,
      authorization,
      generateMfaTokenRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param generateSamlAssertionRequest
   */
  public async generateSamlAssertion(
    authorization: string,
    generateSamlAssertionRequest: GenerateSamlAssertionRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "POST",
      "/api/2/saml_assertion",
      authorization,
      generateSamlAssertionRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param generateTokenRequest
   */
  public async generateToken(
    authorization: string,
    generateTokenRequest: GenerateTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: GenerateToken200Response }> {
    return this.request<GenerateToken200Response>(
      "POST",
      "/auth/oauth2/v2/token",
      authorization,
      generateTokenRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param appId
   */
  public async getApp(
    authorization: string,
    appId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Schema }> {
    return this.request<Schema>(
      "GET",
      `/api/2/apps/${encodeURIComponent(String(appId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   */
  public async getAuthorizationServer(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GetAuthorizationServer200Response;
  }> {
    return this.request<GetAuthorizationServer200Response>(
      "GET",
      `/api/2/api_authorizations/${encodeURIComponent(id)}`,
      authorization,
      null,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   */
  public async getAvailableFactors(
    authorization: string,
    userId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<GetAvailableFactors200ResponseInner>;
  }> {
    return this.request<Array<GetAvailableFactors200ResponseInner>>(
      "GET",
      `/api/2/mfa/users/${encodeURIComponent(userId)}/factors`,
      authorization,
      undefined, // No request body for GET requests
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   */
  public async getClientApps(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<GetClientApps200ResponseInner>;
  }> {
    return this.request<Array<GetClientApps200ResponseInner>>(
      "GET",
      `/api/2/api_authorizations/${encodeURIComponent(id)}/clients`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   */
  public async getEnrolledFactors(
    authorization: string,
    userId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Device> }> {
    return this.request<Array<Device>>(
      "GET",
      `/api/2/mfa/users/${encodeURIComponent(userId)}/devices`,
      authorization,
      null,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param envvarId Set to the id of the Hook Environment Variable that you want to fetch.
   */
  public async getEnvironmentVariable(
    authorization: string,
    envvarId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Envvar }> {
    return this.request<Envvar>(
      "GET",
      `/api/2/hooks/envs/${encodeURIComponent(String(envvarId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param hookId Set to the id of the Hook that you want to return.
   */
  public async getHook(
    authorization: string,
    hookId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Hook }> {
    return this.request<Hook>(
      "GET",
      `/api/2/hooks/${encodeURIComponent(String(hookId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param hookId Set to the id of the Hook that you want to return.
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param requestId Returns logs that contain this request_id.
   * @param correlationId Returns logs that contain this correlation_id.
   */
  public async getLogs(
    authorization: string,
    hookId: string,
    limit?: number,
    page?: number,
    cursor?: string,
    requestId?: string,
    correlationId?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Log> }> {
    const queryParameters: any = {};
    if (limit !== undefined) queryParameters["limit"] = limit;
    if (page !== undefined) queryParameters["page"] = page;
    if (cursor !== undefined) queryParameters["cursor"] = cursor;
    if (requestId !== undefined) queryParameters["request_id"] = requestId;
    if (correlationId !== undefined)
      queryParameters["correlation_id"] = correlationId;

    return this.request<Array<Log>>(
      "GET",
      `/api/2/hooks/${encodeURIComponent(String(hookId))}/logs`,
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param mappingId The id of the user mapping to locate.
   */
  public async getMapping(
    authorization: string,
    mappingId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Mapping }> {
    return this.request<Mapping>(
      "GET",
      `/api/2/mappings/${encodeURIComponent(String(mappingId))}`,
      authorization,
      undefined, // No body needed for GET request
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   */
  public async getRateLimit(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: GetRateLimit200Response }> {
    return this.request<GetRateLimit200Response>(
      "GET",
      "/auth/rate_limit",
      authorization,
      undefined, //No Body For GET Request
      {}, // No QueryParams
      options
    );
  }
  /**
   *
   * @param authorization
   * @param riskRuleId
   */
  public async getRiskRule(
    authorization: string,
    riskRuleId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "GET",
      `/api/2/risk/rules/${encodeURIComponent(String(riskRuleId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param getRiskScoreRequest
   */
  public async getRiskScore(
    authorization: string,
    getRiskScoreRequest: GetRiskScoreRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GetRiskScore200Response;
  }> {
    return this.request<GetRiskScore200Response>(
      "POST",
      "/api/2/risk/verify",
      authorization,
      getRiskScoreRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   */
  public async getRole(
    authorization: string,
    roleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Role }> {
    return this.request<Role>(
      "GET",
      `/api/2/roles/${encodeURIComponent(String(roleId))}`,
      authorization,
      undefined, // No request body
      {}, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param name Allows you to filter on first name, last name, username, and email address.
   * @param includeUnassigned Optional. Defaults to false. Include users that aren’t assigned to the role.
   */
  public async getRoleAdmins(
    authorization: string,
    roleId: number,
    limit?: number,
    page?: number,
    cursor?: string,
    name?: string,
    includeUnassigned?: boolean,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Schema1[] }> {
    return this.request<Schema1[]>(
      "GET",
      `/api/2/roles/${encodeURIComponent(roleId)}/admins`,
      authorization,
      undefined, // No request body for GET
      {
        limit,
        page,
        cursor,
        name,
        include_unassigned: includeUnassigned,
      }, // Query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param assigned Optional. Defaults to true. Returns all apps not yet assigned to the role.
   */
  public async getRoleApps(
    authorization: string,
    roleId: number,
    limit?: number,
    page?: number,
    cursor?: string,
    assigned?: boolean,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RoleAppResponse[] }> {
    return this.request<RoleAppResponse[]>(
      "GET",
      `/api/2/roles/${encodeURIComponent(String(roleId))}/apps`,
      authorization,
      undefined, // No request body
      { limit, page, cursor, assigned }, // Query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param name Allows you to filter on first name, last name, username, and email address.
   * @param includeUnassigned Optional. Defaults to false. Include users that aren’t assigned to the role.
   */
  public async getRoleUsers(
    authorization: string,
    roleId: number,
    limit?: number,
    page?: number,
    cursor?: string,
    name?: string,
    includeUnassigned?: boolean,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Schema1[] }> {
    return this.request<Schema1[]>(
      "GET",
      `/api/2/roles/${encodeURIComponent(String(roleId))}/users`,
      authorization,
      undefined, // No request body for GET request
      {
        limit,
        page,
        cursor,
        name,
        include_unassigned: includeUnassigned,
      }, // Query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param ruleId The id of the app rule to locate.
   */
  public async getRule(
    authorization: string,
    appId: number,
    ruleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Rule }> {
    return this.request<Rule>(
      "GET",
      `/api/2/apps/${encodeURIComponent(
        String(appId)
      )}/rules/${encodeURIComponent(String(ruleId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param before Optional ISO8601 formatted date string. Defaults to current date. Maximum date is 90 days ago.
   * @param after Optional ISO8601 formatted date string. Defaults to 30 days ago. Maximum date is 90 days ago.
   */
  public async getScoreInsights(
    authorization: string,
    before?: string,
    after?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GetScoreInsights200Response;
  }> {
    const queryParameters: any = {};
    if (before !== undefined) queryParameters["before"] = before;
    if (after !== undefined) queryParameters["after"] = after;

    return this.request<GetScoreInsights200Response>(
      "GET",
      "/api/2/risk/scores",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param userId Set to the id of the user that you want to return.
   */
  public async getUser(
    authorization: string,
    userId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: User }> {
    return this.request<User>(
      "GET",
      `/api/2/users/${encodeURIComponent(String(userId))}`,
      authorization,
      null,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user that you want to return.
   * @param ignoreVisibility Defaults to &#x60;false&#x60;. When &#x60;true&#x60; will show all apps that are assigned to a user regardless of their portal visibility setting.
   */
  public async getUserApps(
    authorization: string,
    userId: number,
    ignoreVisibility?: boolean,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<GetUserApps200ResponseInner>;
  }> {
    return this.request<Array<GetUserApps200ResponseInner>>(
      "GET",
      `/api/2/users/${encodeURIComponent(String(userId))}/apps`,
      authorization,
      null,
      ignoreVisibility !== undefined
        ? { ignore_visibility: ignoreVisibility }
        : {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   */
  public async listAccessTokenClaims(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListAccessTokenClaims200ResponseInner>;
  }> {
    return this.request<Array<ListAccessTokenClaims200ResponseInner>>(
      "GET",
      `/api/2/api_authorizations/${encodeURIComponent(id)}/claims`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param actionValue The value for the selected action.
   */
  public async listActionValues(
    authorization: string,
    appId: number,
    actionValue: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListConditionValues200ResponseInner>;
  }> {
    return this.request<Array<ListConditionValues200ResponseInner>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(
        appId
      )}/rules/actions/${encodeURIComponent(actionValue)}/values`,
      authorization,
      undefined, // No request body for GET
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   */
  public async listActions(
    authorization: string,
    appId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListActions200ResponseInner>;
  }> {
    return this.request<Array<ListActions200ResponseInner>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(appId)}/rules/actions`,
      authorization,
      undefined, // No request body for GET
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   */
  public async listAppUsers(
    authorization: string,
    appId: number,
    limit?: number,
    page?: number,
    cursor?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListAppUsers200ResponseInner>;
  }> {
    const queryParameters: any = {};
    if (limit !== undefined) queryParameters["limit"] = limit;
    if (page !== undefined) queryParameters["page"] = page;
    if (cursor !== undefined) queryParameters["cursor"] = cursor;

    return this.request<Array<ListAppUsers200ResponseInner>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(String(appId))}/users`,
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param name The name or partial name of the app to search for. When using a partial name you must append a wildcard &#x60;*&#x60;
   * @param connectorId Returns all apps based off a specific connector. See List Connectors for a complete list of Connector IDs.
   * @param authMethod Returns all apps based of a given type.
   */
  public async listApps(
    authorization: string,
    limit?: number,
    page?: number,
    cursor?: string,
    name?: string,
    connectorId?: number,
    authMethod?: AuthMethod,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Schema3> }> {
    const queryParameters: any = {};
    if (limit !== undefined) queryParameters["limit"] = limit;
    if (page !== undefined) queryParameters["page"] = page;
    if (cursor !== undefined) queryParameters["cursor"] = cursor;
    if (name !== undefined) queryParameters["name"] = name;
    if (connectorId !== undefined)
      queryParameters["connector_id"] = connectorId;
    if (authMethod !== undefined) queryParameters["auth_method"] = authMethod;

    return this.request<Array<Schema3>>(
      "GET",
      "/api/2/apps",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   */
  public async listAuthorizationServers(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListAuthorizationServers200ResponseInner>;
  }> {
    return this.request<Array<ListAuthorizationServers200ResponseInner>>(
      "GET",
      "/api/2/api_authorizations",
      authorization,
      null,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param conditionValue The value for the selected condition.
   */
  public async listConditionOperators(
    authorization: string,
    appId: number,
    conditionValue: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListConditionOperators200ResponseInner>;
  }> {
    return this.request<Array<ListConditionOperators200ResponseInner>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(
        String(appId)
      )}/rules/conditions/${encodeURIComponent(
        String(conditionValue)
      )}/operators`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param appId
   * @param conditionValue The value for the selected condition.
   */
  public async listConditionValues(
    authorization: string,
    appId: number,
    conditionValue: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListConditionValues200ResponseInner>;
  }> {
    return this.request<Array<ListConditionValues200ResponseInner>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(
        String(appId)
      )}/rules/conditions/${encodeURIComponent(String(conditionValue))}/values`,
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param appId
   */
  public async listConditions(
    authorization: string,
    appId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListConditions200ResponseInner>;
  }> {
    return this.request<Array<ListConditions200ResponseInner>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(String(appId))}/rules/conditions`,
      authorization,
      undefined, // No request body for GET
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param name The name or partial name of the connector to search for. When using a partial name you must append a wildcard &#x60;*&#x60;
   * @param authMethod Returns all connectors of a given type.
   */
  public async listConnectors(
    authorization: string,
    limit?: number,
    page?: number,
    cursor?: string,
    name?: string,
    authMethod?: AuthMethod,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Connector> }> {
    const queryParameters: any = {};
    if (limit !== undefined) queryParameters["limit"] = limit;
    if (page !== undefined) queryParameters["page"] = page;
    if (cursor !== undefined) queryParameters["cursor"] = cursor;
    if (name !== undefined) queryParameters["name"] = name;
    if (authMethod !== undefined) queryParameters["auth_method"] = authMethod;

    return this.request<Array<Connector>>(
      "GET",
      `/api/2/connectors`,
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   */
  public async listEnvironmentVariables(
    authorization: string,
    limit?: number,
    page?: number,
    cursor?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Envvar> }> {
    const queryParameters: any = {};
    if (limit !== undefined) queryParameters["limit"] = limit;
    if (page !== undefined) queryParameters["page"] = page;
    if (cursor !== undefined) queryParameters["cursor"] = cursor;

    return this.request<Array<Envvar>>(
      "GET",
      "/api/2/hooks/envs",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   */
  public async listHooks(
    authorization: string,
    limit?: number,
    page?: number,
    cursor?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Hook> }> {
    const queryParameters: any = {};
    if (limit !== undefined) queryParameters["limit"] = limit;
    if (page !== undefined) queryParameters["page"] = page;
    if (cursor !== undefined) queryParameters["cursor"] = cursor;

    return this.request<Array<Hook>>(
      "GET",
      "/api/2/hooks",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param actionValue The value for the selected action.
   */
  public async listMappingActionValues(
    authorization: string,
    actionValue: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListConditionValues200ResponseInner>;
  }> {
    return this.request<Array<ListConditionValues200ResponseInner>>(
      "GET",
      `/api/2/mappings/actions/${encodeURIComponent(actionValue)}/values`,
      authorization,
      undefined, // No request body for GET
      {}, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   */
  public async listMappingActions(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListActions200ResponseInner>;
  }> {
    return this.request<Array<ListActions200ResponseInner>>(
      "GET",
      "/api/2/mappings/actions",
      authorization,
      undefined, // No request body for GET
      {}, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param conditionValue The value for the selected condition.
   */
  public async listMappingConditionOperators(
    authorization: string,
    conditionValue: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListMappingConditionOperators200ResponseInner>;
  }> {
    return this.request<Array<ListMappingConditionOperators200ResponseInner>>(
      "GET",
      `/api/2/mappings/conditions/${encodeURIComponent(
        conditionValue
      )}/operators`,
      authorization,
      undefined, // No request body for GET
      {}, // Empty query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param conditionValue The value for the selected condition.
   */
  public async listMappingConditionValues(
    authorization: string,
    conditionValue: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListConditionValues200ResponseInner>;
  }> {
    return this.request<Array<ListConditionValues200ResponseInner>>(
      "GET",
      `/api/2/mappings/conditions/${encodeURIComponent(conditionValue)}/values`,
      authorization,
      undefined, // No request body for GET
      {}, // Empty query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   */
  public async listMappingConditions(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListMappingConditions200ResponseInner>;
  }> {
    return this.request<Array<ListMappingConditions200ResponseInner>>(
      "GET",
      "/api/2/mappings/conditions",
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param enabled Defaults to true. When set to &#x60;false&#x60; will return all disabled mappings.
   * @param hasCondition Filters Mappings based on their Conditions.
   * @param hasConditionType Filters Mappings based on their condition types.
   * @param hasAction Filters Mappings based on their Actions.
   * @param hasActionType Filters Mappings based on their action types.
   */
  public async listMappings(
    authorization: string,
    enabled?: boolean,
    hasCondition?: string,
    hasConditionType?: "builtin" | "custom" | "none",
    hasAction?: string,
    hasActionType?: "builtin" | "custom" | "none",
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Mapping> }> {
    return this.request<Array<Mapping>>(
      "GET",
      "/api/2/mappings",
      authorization,
      undefined, // No body needed for GET request
      {
        enabled,
        has_condition: hasCondition,
        has_condition_type: hasConditionType,
        has_action: hasAction,
        has_action_type: hasActionType,
      },
      options
    );
  }

  /**
   *
   * @param authorization
   */
  public async listRiskRules(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "GET",
      "/api/2/risk/rules",
      authorization,
      undefined,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param name Optional. Filters by role name.
   * @param appId Optional. Returns roles that contain this app name.
   * @param fields Optional. Comma delimited list of fields to return.
   */
  public async listRoles(
    authorization: string,
    limit?: number,
    page?: number,
    cursor?: string,
    name?: string,
    appId?: string,
    fields?: "apps" | "users" | "admins",
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Role> }> {
    return this.request<Array<Role>>(
      "GET",
      "/api/2/roles",
      authorization,
      undefined, // No body required for GET request
      {
        limit,
        page,
        cursor,
        name,
        app_id: appId,
        fields,
      },
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param enabled Defaults to true. When set to &#x60;false&#x60; will return all disabled rules.
   * @param hasCondition Filters Rules based on their Conditions.
   * @param hasConditionType Filters Rules based on their condition types.
   * @param hasAction Filters Rules based on their Actions.
   * @param hasActionType Filters Rules based on their action types.
   */
  public async listRules(
    authorization: string,
    appId: number,
    enabled?: boolean,
    hasCondition?: string,
    hasConditionType?: string,
    hasAction?: string,
    hasActionType?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Rule> }> {
    const queryParameters: any = {};
    if (enabled !== undefined) queryParameters["enabled"] = enabled;
    if (hasCondition !== undefined)
      queryParameters["has_condition"] = hasCondition;
    if (hasConditionType !== undefined)
      queryParameters["has_condition_type"] = hasConditionType;
    if (hasAction !== undefined) queryParameters["has_action"] = hasAction;
    if (hasActionType !== undefined)
      queryParameters["has_action_type"] = hasActionType;

    return this.request<Array<Rule>>(
      "GET",
      `/api/2/apps/${encodeURIComponent(String(appId))}/rules`,
      authorization,
      undefined,
      queryParameters,
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   */
  public async listScopes(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<ListScopes200ResponseInner>;
  }> {
    return this.request<Array<ListScopes200ResponseInner>>(
      "GET",
      `/api/2/api_authorizations/${encodeURIComponent(id)}/scopes`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param limit The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
   * @param page The page number of results to return.
   * @param cursor Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
   * @param createdSince An ISO8601 timestamp value that returns all users created after a given date &amp; time.
   * @param createdUntil An ISO8601 timestamp value that returns all users created before a given date &amp; time.
   * @param updatedSince An ISO8601 timestamp value that returns all users updated after a given date &amp; time.
   * @param updatedUntil An ISO8601 timestamp value that returns all users updated before a given date &amp; time.
   * @param lastLoginSince An ISO8601 timestamp value that returns all users that logged in after a given date &amp; time.
   * @param lastLoginUntil
   * @param firstname The first name of the user
   * @param lastname The last name of the user
   * @param email The email address of the user
   * @param username The username for the user
   * @param samaccountname The AD login name for the user
   * @param directoryId The ID in OneLogin of the Directory that the user belongs to
   * @param externalId An external identifier that has been set on the user
   * @param appId The ID of a OneLogin Application
   * @param userIds A comma separated list of OneLogin User IDs
   * @param customAttributesAttributeName The short name of a custom attribute. Note that the attribute name is prefixed with custom_attributes.
   * @param fields A comma separated list user attributes to return.
   */
  public async listUsers(
    authorization: string,
    limit?: number,
    page?: number,
    cursor?: string,
    createdSince?: string,
    createdUntil?: string,
    updatedSince?: string,
    updatedUntil?: string,
    lastLoginSince?: string,
    lastLoginUntil?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    username?: string,
    samaccountname?: string,
    directoryId?: string,
    externalId?: string,
    appId?: string,
    userIds?: string,
    customAttributesAttributeName?: string,
    fields?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<listUserResponse>;
  }> {
    const queryParams: Record<string, any> = {};

    if (limit !== undefined) queryParams["limit"] = limit;
    if (page !== undefined) queryParams["page"] = page;
    if (cursor !== undefined) queryParams["cursor"] = cursor;
    if (createdSince !== undefined) queryParams["created_since"] = createdSince;
    if (createdUntil !== undefined) queryParams["created_until"] = createdUntil;
    if (updatedSince !== undefined) queryParams["updated_since"] = updatedSince;
    if (updatedUntil !== undefined) queryParams["updated_until"] = updatedUntil;
    if (lastLoginSince !== undefined)
      queryParams["last_login_since"] = lastLoginSince;
    if (lastLoginUntil !== undefined)
      queryParams["last_login_until"] = lastLoginUntil;
    if (firstname !== undefined) queryParams["firstname"] = firstname;
    if (lastname !== undefined) queryParams["lastname"] = lastname;
    if (email !== undefined) queryParams["email"] = email;
    if (username !== undefined) queryParams["username"] = username;
    if (samaccountname !== undefined)
      queryParams["samaccountname"] = samaccountname;
    if (directoryId !== undefined) queryParams["directory_id"] = directoryId;
    if (externalId !== undefined) queryParams["external_id"] = externalId;
    if (appId !== undefined) queryParams["app_id"] = appId;
    if (userIds !== undefined) queryParams["user_ids"] = userIds;
    if (customAttributesAttributeName !== undefined)
      queryParams["custom_attributes.{attribute_name}"] =
        customAttributesAttributeName;
    if (fields !== undefined) queryParams["fields"] = fields;

    return this.request<Array<listUserResponse>>(
      "GET",
      "/api/2/users",
      authorization,
      undefined,
      queryParams,
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   * @param clientAppId
   */
  public async removeClientApp(
    authorization: string,
    id: number,
    clientAppId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<void>(
      "DELETE",
      `/api/2/api_authorizations/${encodeURIComponent(
        id
      )}/clients/${encodeURIComponent(clientAppId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param removeRoleUsersRequest
   */
  public async removeRoleAdmins(
    authorization: string,
    roleId: number,
    userIds: number[],
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/roles/${encodeURIComponent(roleId)}/admins`,
      authorization,
      userIds, // Send user IDs directly in the body
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param removeRoleUsersRequest
   */
  public async removeRoleUsers(
    authorization: string,
    roleId: number,
    userIds: number[],
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/roles/${encodeURIComponent(String(roleId))}/users`,
      authorization,
      userIds, // Request body
      undefined, // No query parameters needed
      options
    );
  }

  /**
   *
   * @param authorization
   * @param revokeTokenRequest
   */
  public async revokeToken(
    authorization: string,
    revokeTokenRequest?: RevokeTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: GenerateToken400Response }> {
    return this.request<GenerateToken400Response>(
      "POST",
      "/auth/oauth2/revoke",
      authorization,
      revokeTokenRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param requestBody
   */
  public async setRoleApps(
    authorization: string,
    roleId: number,
    requestBody: number[],
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: SetRoleApps200ResponseInner[];
  }> {
    return this.request<SetRoleApps200ResponseInner[]>(
      "PUT",
      `/api/2/roles/${encodeURIComponent(String(roleId))}/apps`,
      authorization,
      requestBody, // Request body
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param trackEventRequest
   */
  public async trackEvent(
    authorization: string,
    trackEventRequest: TrackEventRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "POST",
      "/api/2/risk/events",
      authorization,
      trackEventRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   * @param claimId
   * @param addAccessTokenClaimRequest
   */
  public async updateAccessTokenClaim(
    authorization: string,
    id: number,
    claimId: number,
    addAccessTokenClaimRequest: AddAccessTokenClaimRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    return this.request<Id>(
      "PUT",
      `/api/2/api_authorizations/${encodeURIComponent(
        id
      )}/claims/${encodeURIComponent(claimId)}`,
      authorization,
      addAccessTokenClaimRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param schema
   */
  public async updateApp(
    authorization: string,
    appId: number,
    schema: Schema,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Schema }> {
    return this.request<Schema>(
      "PUT",
      `/api/2/apps/${encodeURIComponent(String(appId))}`,
      authorization,
      schema,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   * @param createAuthorizationServerRequest
   */
  public async updateAuthorizationServer(
    authorization: string,
    id: number,
    createAuthorizationServerRequest: CreateAuthorizationServerRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    return this.request<Id>(
      "PUT",
      `/api/2/api_authorizations/${encodeURIComponent(id)}`,
      authorization,
      createAuthorizationServerRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param id
   * @param clientAppId
   * @param updateClientAppRequest
   */
  public async updateClientApp(
    authorization: string,
    id: number,
    clientAppId: number,
    updateClientAppRequest: UpdateClientAppRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: ClientApp }> {
    return this.request<ClientApp>(
      "PUT",
      `/api/2/api_authorizations/${encodeURIComponent(
        id
      )}/clients/${encodeURIComponent(clientAppId)}`,
      authorization,
      ObjectSerializer.serialize(
        updateClientAppRequest,
        "UpdateClientAppRequest"
      ),
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param envvarId Set to the id of the Hook Environment Variable that you want to fetch.
   * @param updateEnvironmentVariableRequest
   */
  public async updateEnvironmentVariable(
    authorization: string,
    envvarId: string,
    updateEnvironmentVariableRequest: UpdateEnvironmentVariableRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Envvar }> {
    return this.request<Envvar>(
      "PUT",
      `/api/2/hooks/envs/${encodeURIComponent(String(envvarId))}`,
      authorization,
      updateEnvironmentVariableRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param hookId Set to the id of the Hook that you want to return.
   * @param hook
   */
  public async updateHook(
    authorization: string,
    hookId: string,
    hook: Hook,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Hook }> {
    return this.request<Hook>(
      "PUT",
      `/api/2/hooks/${encodeURIComponent(String(hookId))}`,
      authorization,
      hook,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param mappingId The id of the user mapping to locate.
   * @param mapping
   */
  public async updateMapping(
    authorization: string,
    mappingId: number,
    mapping: Mapping,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: number }> {
    return this.request<number>(
      "PUT",
      `/api/2/mappings/${encodeURIComponent(String(mappingId))}`,
      authorization,
      mapping, // Body for the PUT request
      undefined, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param riskRuleId
   * @param riskRule
   */
  public async updateRiskRule(
    authorization: string,
    riskRuleId: string,
    riskRule: RiskRule,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RiskRule }> {
    return this.request<RiskRule>(
      "PUT",
      `/api/2/risk/rules/${encodeURIComponent(String(riskRuleId))}`,
      authorization,
      riskRule,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param roleId Set to the id of the role you want to return.
   * @param role
   */
  public async updateRole(
    authorization: string,
    roleId: number,
    role: Role,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: UpdateRole200Response }> {
    return this.request<UpdateRole200Response>(
      "PUT",
      `/api/2/roles/${encodeURIComponent(String(roleId))}`,
      authorization,
      role, // Request body
      {}, // No query parameters
      options
    );
  }

  /**
   *
   * @param authorization
   * @param appId
   * @param ruleId The id of the app rule to locate.
   * @param rule
   */
  public async updateRule(
    authorization: string,
    appId: number,
    ruleId: number,
    rule: Rule,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RuleId }> {
    return this.request<RuleId>(
      "PUT",
      `/api/2/apps/${encodeURIComponent(
        String(appId)
      )}/rules/${encodeURIComponent(String(ruleId))}`,
      authorization,
      rule,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param id
   * @param scopeId
   * @param addScopeRequest
   */
  public async updateScope(
    authorization: string,
    id: number,
    scopeId: number,
    addScopeRequest: AddScopeRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    return this.request<Id>(
      "PUT",
      `/api/2/api_authorizations/${encodeURIComponent(
        id
      )}/scopes/${encodeURIComponent(scopeId)}`,
      authorization,
      addScopeRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user that you want to return.
   * @param user
   * @param mappings Controls how mappings will be applied to the user on creation. Defaults to async.
   * @param validatePolicy Will passwords validate against the User Policy? Defaults to true.
   */
  public async updateUser(
    authorization: string,
    userId: number,
    user: User,
    mappings?: "async" | "sync" | "disabled",
    validatePolicy?: boolean,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: User }> {
    return this.request<User>(
      "PUT",
      `/api/2/users/${encodeURIComponent(String(userId))}`,
      authorization,
      user,
      {
        ...(mappings !== undefined && { mappings }),
        ...(validatePolicy !== undefined && {
          validate_policy: validatePolicy,
        }),
      },
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param registrationId Set to the uuid of the registration. This was included in the response as part of the initial request in Enroll Factor.
   * @param verifyEnrollmentRequest
   */
  public async verifyEnrollment(
    authorization: string,
    userId: number,
    registrationId: number,
    verifyEnrollmentRequest: VerifyEnrollmentRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Registration }> {
    return this.request<Registration>(
      "PUT",
      `/api/2/mfa/users/${encodeURIComponent(
        userId
      )}/registrations/${encodeURIComponent(registrationId)}`,
      authorization,
      verifyEnrollmentRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param registrationId Set to the uuid of the registration. This was included in the response as part of the initial request in Enroll Factor.
   */
  public async verifyEnrollmentVoiceProtect(
    authorization: string,
    userId: number,
    registrationId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Registration }> {
    return this.request<Registration>(
      "GET",
      `/api/2/mfa/users/${encodeURIComponent(
        userId
      )}/registrations/${encodeURIComponent(registrationId)}`,
      authorization,
      null,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param verificationId The verification_id is returned on activation of the factor or you can get the device_id using the Activate Factor API call.
   * @param verifyFactorRequest
   */
  public async verifyFactor(
    authorization: string,
    userId: number,
    verificationId: number,
    verifyFactorRequest: VerifyFactorRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: VerifyFactorVoice200ResponseInner;
  }> {
    return this.request<VerifyFactorVoice200ResponseInner>(
      "PUT",
      `/api/2/mfa/users/${encodeURIComponent(
        userId
      )}/verifications/${encodeURIComponent(verificationId)}`,
      authorization,
      verifyFactorRequest,
      {},
      options
    );
  }

  /**
   *
   * @param authorization
   * @param verifyFactorSamlRequest
   */
  public async verifyFactorSaml(
    authorization: string,
    verifyFactorSamlRequest: VerifyFactorSamlRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: VerifyFactorSaml200Response;
  }> {
    return this.request<VerifyFactorSaml200Response>(
      "POST",
      "/api/2/saml_assertion/verify_factor",
      authorization,
      verifyFactorSamlRequest,
      {},
      options
    );
  }
  /**
   *
   * @param authorization
   * @param userId Set to the id of the user.
   * @param verificationId The verification_id is returned on activation of the factor or you can get the device_id using the Activate Factor API call.
   */
  public async verifyFactorVoice(
    authorization: string,
    userId: number,
    verificationId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: VerifyFactorVoice200ResponseInner;
  }> {
    return this.request<VerifyFactorVoice200ResponseInner>(
      "GET",
      `/api/2/mfa/users/${encodeURIComponent(
        userId
      )}/verifications/${encodeURIComponent(verificationId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getGroups(
    authorization: string,
    id?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Groups }> {
    const queryParameters: any = {};
    if (id !== undefined) queryParameters["id"] = id;
    return this.request<Groups>(
      "GET",
      "/api/1/groups",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }

  public async getGroupById(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Group }> {
    return this.request<Group>(
      "GET",
      `/api/1/groups/${encodeURIComponent(String(id))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getEventsTypes(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: EventTypes }> {
    return this.request<EventTypes>(
      "GET",
      "/api/1/events/types",
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getEvents(
    authorization: string,
    clientId?: number,
    createdAt?: string,
    directoryId?: number,
    eventTypeId?: number[],
    resolution?: string,
    since?: string,
    until?: string,
    userId?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Events }> {
    const queryParameters: any = {};
    if (clientId !== undefined) queryParameters["client_id"] = clientId;
    if (createdAt !== undefined) queryParameters["created_at"] = createdAt;
    if (directoryId !== undefined)
      queryParameters["directory_id"] = directoryId;
    if (eventTypeId !== undefined)
      queryParameters["event_type_id"] = eventTypeId.join(",");
    if (resolution !== undefined) queryParameters["resolution"] = resolution;
    if (since !== undefined) queryParameters["since"] = since;
    if (until !== undefined) queryParameters["until"] = until;
    if (userId !== undefined) queryParameters["user_id"] = userId;

    return this.request<Events>(
      "GET",
      "/api/1/events",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }

  public async getEventById(
    authorization: string,
    eventId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Event }> {
    return this.request<Event>(
      "GET",
      `/api/1/events/${encodeURIComponent(String(eventId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async generateInviteLink(
    authorization: string,
    email: GenerateSendInviteLinkRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GenerateInviteLinkResponse;
  }> {
    return this.request<GenerateInviteLinkResponse>(
      "POST",
      "/api/1/invites/get_invite_link",
      authorization,
      email,
      {},
      options
    );
  }

  public async sendInviteLink(
    authorization: string,
    email: GenerateSendInviteLinkRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Status2 }> {
    return this.request<Status2>(
      "POST",
      "/api/1/invites/send_invite_link",
      authorization,
      email,
      {},
      options
    );
  }

  public async listPrivileges(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body?: Array<ListPrivilegeResponse>;
  }> {
    return this.request<Array<ListPrivilegeResponse>>(
      "GET",
      "/api/1/privileges",
      authorization,
      undefined,
      {},
      options
    );
  }

  public async createPrivilege(
    authorization: string,
    req: listPrivilegeArrayResponse,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: Id }> {
    return this.request<Id>(
      "POST",
      "/api/1/privileges",
      authorization,
      req,
      {},
      options
    );
  }

  public async updatePrivilege(
    authorization: string,
    privilegeId: string,
    req: listPrivilegeArrayResponse,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: Id }> {
    return this.request<Id>(
      "PUT",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}`,
      authorization,
      req,
      {},
      options
    );
  }

  public async getPrivilege(
    authorization: string,
    privilegeId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body?: listPrivilegeArrayResponse;
  }> {
    return this.request<listPrivilegeArrayResponse>(
      "GET",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async deletePrivilege(
    authorization: string,
    privilegeId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getAssignedRoles(
    authorization: string,
    privilegeId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: AssignedRoleResponse }> {
    return this.request<AssignedRoleResponse>(
      "GET",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}/roles`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async assignRoles(
    authorization: string,
    privilegeId: number,
    req: AssignRoleRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: StatusMessage }> {
    return this.request<StatusMessage>(
      "POST",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}/roles`,
      authorization,
      req,
      {},
      options
    );
  }

  public async removeRole(
    authorization: string,
    privilegeId: number,
    roleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/1/privileges/${encodeURIComponent(
        String(privilegeId)
      )}/roles/${encodeURIComponent(String(roleId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getAssignedUsers(
    authorization: string,
    privilegeId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: AssignedUsersResponse }> {
    return this.request<AssignedUsersResponse>(
      "GET",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}/users`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async assignUsers(
    authorization: string,
    privilegeId: number,
    req: AssignUsersRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: StatusMessage }> {
    return this.request<StatusMessage>(
      "POST",
      `/api/1/privileges/${encodeURIComponent(String(privilegeId))}/users`,
      authorization,
      req,
      {},
      options
    );
  }

  public async removeUser(
    authorization: string,
    privilegeId: number,
    userId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/1/privileges/${encodeURIComponent(
        String(privilegeId)
      )}/users/${encodeURIComponent(String(userId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async listAccountBrands(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<Brands> }> {
    return this.request<Array<Brands>>(
      "GET",
      "/api/2/branding/brands",
      authorization,
      undefined,
      {},
      options
    );
  }

  public async createAccountBrand(
    authorization: string,
    accountBrand: AccountBrand,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AccountBrand1 }> {
    return this.request<AccountBrand1>(
      "POST",
      "/api/2/branding/brands",
      authorization,
      accountBrand, //Request body of API
      {}, // Query params of request
      options
    );
  }

  public async getAccountBrand(
    authorization: string,
    brandId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Brand }> {
    return this.request<Brand>(
      "GET",
      `/api/2/branding/brands/${encodeURIComponent(brandId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async updateAccountBrand(
    authorization: string,
    brandId: number,
    accountBrand: AccountBrand,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AccountBrand1 }> {
    return this.request<AccountBrand1>(
      "PUT",
      `/api/2/branding/brands/${encodeURIComponent(brandId)}`,
      authorization,
      accountBrand,
      {},
      options
    );
  }

  public async deleteAccountBrand(
    authorization: string,
    brandId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/branding/brands/${encodeURIComponent(brandId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async createMessageTemplate(
    authorization: string,
    brandId: number,
    messageTemplateSchema: MessageTemplateSchema,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "POST",
      `/api/2/branding/brands/${encodeURIComponent(brandId)}/templates`,
      authorization,
      messageTemplateSchema,
      {},
      options
    );
  }

  public async listMessageTemplates(
    authorization: string,
    brandId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "GET",
      `/api/2/branding/brands/${encodeURIComponent(brandId)}/templates`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getMessageTemplate(
    authorization: string,
    brandId: number,
    templateId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "GET",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/templates/${encodeURIComponent(templateId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getMessageTemplateType(
    authorization: string,
    brandId: number,
    templateType: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplateType }> {
    return this.request<MessageTemplateType>(
      "GET",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/templates/${encodeURIComponent(templateType)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getMessageTemplateTypeAndLocale(
    authorization: string,
    brandId: number,
    templateType: string,
    locale: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "GET",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/templates/${encodeURIComponent(templateType)}/${encodeURIComponent(
        locale
      )}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getMasterMessageTemplateByType(
    authorization: string,
    templateType: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "GET",
      `/api/2/branding/brands/master/templates/${encodeURIComponent(
        templateType
      )}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getMasterMessageTemplateByTypeAndLocale(
    authorization: string,
    templateType: string,
    locale: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "GET",
      `/api/2/branding/brands/master/templates/${encodeURIComponent(
        templateType
      )}/${encodeURIComponent(locale)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async updateMessageTemplate(
    authorization: string,
    brandId: number,
    templateId: number,
    messageTemplateSchema1: MessageTemplateSchema1,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "PUT",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/templates/${encodeURIComponent(templateId)}`,
      authorization,
      messageTemplateSchema1,
      {},
      options
    );
  }

  public async updateMessageTemplateByTypeAndLocale(
    authorization: string,
    brandId: number,
    templateType: string,
    locale: string,
    messageTemplateSchema2: MessageTemplateSchema2,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: MessageTemplate }> {
    return this.request<MessageTemplate>(
      "PUT",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/templates/${encodeURIComponent(templateType)}/${encodeURIComponent(
        locale
      )}`,
      authorization,
      messageTemplateSchema2,
      {},
      options
    );
  }

  public async deleteMessageTemplate(
    authorization: string,
    brandId: number,
    templateId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/templates/${encodeURIComponent(templateId)}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async listLanguages(
    authorization: string,
    brandId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<object> }> {
    return this.request<Array<object>>(
      "GET",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/custom_error_messages/languages`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async lookupCustomMessage(
    authorization: string,
    lookupR: LookupCustomMessage,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object }> {
    return this.request<object>(
      "POST",
      "/api/2/branding/custom_error_message",
      authorization,
      lookupR,
      {},
      options
    );
  }

  public async listCustomMessage(
    authorization: string,
    brandId: number,
    lookupR?: LookupCustomMessage,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<object> }> {
    return this.request<Array<object>>(
      "POST",
      `/api/2/branding/brands/${encodeURIComponent(
        brandId
      )}/custom_error_messages`,
      authorization,
      lookupR,
      {},
      options
    );
  }

  public async updateCustomMessage(
    authorization: string,
    brandId: number,
    customMessageSchema: CustomMessageSchema,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object }> {
    return this.request<object>(
      "PUT",
      `/api/2/branding/brands/${encodeURIComponent(
        String(brandId)
      )}/custom_error_messages`,
      authorization,
      customMessageSchema,
      {},
      options
    );
  }

  public async deleteCustomMessage(
    authorization: string,
    brandId: number,
    messageId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/branding/brands/${encodeURIComponent(
        String(brandId)
      )}/custom_error_messages/${encodeURIComponent(String(messageId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async createCustomAttribute(
    authorization: string,
    req: CreateCustomAttributeRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CustomAttributeResponse;
  }> {
    return this.request<CustomAttributeResponse>(
      "POST",
      "/api/2/users/custom_attributes",
      authorization,
      req,
      {},
      options
    );
  }

  public async listCustomAttribute(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<CustomAttributeResponse>;
  }> {
    return this.request<Array<CustomAttributeResponse>>(
      "GET",
      "/api/2/users/custom_attributes",
      authorization,
      undefined,
      {},
      options
    );
  }

  public async getCustomAttribute(
    authorization: string,
    customId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CustomAttributeResponse;
  }> {
    return this.request<CustomAttributeResponse>(
      "GET",
      `/api/2/users/custom_attributes/${encodeURIComponent(String(customId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async updateCustomAttribute(
    authorization: string,
    customId: string,
    req: CreateCustomAttributeRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CustomAttributeResponse;
  }> {
    return this.request<CustomAttributeResponse>(
      "PUT",
      `/api/2/users/custom_attributes/${encodeURIComponent(String(customId))}`,
      authorization,
      req,
      {},
      options
    );
  }

  public async deleteCustomAttribute(
    authorization: string,
    customId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    return this.request<any>(
      "DELETE",
      `/api/2/users/custom_attributes/${encodeURIComponent(String(customId))}`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async verifyingFactor(
    authorization: string,
    userId: number,
    verifyFactorRequest: VerifyFactorRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: VerifyFactorVoice200ResponseInner;
  }> {
    return this.request<VerifyFactorVoice200ResponseInner>(
      "POST",
      `/api/2/mfa/users/${encodeURIComponent(String(userId))}/verifications/`,
      authorization,
      verifyFactorRequest,
      {},
      options
    );
  }
  public async getAppsToEmbed(
    authorization: string,
    token: string,
    email: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    const queryParameters = {
      token: ObjectSerializer.serialize(token, "string"),
      email: ObjectSerializer.serialize(email, "string"),
    };
    return this.request<any>(
      "GET",
      "/client/apps/embed2",
      authorization,
      undefined,
      queryParameters,
      options
    );
  }

  public async createSessionLoginToken(
    authorization: string,
    generateSessionLoginTokenRequest: GenerateSessionLoginTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: LoginSessionToken }> {
    return this.request<LoginSessionToken>(
      "POST",
      "/api/1/login/auth",
      authorization,
      generateSessionLoginTokenRequest,
      {},
      options
    );
  }

  public async verifyFactorLoginPages(
    authorization: string,
    verifyFactorLoginPagesRequest: VerifyFactorLoginPagesRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: VerifyFactorLoginPagesResponse;
  }> {
    return this.request<VerifyFactorLoginPagesResponse>(
      "POST",
      "/api/1/login/verify_factor",
      authorization,
      verifyFactorLoginPagesRequest,
      {},
      options
    );
  }
  public async createSession(
    authorization: string,
    data: any,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    return this.request<any>(
      "POST",
      "/session_via_api_token",
      authorization,
      data,
      {},
      options
    );
  }

  public async runReport(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object }> {
    return this.request<object>(
      "POST",
      `/api/2/reports/${encodeURIComponent(String(id))}/run`,
      authorization,
      undefined,
      {},
      options
    );
  }

  public async runReportInBackground(
    authorization: string,
    id: number,
    email: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object }> {
    return this.request<object>(
      "POST",
      `/api/2/reports/${encodeURIComponent(String(id))}/run_background`,
      authorization,
      email,
      {},
      options
    );
  }
}
