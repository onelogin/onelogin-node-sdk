

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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/verifications".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling activateFactor."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling activateFactor."
      );
    }

    // verify required parameter 'activateFactorRequest' is not null or undefined
    if (activateFactorRequest === null || activateFactorRequest === undefined) {
      throw new Error(
        "Required parameter activateFactorRequest was null or undefined when calling activateFactor."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        activateFactorRequest,
        "ActivateFactorRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param id
   * @param addAccessTokenClaimRequest
   */
  public async addAccessTokenClaim(
    authorization: string,
    id: number,
    addAccessTokenClaimRequest: AddAccessTokenClaimRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/claims".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling addAccessTokenClaim."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling addAccessTokenClaim."
      );
    }

    // verify required parameter 'addAccessTokenClaimRequest' is not null or undefined
    if (
      addAccessTokenClaimRequest === null ||
      addAccessTokenClaimRequest === undefined
    ) {
      throw new Error(
        "Required parameter addAccessTokenClaimRequest was null or undefined when calling addAccessTokenClaim."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        addAccessTokenClaimRequest,
        "AddAccessTokenClaimRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Id }>(
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
                body = ObjectSerializer.deserialize(body, "Id");
                resolve({ response: response, body: body });
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
   * @param id
   * @param addClientAppRequest
   */
  public async addClientApp(
    authorization: string,
    id: number,
    addClientAppRequest: AddClientAppRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: ClientApp }> {
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/clients".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling addClientApp."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling addClientApp."
      );
    }

    // verify required parameter 'addClientAppRequest' is not null or undefined
    if (addClientAppRequest === null || addClientAppRequest === undefined) {
      throw new Error(
        "Required parameter addClientAppRequest was null or undefined when calling addClientApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        addClientAppRequest,
        "AddClientAppRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: ClientApp }>(
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
                body = ObjectSerializer.deserialize(body, "ClientApp");
                resolve({ response: response, body: body });
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
   * @param roleId Set to the id of the role you want to return.
   * @param requestBody
   */
  public async addRoleAdmins(
    authorization: string,
    roleId: number,
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<AddRoleUsers200ResponseInner>;
  }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/admins".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling addRoleAdmins."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling addRoleAdmins."
      );
    }

    // verify required parameter 'requestBody' is not null or undefined
    if (requestBody === null || requestBody === undefined) {
      throw new Error(
        "Required parameter requestBody was null or undefined when calling addRoleAdmins."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(requestBody, "Array<number>"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<AddRoleUsers200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<AddRoleUsers200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<AddRoleUsers200ResponseInner>;
  }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/users".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling addRoleUsers."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling addRoleUsers."
      );
    }

    // verify required parameter 'requestBody' is not null or undefined
    if (requestBody === null || requestBody === undefined) {
      throw new Error(
        "Required parameter requestBody was null or undefined when calling addRoleUsers."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(requestBody, "Array<number>"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<AddRoleUsers200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<AddRoleUsers200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/scopes".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling addScope."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling addScope."
      );
    }

    // verify required parameter 'addScopeRequest' is not null or undefined
    if (addScopeRequest === null || addScopeRequest === undefined) {
      throw new Error(
        "Required parameter addScopeRequest was null or undefined when calling addScope."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(addScopeRequest, "AddScopeRequest"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Id }>(
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
                body = ObjectSerializer.deserialize(body, "Id");
                resolve({ response: response, body: body });
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
   * @param requestBody The request body must contain an array of User Mapping IDs in the desired order.
   */
  public async bulkMappingSort(
    authorization: string,
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<number> }> {
    const localVarPath = this.basePath + "/api/2/mappings/sort";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling bulkMappingSort."
      );
    }

    // verify required parameter 'requestBody' is not null or undefined
    if (requestBody === null || requestBody === undefined) {
      throw new Error(
        "Required parameter requestBody was null or undefined when calling bulkMappingSort."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(requestBody, "Array<number>"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<number>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<number>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/sort".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling bulkSort."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling bulkSort."
      );
    }

    // verify required parameter 'requestBody' is not null or undefined
    if (requestBody === null || requestBody === undefined) {
      throw new Error(
        "Required parameter requestBody was null or undefined when calling bulkSort."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(requestBody, "Array<number>"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<number>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<number>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/apps";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createApp."
      );
    }

    // verify required parameter 'schema' is not null or undefined
    if (schema === null || schema === undefined) {
      throw new Error(
        "Required parameter schema was null or undefined when calling createApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(schema, "Schema"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Schema }>(
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
                body = ObjectSerializer.deserialize(body, "Schema");
                resolve({ response: response, body: body });
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
   * @param createAuthorizationServerRequest
   */
  public async createAuthorizationServer(
    authorization: string,
    createAuthorizationServerRequest: CreateAuthorizationServerRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    const localVarPath = this.basePath + "/api/2/api_authorizations";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createAuthorizationServer."
      );
    }

    // verify required parameter 'createAuthorizationServerRequest' is not null or undefined
    if (
      createAuthorizationServerRequest === null ||
      createAuthorizationServerRequest === undefined
    ) {
      throw new Error(
        "Required parameter createAuthorizationServerRequest was null or undefined when calling createAuthorizationServer."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        createAuthorizationServerRequest,
        "CreateAuthorizationServerRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Id }>(
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
                body = ObjectSerializer.deserialize(body, "Id");
                resolve({ response: response, body: body });
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
   * @param createEnvironmentVariableRequest
   */
  public async createEnvironmentVariable(
    authorization: string,
    createEnvironmentVariableRequest: CreateEnvironmentVariableRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Envvar }> {
    const localVarPath = this.basePath + "/api/2/hooks/envs";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createEnvironmentVariable."
      );
    }

    // verify required parameter 'createEnvironmentVariableRequest' is not null or undefined
    if (
      createEnvironmentVariableRequest === null ||
      createEnvironmentVariableRequest === undefined
    ) {
      throw new Error(
        "Required parameter createEnvironmentVariableRequest was null or undefined when calling createEnvironmentVariable."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        createEnvironmentVariableRequest,
        "CreateEnvironmentVariableRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Envvar }>(
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
                body = ObjectSerializer.deserialize(body, "Envvar");
                resolve({ response: response, body: body });
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
   * @param hook
   */
  public async createHook(
    authorization: string,
    hook: Hook,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath = this.basePath + "/api/2/hooks";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createHook."
      );
    }

    // verify required parameter 'hook' is not null or undefined
    if (hook === null || hook === undefined) {
      throw new Error(
        "Required parameter hook was null or undefined when calling createHook."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(hook, "Hook"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param mapping
   */
  public async createMapping(
    authorization: string,
    mapping: Mapping,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: number }> {
    const localVarPath = this.basePath + "/api/2/mappings";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createMapping."
      );
    }

    // verify required parameter 'mapping' is not null or undefined
    if (mapping === null || mapping === undefined) {
      throw new Error(
        "Required parameter mapping was null or undefined when calling createMapping."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(mapping, "Mapping"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: number }>(
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
                body = ObjectSerializer.deserialize(body, "number");
                resolve({ response: response, body: body });
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
   * @param riskRule
   */
  public async createRiskRule(
    authorization: string,
    riskRule: RiskRule,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath = this.basePath + "/api/2/risk/rules";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createRiskRule."
      );
    }

    // verify required parameter 'riskRule' is not null or undefined
    if (riskRule === null || riskRule === undefined) {
      throw new Error(
        "Required parameter riskRule was null or undefined when calling createRiskRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(riskRule, "RiskRule"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   */
  public async createRoles(
    authorization: string,
    role: Role,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CreateRoles201ResponseInner;
  }> {
    const localVarPath = this.basePath + "/api/2/roles";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createRoles."
      );
    }

    if (role === null || role === undefined) {
      throw new Error(
        "Required parameter role was null or undefined when calling createRoles."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(role, "Role"),
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
      return new Promise<{
        response: http.IncomingMessage;
        body: CreateRoles201ResponseInner;
      }>((resolve, reject) => {
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
                "CreateRoles201ResponseInner"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createRule."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling createRule."
      );
    }

    // verify required parameter 'rule' is not null or undefined
    if (rule === null || rule === undefined) {
      throw new Error(
        "Required parameter rule was null or undefined when calling createRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(rule, "Rule"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: RuleId }>(
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
                body = ObjectSerializer.deserialize(body, "RuleId");
                resolve({ response: response, body: body });
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
    const localVarPath = this.basePath + "/api/2/users";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling createUser."
      );
    }

    // verify required parameter 'user' is not null or undefined
    if (user === null || user === undefined) {
      throw new Error(
        "Required parameter user was null or undefined when calling createUser."
      );
    }

    if (mappings !== undefined) {
      localVarQueryParameters["mappings"] = ObjectSerializer.serialize(
        mappings,
        "'async' | 'sync' | 'disabled'"
      );
    }

    if (validatePolicy !== undefined) {
      localVarQueryParameters["validate_policy"] = ObjectSerializer.serialize(
        validatePolicy,
        "boolean"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(user, "User"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: User }>(
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
                body = ObjectSerializer.deserialize(body, "User");
                resolve({ response: response, body: body });
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
   * @param id
   * @param claimId
   */
  public async deleteAccessTokenClaim(
    authorization: string,
    id: number,
    claimId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/claims/{claim_id}"
        .replace("{" + "id" + "}", encodeURIComponent(String(id)))
        .replace("{" + "claim_id" + "}", encodeURIComponent(String(claimId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteAccessTokenClaim."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling deleteAccessTokenClaim."
      );
    }

    // verify required parameter 'claimId' is not null or undefined
    if (claimId === null || claimId === undefined) {
      throw new Error(
        "Required parameter claimId was null or undefined when calling deleteAccessTokenClaim."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param appId
   */
  public async deleteApp(
    authorization: string,
    appId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteApp."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling deleteApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param appId
   * @param parameterId
   */
  public async deleteAppParameter(
    authorization: string,
    appId: number,
    parameterId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/parameters/{parameter_id}"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace(
          "{" + "parameter_id" + "}",
          encodeURIComponent(String(parameterId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteAppParameter."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling deleteAppParameter."
      );
    }

    // verify required parameter 'parameterId' is not null or undefined
    if (parameterId === null || parameterId === undefined) {
      throw new Error(
        "Required parameter parameterId was null or undefined when calling deleteAppParameter."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param id
   */
  public async deleteAuthorizationServer(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteAuthorizationServer."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling deleteAuthorizationServer."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param envvarId Set to the id of the Hook Environment Variable that you want to fetch.
   */
  public async deleteEnvironmentVariable(
    authorization: string,
    envvarId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/hooks/envs/{envvar_id}".replace(
        "{" + "envvar_id" + "}",
        encodeURIComponent(String(envvarId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteEnvironmentVariable."
      );
    }

    // verify required parameter 'envvarId' is not null or undefined
    if (envvarId === null || envvarId === undefined) {
      throw new Error(
        "Required parameter envvarId was null or undefined when calling deleteEnvironmentVariable."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param deviceId Set to the device_id of the MFA device.
   */
  public async deleteFactor(
    authorization: string,
    userId: number,
    deviceId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/devices/{device_id}"
        .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
        .replace("{" + "device_id" + "}", encodeURIComponent(String(deviceId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteFactor."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling deleteFactor."
      );
    }

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new Error(
        "Required parameter deviceId was null or undefined when calling deleteFactor."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param hookId Set to the id of the Hook that you want to return.
   */
  public async deleteHook(
    authorization: string,
    hookId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/hooks/{hook_id}".replace(
        "{" + "hook_id" + "}",
        encodeURIComponent(String(hookId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteHook."
      );
    }

    // verify required parameter 'hookId' is not null or undefined
    if (hookId === null || hookId === undefined) {
      throw new Error(
        "Required parameter hookId was null or undefined when calling deleteHook."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param mappingId The id of the user mapping to locate.
   */
  public async deleteMapping(
    authorization: string,
    mappingId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/mappings/{mapping_id}".replace(
        "{" + "mapping_id" + "}",
        encodeURIComponent(String(mappingId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteMapping."
      );
    }

    // verify required parameter 'mappingId' is not null or undefined
    if (mappingId === null || mappingId === undefined) {
      throw new Error(
        "Required parameter mappingId was null or undefined when calling deleteMapping."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param riskRuleId
   */
  public async deleteRiskRule(
    authorization: string,
    riskRuleId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RiskRule }> {
    const localVarPath =
      this.basePath +
      "/api/2/risk/rules/{risk_rule_id}".replace(
        "{" + "risk_rule_id" + "}",
        encodeURIComponent(String(riskRuleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteRiskRule."
      );
    }

    // verify required parameter 'riskRuleId' is not null or undefined
    if (riskRuleId === null || riskRuleId === undefined) {
      throw new Error(
        "Required parameter riskRuleId was null or undefined when calling deleteRiskRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: RiskRule }>(
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
                body = ObjectSerializer.deserialize(body, "RiskRule");
                resolve({ response: response, body: body });
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
   * @param roleId Set to the id of the role you want to return.
   */
  public async deleteRole(
    authorization: string,
    roleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteRole."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling deleteRole."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param appId
   * @param ruleId The id of the app rule to locate.
   */
  public async deleteRule(
    authorization: string,
    appId: number,
    ruleId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/{rule_id}"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace("{" + "rule_id" + "}", encodeURIComponent(String(ruleId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteRule."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling deleteRule."
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new Error(
        "Required parameter ruleId was null or undefined when calling deleteRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param id
   * @param scopeId
   */
  public async deleteScope(
    authorization: string,
    id: number,
    scopeId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/scopes/{scope_id}"
        .replace("{" + "id" + "}", encodeURIComponent(String(id)))
        .replace("{" + "scope_id" + "}", encodeURIComponent(String(scopeId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteScope."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling deleteScope."
      );
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new Error(
        "Required parameter scopeId was null or undefined when calling deleteScope."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param userId Set to the id of the user that you want to return.
   */
  public async deleteUser(
    authorization: string,
    userId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/users/{user_id}".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling deleteUser."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling deleteUser."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param mappingId The id of the user mapping to locate.
   * @param requestBody Request body is a list of user IDs tested against the mapping conditions to verify that the mapping would be applied
   */
  public async dryRunMapping(
    authorization: string,
    mappingId: number,
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Array<object> }> {
    const localVarPath =
      this.basePath +
      "/api/2/mappings/{mapping_id}/dryrun".replace(
        "{" + "mapping_id" + "}",
        encodeURIComponent(String(mappingId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling dryRunMapping."
      );
    }

    // verify required parameter 'mappingId' is not null or undefined
    if (mappingId === null || mappingId === undefined) {
      throw new Error(
        "Required parameter mappingId was null or undefined when calling dryRunMapping."
      );
    }

    // verify required parameter 'requestBody' is not null or undefined
    if (requestBody === null || requestBody === undefined) {
      throw new Error(
        "Required parameter requestBody was null or undefined when calling dryRunMapping."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(requestBody, "Array<number>"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<object>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<object>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
  ): Promise<{
    response: http.IncomingMessage;
    body: FactorInner;
  }> {
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/registrations".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling enrollFactor."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling enrollFactor."
      );
    }

    // verify required parameter 'enrollFactorRequest' is not null or undefined
    if (enrollFactorRequest === null || enrollFactorRequest === undefined) {
      throw new Error(
        "Required parameter enrollFactorRequest was null or undefined when calling enrollFactor."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        enrollFactorRequest,
        "EnrollFactorRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: FactorInner;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "FactorInner");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @param authorization
   * @param generateMfaTokenRequest
   */
  public async generateMfaToken(
    authorization: string,
    generateMfaTokenRequest: GenerateMfaTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GenerateMfaToken200Response;
  }> {
    const localVarPath = this.basePath + "/api/2/mfa/users/{user_id}/mfa_token";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling generateMfaToken."
      );
    }

    // verify required parameter 'generateMfaTokenRequest' is not null or undefined
    if (
      generateMfaTokenRequest === null ||
      generateMfaTokenRequest === undefined
    ) {
      throw new Error(
        "Required parameter generateMfaTokenRequest was null or undefined when calling generateMfaToken."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        generateMfaTokenRequest,
        "GenerateMfaTokenRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GenerateMfaToken200Response;
      }>((resolve, reject) => {
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
                "GenerateMfaToken200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/saml_assertion";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling generateSamlAssertion."
      );
    }

    // verify required parameter 'generateSamlAssertionRequest' is not null or undefined
    if (
      generateSamlAssertionRequest === null ||
      generateSamlAssertionRequest === undefined
    ) {
      throw new Error(
        "Required parameter generateSamlAssertionRequest was null or undefined when calling generateSamlAssertion."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        generateSamlAssertionRequest,
        "GenerateSamlAssertionRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param generateTokenRequest
   */
  public async generateToken(
    authorization: string,
    generateTokenRequest: GenerateTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GenerateToken200Response;
  }> {
    const localVarPath = this.basePath + "/auth/oauth2/v2/token";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling generateToken."
      );
    }

    // verify required parameter 'generateTokenRequest' is not null or undefined
    if (generateTokenRequest === null || generateTokenRequest === undefined) {
      throw new Error(
        "Required parameter generateTokenRequest was null or undefined when calling generateToken."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        generateTokenRequest,
        "GenerateTokenRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GenerateToken200Response;
      }>((resolve, reject) => {
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
                "GenerateToken200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getApp."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling getApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Schema }>(
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
                body = ObjectSerializer.deserialize(body, "GetAppSchema");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getAuthorizationServer."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling getAuthorizationServer."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GetAuthorizationServer200Response;
      }>((resolve, reject) => {
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
                "GetAuthorizationServer200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/factors".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getAvailableFactors."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling getAvailableFactors."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<GetAvailableFactors200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<GetAvailableFactors200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/clients".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getClientApps."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling getClientApps."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<GetClientApps200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<GetClientApps200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/devices".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getEnrolledFactors."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling getEnrolledFactors."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Device>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Device>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/hooks/envs/{envvar_id}".replace(
        "{" + "envvar_id" + "}",
        encodeURIComponent(String(envvarId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getEnvironmentVariable."
      );
    }

    // verify required parameter 'envvarId' is not null or undefined
    if (envvarId === null || envvarId === undefined) {
      throw new Error(
        "Required parameter envvarId was null or undefined when calling getEnvironmentVariable."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Envvar }>(
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
                body = ObjectSerializer.deserialize(body, "Envvar");
                resolve({ response: response, body: body });
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
   * @param hookId Set to the id of the Hook that you want to return.
   */
  public async getHook(
    authorization: string,
    hookId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Hook }> {
    const localVarPath =
      this.basePath +
      "/api/2/hooks/{hook_id}".replace(
        "{" + "hook_id" + "}",
        encodeURIComponent(String(hookId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getHook."
      );
    }

    // verify required parameter 'hookId' is not null or undefined
    if (hookId === null || hookId === undefined) {
      throw new Error(
        "Required parameter hookId was null or undefined when calling getHook."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Hook }>(
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
                body = ObjectSerializer.deserialize(body, "Hook");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/hooks/{hook_id}/logs".replace(
        "{" + "hook_id" + "}",
        encodeURIComponent(String(hookId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getLogs."
      );
    }

    // verify required parameter 'hookId' is not null or undefined
    if (hookId === null || hookId === undefined) {
      throw new Error(
        "Required parameter hookId was null or undefined when calling getLogs."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (requestId !== undefined) {
      localVarQueryParameters["request_id"] = ObjectSerializer.serialize(
        requestId,
        "string"
      );
    }

    if (correlationId !== undefined) {
      localVarQueryParameters["correlation_id"] = ObjectSerializer.serialize(
        correlationId,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Array<Log> }>(
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
                body = ObjectSerializer.deserialize(body, "Array<Log>");
                resolve({ response: response, body: body });
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
   * @param mappingId The id of the user mapping to locate.
   */
  public async getMapping(
    authorization: string,
    mappingId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Mapping }> {
    const localVarPath =
      this.basePath +
      "/api/2/mappings/{mapping_id}".replace(
        "{" + "mapping_id" + "}",
        encodeURIComponent(String(mappingId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getMapping."
      );
    }

    // verify required parameter 'mappingId' is not null or undefined
    if (mappingId === null || mappingId === undefined) {
      throw new Error(
        "Required parameter mappingId was null or undefined when calling getMapping."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Mapping }>(
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
                body = ObjectSerializer.deserialize(body, "Mapping");
                resolve({ response: response, body: body });
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
   */
  public async getRateLimit(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GetRateLimit200Response;
  }> {
    const localVarPath = this.basePath + "/auth/rate_limit";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRateLimit."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GetRateLimit200Response;
      }>((resolve, reject) => {
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
                "GetRateLimit200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/risk/rules/{risk_rule_id}".replace(
        "{" + "risk_rule_id" + "}",
        encodeURIComponent(String(riskRuleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRiskRule."
      );
    }

    // verify required parameter 'riskRuleId' is not null or undefined
    if (riskRuleId === null || riskRuleId === undefined) {
      throw new Error(
        "Required parameter riskRuleId was null or undefined when calling getRiskRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
    const localVarPath = this.basePath + "/api/2/risk/verify";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRiskScore."
      );
    }

    // verify required parameter 'getRiskScoreRequest' is not null or undefined
    if (getRiskScoreRequest === null || getRiskScoreRequest === undefined) {
      throw new Error(
        "Required parameter getRiskScoreRequest was null or undefined when calling getRiskScore."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        getRiskScoreRequest,
        "GetRiskScoreRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GetRiskScore200Response;
      }>((resolve, reject) => {
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
                "GetRiskScore200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRole."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling getRole."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Role }>(
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
                body = ObjectSerializer.deserialize(body, "Role");
                resolve({ response: response, body: body });
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
  ): Promise<{ response: http.IncomingMessage; body: Array<Schema1> }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/admins".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["applcation/json", "application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRoleAdmins."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling getRoleAdmins."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (name !== undefined) {
      localVarQueryParameters["name"] = ObjectSerializer.serialize(
        name,
        "string"
      );
    }

    if (includeUnassigned !== undefined) {
      localVarQueryParameters["include_unassigned"] =
        ObjectSerializer.serialize(includeUnassigned, "boolean");
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Schema1>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Schema1>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
  ): Promise<{ response: http.IncomingMessage; body: Array<RoleAppResponse> }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/apps".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["applcation/json", "application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRoleApps."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling getRoleApps."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (assigned !== undefined) {
      localVarQueryParameters["assigned"] = ObjectSerializer.serialize(
        assigned,
        "boolean"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<RoleAppResponse>;
      }>((resolve, reject) => {
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
                "Array<RoleAppResponse>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
  ): Promise<{ response: http.IncomingMessage; body: Array<Schema1> }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/users".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["applcation/json", "application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRoleUsers."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling getRoleUsers."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (name !== undefined) {
      localVarQueryParameters["name"] = ObjectSerializer.serialize(
        name,
        "string"
      );
    }

    if (includeUnassigned !== undefined) {
      localVarQueryParameters["include_unassigned"] =
        ObjectSerializer.serialize(includeUnassigned, "boolean");
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Schema1>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Schema1>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/{rule_id}"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace("{" + "rule_id" + "}", encodeURIComponent(String(ruleId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getRule."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling getRule."
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new Error(
        "Required parameter ruleId was null or undefined when calling getRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Rule }>(
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
                body = ObjectSerializer.deserialize(body, "Rule");
                resolve({ response: response, body: body });
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
    const localVarPath = this.basePath + "/api/2/risk/scores";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getScoreInsights."
      );
    }

    if (before !== undefined) {
      localVarQueryParameters["before"] = ObjectSerializer.serialize(
        before,
        "string"
      );
    }

    if (after !== undefined) {
      localVarQueryParameters["after"] = ObjectSerializer.serialize(
        after,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GetScoreInsights200Response;
      }>((resolve, reject) => {
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
                "GetScoreInsights200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/users/{user_id}".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getUser."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling getUser."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: User }>(
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
                body = ObjectSerializer.deserialize(body, "User");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/users/{user_id}/apps".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getUserApps."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling getUserApps."
      );
    }

    if (ignoreVisibility !== undefined) {
      localVarQueryParameters["ignore_visibility"] = ObjectSerializer.serialize(
        ignoreVisibility,
        "boolean"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<GetUserApps200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<GetUserApps200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/claims".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listAccessTokenClaims."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling listAccessTokenClaims."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListAccessTokenClaims200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListAccessTokenClaims200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/actions/{action_value}/values"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace(
          "{" + "action_value" + "}",
          encodeURIComponent(String(actionValue))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listActionValues."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listActionValues."
      );
    }

    // verify required parameter 'actionValue' is not null or undefined
    if (actionValue === null || actionValue === undefined) {
      throw new Error(
        "Required parameter actionValue was null or undefined when calling listActionValues."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListConditionValues200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListConditionValues200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/actions".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listActions."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listActions."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListActions200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListActions200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/users".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listAppUsers."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listAppUsers."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListAppUsers200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListAppUsers200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/apps";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listApps."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (name !== undefined) {
      localVarQueryParameters["name"] = ObjectSerializer.serialize(
        name,
        "string"
      );
    }

    if (connectorId !== undefined) {
      localVarQueryParameters["connector_id"] = ObjectSerializer.serialize(
        connectorId,
        "number"
      );
    }

    if (authMethod !== undefined) {
      localVarQueryParameters["auth_method"] = ObjectSerializer.serialize(
        authMethod,
        "AuthMethod"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Schema3>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Schema3>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/api_authorizations";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listAuthorizationServers."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListAuthorizationServers200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListAuthorizationServers200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/conditions/{condition_value}/operators"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace(
          "{" + "condition_value" + "}",
          encodeURIComponent(String(conditionValue))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listConditionOperators."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listConditionOperators."
      );
    }

    // verify required parameter 'conditionValue' is not null or undefined
    if (conditionValue === null || conditionValue === undefined) {
      throw new Error(
        "Required parameter conditionValue was null or undefined when calling listConditionOperators."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListConditionOperators200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListConditionOperators200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/conditions/{condition_value}/values"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace(
          "{" + "condition_value" + "}",
          encodeURIComponent(String(conditionValue))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listConditionValues."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listConditionValues."
      );
    }

    // verify required parameter 'conditionValue' is not null or undefined
    if (conditionValue === null || conditionValue === undefined) {
      throw new Error(
        "Required parameter conditionValue was null or undefined when calling listConditionValues."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListConditionValues200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListConditionValues200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/conditions".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listConditions."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listConditions."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListConditions200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListConditions200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/connectors";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listConnectors."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (name !== undefined) {
      localVarQueryParameters["name"] = ObjectSerializer.serialize(
        name,
        "string"
      );
    }

    if (authMethod !== undefined) {
      localVarQueryParameters["auth_method"] = ObjectSerializer.serialize(
        authMethod,
        "AuthMethod"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Connector>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Connector>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/hooks/envs";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listEnvironmentVariables."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Envvar>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Envvar>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/hooks";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listHooks."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Array<Hook> }>(
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
                body = ObjectSerializer.deserialize(body, "Array<Hook>");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/mappings/actions/{action_value}/values".replace(
        "{" + "action_value" + "}",
        encodeURIComponent(String(actionValue))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listMappingActionValues."
      );
    }

    // verify required parameter 'actionValue' is not null or undefined
    if (actionValue === null || actionValue === undefined) {
      throw new Error(
        "Required parameter actionValue was null or undefined when calling listMappingActionValues."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListConditionValues200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListConditionValues200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/mappings/actions";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listMappingActions."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListActions200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListActions200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mappings/conditions/{condition_value}/operators".replace(
        "{" + "condition_value" + "}",
        encodeURIComponent(String(conditionValue))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listMappingConditionOperators."
      );
    }

    // verify required parameter 'conditionValue' is not null or undefined
    if (conditionValue === null || conditionValue === undefined) {
      throw new Error(
        "Required parameter conditionValue was null or undefined when calling listMappingConditionOperators."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListMappingConditionOperators200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListMappingConditionOperators200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mappings/conditions/{condition_value}/values".replace(
        "{" + "condition_value" + "}",
        encodeURIComponent(String(conditionValue))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listMappingConditionValues."
      );
    }

    // verify required parameter 'conditionValue' is not null or undefined
    if (conditionValue === null || conditionValue === undefined) {
      throw new Error(
        "Required parameter conditionValue was null or undefined when calling listMappingConditionValues."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListConditionValues200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListConditionValues200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/mappings/conditions";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listMappingConditions."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListMappingConditions200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListMappingConditions200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/mappings";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listMappings."
      );
    }

    if (enabled !== undefined) {
      localVarQueryParameters["enabled"] = ObjectSerializer.serialize(
        enabled,
        "boolean"
      );
    }

    if (hasCondition !== undefined) {
      localVarQueryParameters["has_condition"] = ObjectSerializer.serialize(
        hasCondition,
        "string"
      );
    }

    if (hasConditionType !== undefined) {
      localVarQueryParameters["has_condition_type"] =
        ObjectSerializer.serialize(
          hasConditionType,
          "'builtin' | 'custom' | 'none'"
        );
    }

    if (hasAction !== undefined) {
      localVarQueryParameters["has_action"] = ObjectSerializer.serialize(
        hasAction,
        "string"
      );
    }

    if (hasActionType !== undefined) {
      localVarQueryParameters["has_action_type"] = ObjectSerializer.serialize(
        hasActionType,
        "'builtin' | 'custom' | 'none'"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<Mapping>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Array<Mapping>");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @param authorization
   */
  public async listRiskRules(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath = this.basePath + "/api/2/risk/rules";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listRiskRules."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
    const localVarPath = this.basePath + "/api/2/roles";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listRoles."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (name !== undefined) {
      localVarQueryParameters["name"] = ObjectSerializer.serialize(
        name,
        "string"
      );
    }

    if (appId !== undefined) {
      localVarQueryParameters["app_id"] = ObjectSerializer.serialize(
        appId,
        "string"
      );
    }

    if (fields !== undefined) {
      localVarQueryParameters["fields"] = ObjectSerializer.serialize(
        fields,
        "'apps' | 'users' | 'admins'"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Array<Role> }>(
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
                body = ObjectSerializer.deserialize(body, "Array<Role>");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{appId}/rules".replace(
        "{" + "appId" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listRules."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling listRules."
      );
    }

    if (enabled !== undefined) {
      localVarQueryParameters["enabled"] = ObjectSerializer.serialize(
        enabled,
        "boolean"
      );
    }

    if (hasCondition !== undefined) {
      localVarQueryParameters["has_condition"] = ObjectSerializer.serialize(
        hasCondition,
        "string"
      );
    }

    if (hasConditionType !== undefined) {
      localVarQueryParameters["has_condition_type"] =
        ObjectSerializer.serialize(hasConditionType, "string");
    }

    if (hasAction !== undefined) {
      localVarQueryParameters["has_action"] = ObjectSerializer.serialize(
        hasAction,
        "string"
      );
    }

    if (hasActionType !== undefined) {
      localVarQueryParameters["has_action_type"] = ObjectSerializer.serialize(
        hasActionType,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Array<Rule> }>(
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
                body = ObjectSerializer.deserialize(body, "Array<Rule>");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/scopes".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listScopes."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling listScopes."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<ListScopes200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<ListScopes200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/users";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling listUsers."
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (page !== undefined) {
      localVarQueryParameters["page"] = ObjectSerializer.serialize(
        page,
        "number"
      );
    }

    if (cursor !== undefined) {
      localVarQueryParameters["cursor"] = ObjectSerializer.serialize(
        cursor,
        "string"
      );
    }

    if (createdSince !== undefined) {
      localVarQueryParameters["created_since"] = ObjectSerializer.serialize(
        createdSince,
        "string"
      );
    }

    if (createdUntil !== undefined) {
      localVarQueryParameters["created_until"] = ObjectSerializer.serialize(
        createdUntil,
        "string"
      );
    }

    if (updatedSince !== undefined) {
      localVarQueryParameters["updated_since"] = ObjectSerializer.serialize(
        updatedSince,
        "string"
      );
    }

    if (updatedUntil !== undefined) {
      localVarQueryParameters["updated_until"] = ObjectSerializer.serialize(
        updatedUntil,
        "string"
      );
    }

    if (lastLoginSince !== undefined) {
      localVarQueryParameters["last_login_since"] = ObjectSerializer.serialize(
        lastLoginSince,
        "string"
      );
    }

    if (lastLoginUntil !== undefined) {
      localVarQueryParameters["last_login_until"] = ObjectSerializer.serialize(
        lastLoginUntil,
        "string"
      );
    }

    if (firstname !== undefined) {
      localVarQueryParameters["firstname"] = ObjectSerializer.serialize(
        firstname,
        "string"
      );
    }

    if (lastname !== undefined) {
      localVarQueryParameters["lastname"] = ObjectSerializer.serialize(
        lastname,
        "string"
      );
    }

    if (email !== undefined) {
      localVarQueryParameters["email"] = ObjectSerializer.serialize(
        email,
        "string"
      );
    }

    if (username !== undefined) {
      localVarQueryParameters["username"] = ObjectSerializer.serialize(
        username,
        "string"
      );
    }

    if (samaccountname !== undefined) {
      localVarQueryParameters["samaccountname"] = ObjectSerializer.serialize(
        samaccountname,
        "string"
      );
    }

    if (directoryId !== undefined) {
      localVarQueryParameters["directory_id"] = ObjectSerializer.serialize(
        directoryId,
        "string"
      );
    }

    if (externalId !== undefined) {
      localVarQueryParameters["external_id"] = ObjectSerializer.serialize(
        externalId,
        "string"
      );
    }

    if (appId !== undefined) {
      localVarQueryParameters["app_id"] = ObjectSerializer.serialize(
        appId,
        "string"
      );
    }

    if (userIds !== undefined) {
      localVarQueryParameters["user_ids"] = ObjectSerializer.serialize(
        userIds,
        "string"
      );
    }

    if (customAttributesAttributeName !== undefined) {
      localVarQueryParameters["custom_attributes.{attribute_name}"] =
        ObjectSerializer.serialize(customAttributesAttributeName, "string");
    }

    if (fields !== undefined) {
      localVarQueryParameters["fields"] = ObjectSerializer.serialize(
        fields,
        "string"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<listUserResponse>;
      }>((resolve, reject) => {
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
                "Array<listUserResponse>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/clients/{client_app_id}"
        .replace("{" + "id" + "}", encodeURIComponent(String(id)))
        .replace(
          "{" + "client_app_id" + "}",
          encodeURIComponent(String(clientAppId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling removeClientApp."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling removeClientApp."
      );
    }

    // verify required parameter 'clientAppId' is not null or undefined
    if (clientAppId === null || clientAppId === undefined) {
      throw new Error(
        "Required parameter clientAppId was null or undefined when calling removeClientApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param roleId Set to the id of the role you want to return.
   * @param removeRoleUsersRequest
   */
  public async removeRoleAdmins(
    authorization: string,
    roleId: number,
    userIds: number[], // Directly expect an array of user IDs
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/admins".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );

    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // Give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }

    // Verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling removeRoleAdmins."
      );
    }

    // Verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling removeRoleAdmins."
      );
    }

    // Verify required parameter 'userIds' is not null or undefined
    if (userIds === null || userIds === undefined) {
      throw new Error(
        "Required parameter userIds was null or undefined when calling removeRoleAdmins."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: userIds, // Pass the array directly as the request body
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
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param roleId Set to the id of the role you want to return.
   * @param removeRoleUsersRequest
   */
  public async removeRoleUsers(
    authorization: string,
    roleId: number,
    userIds: Array<number>, // Updated to directly accept an array of user IDs
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/users".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );

    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );

    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }

    // Verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling removeRoleUsers."
      );
    }

    // Verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling removeRoleUsers."
      );
    }
    if (!userIds || !Array.isArray(userIds)) {
      throw new Error("User IDs must be a valid array.");
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      json: true,
      body: userIds, // Pass the array of user IDs directly as the request body
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
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
   * @param revokeTokenRequest
   */
  public async revokeToken(
    authorization: string,
    revokeTokenRequest?: RevokeTokenRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GenerateToken400Response;
  }> {
    const localVarPath = this.basePath + "/auth/oauth2/revoke";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling revokeToken."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        revokeTokenRequest,
        "RevokeTokenRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: GenerateToken400Response;
      }>((resolve, reject) => {
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
                "GenerateToken400Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    requestBody: Array<number>,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<SetRoleApps200ResponseInner>;
  }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}/apps".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling setRoleApps."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling setRoleApps."
      );
    }

    // verify required parameter 'requestBody' is not null or undefined
    if (requestBody === null || requestBody === undefined) {
      throw new Error(
        "Required parameter requestBody was null or undefined when calling setRoleApps."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(requestBody, "Array<number>"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<SetRoleApps200ResponseInner>;
      }>((resolve, reject) => {
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
                "Array<SetRoleApps200ResponseInner>"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/risk/events";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling trackEvent."
      );
    }

    // verify required parameter 'trackEventRequest' is not null or undefined
    if (trackEventRequest === null || trackEventRequest === undefined) {
      throw new Error(
        "Required parameter trackEventRequest was null or undefined when calling trackEvent."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(trackEventRequest, "TrackEventRequest"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
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
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/claims/{claim_id}"
        .replace("{" + "id" + "}", encodeURIComponent(String(id)))
        .replace("{" + "claim_id" + "}", encodeURIComponent(String(claimId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateAccessTokenClaim."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling updateAccessTokenClaim."
      );
    }

    // verify required parameter 'claimId' is not null or undefined
    if (claimId === null || claimId === undefined) {
      throw new Error(
        "Required parameter claimId was null or undefined when calling updateAccessTokenClaim."
      );
    }

    // verify required parameter 'addAccessTokenClaimRequest' is not null or undefined
    if (
      addAccessTokenClaimRequest === null ||
      addAccessTokenClaimRequest === undefined
    ) {
      throw new Error(
        "Required parameter addAccessTokenClaimRequest was null or undefined when calling updateAccessTokenClaim."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        addAccessTokenClaimRequest,
        "AddAccessTokenClaimRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Id }>(
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
                body = ObjectSerializer.deserialize(body, "Id");
                resolve({ response: response, body: body });
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
   * @param appId
   * @param schema
   */
  public async updateApp(
    authorization: string,
    appId: number,
    schema: Schema,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Schema }> {
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}".replace(
        "{" + "app_id" + "}",
        encodeURIComponent(String(appId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateApp."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling updateApp."
      );
    }

    // verify required parameter 'schema' is not null or undefined
    if (schema === null || schema === undefined) {
      throw new Error(
        "Required parameter schema was null or undefined when calling updateApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(schema, "Schema"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Schema }>(
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
                body = ObjectSerializer.deserialize(body, "Schema");
                resolve({ response: response, body: body });
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
   * @param id
   * @param createAuthorizationServerRequest
   */
  public async updateAuthorizationServer(
    authorization: string,
    id: number,
    createAuthorizationServerRequest: CreateAuthorizationServerRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Id }> {
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateAuthorizationServer."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling updateAuthorizationServer."
      );
    }

    // verify required parameter 'createAuthorizationServerRequest' is not null or undefined
    if (
      createAuthorizationServerRequest === null ||
      createAuthorizationServerRequest === undefined
    ) {
      throw new Error(
        "Required parameter createAuthorizationServerRequest was null or undefined when calling updateAuthorizationServer."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        createAuthorizationServerRequest,
        "CreateAuthorizationServerRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Id }>(
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
                body = ObjectSerializer.deserialize(body, "Id");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/clients/{client_app_id}"
        .replace("{" + "id" + "}", encodeURIComponent(String(id)))
        .replace(
          "{" + "client_app_id" + "}",
          encodeURIComponent(String(clientAppId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateClientApp."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling updateClientApp."
      );
    }

    // verify required parameter 'clientAppId' is not null or undefined
    if (clientAppId === null || clientAppId === undefined) {
      throw new Error(
        "Required parameter clientAppId was null or undefined when calling updateClientApp."
      );
    }

    // verify required parameter 'updateClientAppRequest' is not null or undefined
    if (
      updateClientAppRequest === null ||
      updateClientAppRequest === undefined
    ) {
      throw new Error(
        "Required parameter updateClientAppRequest was null or undefined when calling updateClientApp."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        updateClientAppRequest,
        "UpdateClientAppRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: ClientApp }>(
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
                body = ObjectSerializer.deserialize(body, "ClientApp");
                resolve({ response: response, body: body });
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
   * @param envvarId Set to the id of the Hook Environment Variable that you want to fetch.
   * @param updateEnvironmentVariableRequest
   */
  public async updateEnvironmentVariable(
    authorization: string,
    envvarId: string,
    updateEnvironmentVariableRequest: UpdateEnvironmentVariableRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Envvar }> {
    const localVarPath =
      this.basePath +
      "/api/2/hooks/envs/{envvar_id}".replace(
        "{" + "envvar_id" + "}",
        encodeURIComponent(String(envvarId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateEnvironmentVariable."
      );
    }

    // verify required parameter 'envvarId' is not null or undefined
    if (envvarId === null || envvarId === undefined) {
      throw new Error(
        "Required parameter envvarId was null or undefined when calling updateEnvironmentVariable."
      );
    }

    // verify required parameter 'updateEnvironmentVariableRequest' is not null or undefined
    if (
      updateEnvironmentVariableRequest === null ||
      updateEnvironmentVariableRequest === undefined
    ) {
      throw new Error(
        "Required parameter updateEnvironmentVariableRequest was null or undefined when calling updateEnvironmentVariable."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        updateEnvironmentVariableRequest,
        "UpdateEnvironmentVariableRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Envvar }>(
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
                body = ObjectSerializer.deserialize(body, "Envvar");
                resolve({ response: response, body: body });
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
   * @param hookId Set to the id of the Hook that you want to return.
   * @param hook
   */
  public async updateHook(
    authorization: string,
    hookId: string,
    hook: Hook,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Hook }> {
    const localVarPath =
      this.basePath +
      "/api/2/hooks/{hook_id}".replace(
        "{" + "hook_id" + "}",
        encodeURIComponent(String(hookId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateHook."
      );
    }

    // verify required parameter 'hookId' is not null or undefined
    if (hookId === null || hookId === undefined) {
      throw new Error(
        "Required parameter hookId was null or undefined when calling updateHook."
      );
    }

    // verify required parameter 'hook' is not null or undefined
    if (hook === null || hook === undefined) {
      throw new Error(
        "Required parameter hook was null or undefined when calling updateHook."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(hook, "Hook"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Hook }>(
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
                body = ObjectSerializer.deserialize(body, "Hook");
                resolve({ response: response, body: body });
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
   * @param mappingId The id of the user mapping to locate.
   * @param mapping
   */
  public async updateMapping(
    authorization: string,
    mappingId: number,
    mapping: Mapping,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: number }> {
    const localVarPath =
      this.basePath +
      "/api/2/mappings/{mapping_id}".replace(
        "{" + "mapping_id" + "}",
        encodeURIComponent(String(mappingId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateMapping."
      );
    }

    // verify required parameter 'mappingId' is not null or undefined
    if (mappingId === null || mappingId === undefined) {
      throw new Error(
        "Required parameter mappingId was null or undefined when calling updateMapping."
      );
    }

    // verify required parameter 'mapping' is not null or undefined
    if (mapping === null || mapping === undefined) {
      throw new Error(
        "Required parameter mapping was null or undefined when calling updateMapping."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(mapping, "Mapping"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: number }>(
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
                body = ObjectSerializer.deserialize(body, "number");
                resolve({ response: response, body: body });
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
   * @param riskRuleId
   * @param riskRule
   */
  public async updateRiskRule(
    authorization: string,
    riskRuleId: string,
    riskRule: RiskRule,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: RiskRule }> {
    const localVarPath =
      this.basePath +
      "/api/2/risk/rules/{risk_rule_id}".replace(
        "{" + "risk_rule_id" + "}",
        encodeURIComponent(String(riskRuleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateRiskRule."
      );
    }

    // verify required parameter 'riskRuleId' is not null or undefined
    if (riskRuleId === null || riskRuleId === undefined) {
      throw new Error(
        "Required parameter riskRuleId was null or undefined when calling updateRiskRule."
      );
    }

    // verify required parameter 'riskRule' is not null or undefined
    if (riskRule === null || riskRule === undefined) {
      throw new Error(
        "Required parameter riskRule was null or undefined when calling updateRiskRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(riskRule, "RiskRule"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: RiskRule }>(
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
                body = ObjectSerializer.deserialize(body, "RiskRule");
                resolve({ response: response, body: body });
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
   * @param roleId Set to the id of the role you want to return.
   * @param role
   */
  public async updateRole(
    authorization: string,
    roleId: number,
    role: Role,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: UpdateRole200Response }> {
    const localVarPath =
      this.basePath +
      "/api/2/roles/{role_id}".replace(
        "{" + "role_id" + "}",
        encodeURIComponent(String(roleId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateRole."
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new Error(
        "Required parameter roleId was null or undefined when calling updateRole."
      );
    }

    // verify required parameter 'role' is not null or undefined
    if (role === null || role === undefined) {
      throw new Error(
        "Required parameter role was null or undefined when calling updateRole."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(role, "Role"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: UpdateRole200Response;
      }>((resolve, reject) => {
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
                "UpdateRole200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/apps/{app_id}/rules/{rule_id}"
        .replace("{" + "app_id" + "}", encodeURIComponent(String(appId)))
        .replace("{" + "rule_id" + "}", encodeURIComponent(String(ruleId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateRule."
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new Error(
        "Required parameter appId was null or undefined when calling updateRule."
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new Error(
        "Required parameter ruleId was null or undefined when calling updateRule."
      );
    }

    // verify required parameter 'rule' is not null or undefined
    if (rule === null || rule === undefined) {
      throw new Error(
        "Required parameter rule was null or undefined when calling updateRule."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(rule, "Rule"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: RuleId }>(
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
                body = ObjectSerializer.deserialize(body, "RuleId");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/api_authorizations/{id}/scopes/{scope_id}"
        .replace("{" + "id" + "}", encodeURIComponent(String(id)))
        .replace("{" + "scope_id" + "}", encodeURIComponent(String(scopeId)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateScope."
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling updateScope."
      );
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new Error(
        "Required parameter scopeId was null or undefined when calling updateScope."
      );
    }

    // verify required parameter 'addScopeRequest' is not null or undefined
    if (addScopeRequest === null || addScopeRequest === undefined) {
      throw new Error(
        "Required parameter addScopeRequest was null or undefined when calling updateScope."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(addScopeRequest, "AddScopeRequest"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Id }>(
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
                body = ObjectSerializer.deserialize(body, "Id");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/users/{user_id}".replace(
        "{" + "user_id" + "}",
        encodeURIComponent(String(userId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling updateUser."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling updateUser."
      );
    }

    // verify required parameter 'user' is not null or undefined
    if (user === null || user === undefined) {
      throw new Error(
        "Required parameter user was null or undefined when calling updateUser."
      );
    }

    if (mappings !== undefined) {
      localVarQueryParameters["mappings"] = ObjectSerializer.serialize(
        mappings,
        "'async' | 'sync' | 'disabled'"
      );
    }

    if (validatePolicy !== undefined) {
      localVarQueryParameters["validate_policy"] = ObjectSerializer.serialize(
        validatePolicy,
        "boolean"
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(user, "User"),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: User }>(
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
                body = ObjectSerializer.deserialize(body, "User");
                resolve({ response: response, body: body });
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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/registrations/{registration_id}"
        .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
        .replace(
          "{" + "registration_id" + "}",
          encodeURIComponent(String(registrationId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling verifyEnrollment."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling verifyEnrollment."
      );
    }

    // verify required parameter 'registrationId' is not null or undefined
    if (registrationId === null || registrationId === undefined) {
      throw new Error(
        "Required parameter registrationId was null or undefined when calling verifyEnrollment."
      );
    }

    // verify required parameter 'verifyEnrollmentRequest' is not null or undefined
    if (
      verifyEnrollmentRequest === null ||
      verifyEnrollmentRequest === undefined
    ) {
      throw new Error(
        "Required parameter verifyEnrollmentRequest was null or undefined when calling verifyEnrollment."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        verifyEnrollmentRequest,
        "VerifyEnrollmentRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Registration;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Registration");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/registrations/{registration_id}"
        .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
        .replace(
          "{" + "registration_id" + "}",
          encodeURIComponent(String(registrationId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling verifyEnrollmentVoiceProtect."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling verifyEnrollmentVoiceProtect."
      );
    }

    // verify required parameter 'registrationId' is not null or undefined
    if (registrationId === null || registrationId === undefined) {
      throw new Error(
        "Required parameter registrationId was null or undefined when calling verifyEnrollmentVoiceProtect."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Registration;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "Registration");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/verifications/{verification_id}"
        .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
        .replace(
          "{" + "verification_id" + "}",
          encodeURIComponent(String(verificationId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling verifyFactor."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling verifyFactor."
      );
    }

    // verify required parameter 'verificationId' is not null or undefined
    if (verificationId === null || verificationId === undefined) {
      throw new Error(
        "Required parameter verificationId was null or undefined when calling verifyFactor."
      );
    }

    // verify required parameter 'verifyFactorRequest' is not null or undefined
    if (verifyFactorRequest === null || verifyFactorRequest === undefined) {
      throw new Error(
        "Required parameter verifyFactorRequest was null or undefined when calling verifyFactor."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PUT",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        verifyFactorRequest,
        "VerifyFactorRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: VerifyFactorVoice200ResponseInner;
      }>((resolve, reject) => {
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
                "VerifyFactorVoice200ResponseInner"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath = this.basePath + "/api/2/saml_assertion/verify_factor";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling verifyFactorSaml."
      );
    }

    // verify required parameter 'verifyFactorSamlRequest' is not null or undefined
    if (
      verifyFactorSamlRequest === null ||
      verifyFactorSamlRequest === undefined
    ) {
      throw new Error(
        "Required parameter verifyFactorSamlRequest was null or undefined when calling verifyFactorSaml."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        verifyFactorSamlRequest,
        "VerifyFactorSamlRequest"
      ),
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: VerifyFactorSaml200Response;
      }>((resolve, reject) => {
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
                "VerifyFactorSaml200Response"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
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
    const localVarPath =
      this.basePath +
      "/api/2/mfa/users/{user_id}/verifications/{verification_id}"
        .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
        .replace(
          "{" + "verification_id" + "}",
          encodeURIComponent(String(verificationId))
        );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling verifyFactorVoice."
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new Error(
        "Required parameter userId was null or undefined when calling verifyFactorVoice."
      );
    }

    // verify required parameter 'verificationId' is not null or undefined
    if (verificationId === null || verificationId === undefined) {
      throw new Error(
        "Required parameter verificationId was null or undefined when calling verifyFactorVoice."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: VerifyFactorVoice200ResponseInner;
      }>((resolve, reject) => {
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
                "VerifyFactorVoice200ResponseInner"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }

  public async getGroups(
    authorization: string,
    id ?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Groups;
  }> {
    const localVarPath =
      this.basePath +
      "/api/1/groups";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getGroups."
      );
    }

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Groups;
      }>((resolve, reject) => {
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
                "Groups"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }

  public async getGroupById(
    authorization: string,
    id: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Group;
  }> {
    const localVarPath =
      this.basePath +
      "/api/1/groups/{id}".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );;
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getGroupById."
      );
    }

    // verify required parameter 'Id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling getGroupById."
      );
    }

   

    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Group;
      }>((resolve, reject) => {
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
                "Group"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }

  public async getEventsTypes(
    authorization: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: EventTypes;
  }> {
    const localVarPath =
      this.basePath +
      "/api/1/events/types";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getEventsTypes."
      );
    }


    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: EventTypes;
      }>((resolve, reject) => {
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
                "EventTypes"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }

  public async getEvents(
    authorization: string,
    clientId ?: number,
    createdAt?: string,
    directoryId?: number,
    eventTypeId?: number [],
    resolution?: string,
    since?: string,
    until?: string,
    userId?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Events;
  }> {
    const localVarPath =
      this.basePath +
      "/api/1/events";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getEvents."
      );
    }

    if (clientId !== undefined) {
      localVarQueryParameters["client_id"] = ObjectSerializer.serialize(
        clientId,
        "number"
      );
    }

    if (createdAt !== undefined) {
      localVarQueryParameters["created_at"] = ObjectSerializer.serialize(
        createdAt,
        "string"
      );
    }

    if (directoryId !== undefined) {
      localVarQueryParameters["directory_id"] = ObjectSerializer.serialize(
        directoryId,
        "number"
      );
    }


    if (eventTypeId !== undefined) {
      const eventTypeIds = eventTypeId.join(",");
      localVarQueryParameters["event_type_id"] = eventTypeIds;
    }


    if (resolution !== undefined) {
      localVarQueryParameters["resolution"] = ObjectSerializer.serialize(
        resolution,
        "string"
      );
    }


    if (since !== undefined) {
      localVarQueryParameters["since"] = ObjectSerializer.serialize(
        since,
        "string"
      );
    }

    if (until !== undefined) {
      localVarQueryParameters["until"] = ObjectSerializer.serialize(
        until,
        "string"
      );
    }


    if (userId !== undefined) {
      localVarQueryParameters["user_id"] = ObjectSerializer.serialize(
        userId,
        "number"
      );
    }


    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Events;
      }>((resolve, reject) => {
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
                "Events"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }

  public async getEventById(
    authorization: string,
    eventId: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Event;
  }> {
    const localVarPath =
      this.basePath +
      "/api/1/events/{event_id}".replace(
        "{" + "event_id" + "}",
        encodeURIComponent(String(eventId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorization' is not null or undefined
    if (authorization === null || authorization === undefined) {
      throw new Error(
        "Required parameter authorization was null or undefined when calling getEventById."
      );
    }

    if (eventId !== undefined) {
      localVarQueryParameters["event_id"] = ObjectSerializer.serialize(eventId,"number");
    }


    localVarHeaderParams["Authorization"] = ObjectSerializer.serialize(
      authorization,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Event;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body,"Event");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }

  
}
