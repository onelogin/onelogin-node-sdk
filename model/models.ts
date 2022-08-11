import localVarRequest from 'request';

export * from './action';
export * from './activateFactorRequest';
export * from './addAccessTokenClaimRequest';
export * from './addClientAppRequest';
export * from './addRoleUsers200ResponseInner';
export * from './addScopeRequest';
export * from './authMethod';
export * from './authServerConfiguration';
export * from './clientApp';
export * from './condition';
export * from './connector';
export * from './createAuthorizationServerRequest';
export * from './createEnvironmentVariableRequest';
export * from './createRoles201ResponseInner';
export * from './device';
export * from './enrollFactorRequest';
export * from './envvar';
export * from './errorStatus';
export * from './errorStatusErrorsInner';
export * from './factorInner';
export * from './factorInnerFactorData';
export * from './generateMfaToken200Response';
export * from './generateMfaToken422Response';
export * from './generateMfaToken422ResponseDetails';
export * from './generateMfaTokenRequest';
export * from './generateSamlAssertionRequest';
export * from './generateToken200Response';
export * from './generateToken400Response';
export * from './generateTokenRequest';
export * from './getAuthorizationServer200Response';
export * from './getAvailableFactors200ResponseInner';
export * from './getClientApps200ResponseInner';
export * from './getClientApps200ResponseInnerScopesInner';
export * from './getRateLimit200Response';
export * from './getRateLimit200ResponseData';
export * from './getRiskScore200Response';
export * from './getRiskScore400Response';
export * from './getRiskScoreRequest';
export * from './getScoreInsights200Response';
export * from './getScoreInsights200ResponseScores';
export * from './getUserApps200ResponseInner';
export * from './hook';
export * from './hookConditionsInner';
export * from './hookOptions';
export * from './hookStatus';
export * from './id';
export * from './listAccessTokenClaims200ResponseInner';
export * from './listActions200ResponseInner';
export * from './listAppUsers200ResponseInner';
export * from './listAuthorizationServers200ResponseInner';
export * from './listAuthorizationServers200ResponseInnerConfiguration';
export * from './listConditionOperators200ResponseInner';
export * from './listConditionValues200ResponseInner';
export * from './listConditions200ResponseInner';
export * from './listMappingConditionOperators200ResponseInner';
export * from './listMappingConditions200ResponseInner';
export * from './listScopes200ResponseInner';
export * from './log';
export * from './mapping';
export * from './registration';
export * from './removeRoleUsersRequest';
export * from './revokeTokenRequest';
export * from './riskDevice';
export * from './riskRule';
export * from './riskUser';
export * from './role';
export * from './rule';
export * from './ruleId';
export * from './schema';
export * from './schema1';
export * from './schema1AddedBy';
export * from './schemaProvisioning';
export * from './session';
export * from './setRoleApps200ResponseInner';
export * from './source';
export * from './status';
export * from './status1';
export * from './status2';
export * from './status2Status';
export * from './trackEventRequest';
export * from './updateAuthorizationServer400Response';
export * from './updateClientAppRequest';
export * from './updateEnvironmentVariableRequest';
export * from './updateRole200Response';
export * from './user';
export * from './verifyEnrollmentRequest';
export * from './verifyFactorRequest';
export * from './verifyFactorSaml200Response';
export * from './verifyFactorSamlRequest';
export * from './verifyFactorVoice200ResponseInner';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Action } from './action';
import { ActivateFactorRequest } from './activateFactorRequest';
import { AddAccessTokenClaimRequest } from './addAccessTokenClaimRequest';
import { AddClientAppRequest } from './addClientAppRequest';
import { AddRoleUsers200ResponseInner } from './addRoleUsers200ResponseInner';
import { AddScopeRequest } from './addScopeRequest';
import { AuthMethod } from './authMethod';
import { AuthServerConfiguration } from './authServerConfiguration';
import { ClientApp } from './clientApp';
import { Condition } from './condition';
import { Connector } from './connector';
import { CreateAuthorizationServerRequest } from './createAuthorizationServerRequest';
import { CreateEnvironmentVariableRequest } from './createEnvironmentVariableRequest';
import { CreateRoles201ResponseInner } from './createRoles201ResponseInner';
import { Device } from './device';
import { EnrollFactorRequest } from './enrollFactorRequest';
import { Envvar } from './envvar';
import { ErrorStatus } from './errorStatus';
import { ErrorStatusErrorsInner } from './errorStatusErrorsInner';
import { FactorInner } from './factorInner';
import { FactorInnerFactorData } from './factorInnerFactorData';
import { GenerateMfaToken200Response } from './generateMfaToken200Response';
import { GenerateMfaToken422Response } from './generateMfaToken422Response';
import { GenerateMfaToken422ResponseDetails } from './generateMfaToken422ResponseDetails';
import { GenerateMfaTokenRequest } from './generateMfaTokenRequest';
import { GenerateSamlAssertionRequest } from './generateSamlAssertionRequest';
import { GenerateToken200Response } from './generateToken200Response';
import { GenerateToken400Response } from './generateToken400Response';
import { GenerateTokenRequest } from './generateTokenRequest';
import { GetAuthorizationServer200Response } from './getAuthorizationServer200Response';
import { GetAvailableFactors200ResponseInner } from './getAvailableFactors200ResponseInner';
import { GetClientApps200ResponseInner } from './getClientApps200ResponseInner';
import { GetClientApps200ResponseInnerScopesInner } from './getClientApps200ResponseInnerScopesInner';
import { GetRateLimit200Response } from './getRateLimit200Response';
import { GetRateLimit200ResponseData } from './getRateLimit200ResponseData';
import { GetRiskScore200Response } from './getRiskScore200Response';
import { GetRiskScore400Response } from './getRiskScore400Response';
import { GetRiskScoreRequest } from './getRiskScoreRequest';
import { GetScoreInsights200Response } from './getScoreInsights200Response';
import { GetScoreInsights200ResponseScores } from './getScoreInsights200ResponseScores';
import { GetUserApps200ResponseInner } from './getUserApps200ResponseInner';
import { Hook } from './hook';
import { HookConditionsInner } from './hookConditionsInner';
import { HookOptions } from './hookOptions';
import { HookStatus } from './hookStatus';
import { Id } from './id';
import { ListAccessTokenClaims200ResponseInner } from './listAccessTokenClaims200ResponseInner';
import { ListActions200ResponseInner } from './listActions200ResponseInner';
import { ListAppUsers200ResponseInner } from './listAppUsers200ResponseInner';
import { ListAuthorizationServers200ResponseInner } from './listAuthorizationServers200ResponseInner';
import { ListAuthorizationServers200ResponseInnerConfiguration } from './listAuthorizationServers200ResponseInnerConfiguration';
import { ListConditionOperators200ResponseInner } from './listConditionOperators200ResponseInner';
import { ListConditionValues200ResponseInner } from './listConditionValues200ResponseInner';
import { ListConditions200ResponseInner } from './listConditions200ResponseInner';
import { ListMappingConditionOperators200ResponseInner } from './listMappingConditionOperators200ResponseInner';
import { ListMappingConditions200ResponseInner } from './listMappingConditions200ResponseInner';
import { ListScopes200ResponseInner } from './listScopes200ResponseInner';
import { Log } from './log';
import { Mapping } from './mapping';
import { Registration } from './registration';
import { RemoveRoleUsersRequest } from './removeRoleUsersRequest';
import { RevokeTokenRequest } from './revokeTokenRequest';
import { RiskDevice } from './riskDevice';
import { RiskRule } from './riskRule';
import { RiskUser } from './riskUser';
import { Role } from './role';
import { Rule } from './rule';
import { RuleId } from './ruleId';
import { Schema } from './schema';
import { Schema1 } from './schema1';
import { Schema1AddedBy } from './schema1AddedBy';
import { SchemaProvisioning } from './schemaProvisioning';
import { Session } from './session';
import { SetRoleApps200ResponseInner } from './setRoleApps200ResponseInner';
import { Source } from './source';
import { Status } from './status';
import { Status1 } from './status1';
import { Status2 } from './status2';
import { Status2Status } from './status2Status';
import { TrackEventRequest } from './trackEventRequest';
import { UpdateAuthorizationServer400Response } from './updateAuthorizationServer400Response';
import { UpdateClientAppRequest } from './updateClientAppRequest';
import { UpdateEnvironmentVariableRequest } from './updateEnvironmentVariableRequest';
import { UpdateRole200Response } from './updateRole200Response';
import { User } from './user';
import { VerifyEnrollmentRequest } from './verifyEnrollmentRequest';
import { VerifyFactorRequest } from './verifyFactorRequest';
import { VerifyFactorSaml200Response } from './verifyFactorSaml200Response';
import { VerifyFactorSamlRequest } from './verifyFactorSamlRequest';
import { VerifyFactorVoice200ResponseInner } from './verifyFactorVoice200ResponseInner';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AuthMethod": AuthMethod,
        "FactorInner.StatusEnum": FactorInner.StatusEnum,
        "GenerateTokenRequest.GrantTypeEnum": GenerateTokenRequest.GrantTypeEnum,
        "GetUserApps200ResponseInner.ProvisioningStatusEnum": GetUserApps200ResponseInner.ProvisioningStatusEnum,
        "GetUserApps200ResponseInner.ProvisioningStateEnum": GetUserApps200ResponseInner.ProvisioningStateEnum,
        "Hook.StatusEnum": Hook.StatusEnum,
        "Mapping.MatchEnum": Mapping.MatchEnum,
        "Registration.StatusEnum": Registration.StatusEnum,
        "RiskRule.TypeEnum": RiskRule.TypeEnum,
        "RiskRule.TargetEnum": RiskRule.TargetEnum,
        "Rule.MatchEnum": Rule.MatchEnum,
        "Schema.AuthMethodEnum": Schema.AuthMethodEnum,
        "User.StateEnum": User.StateEnum,
        "User.StatusEnum": User.StatusEnum,
        "VerifyFactorVoice200ResponseInner.StatusEnum": VerifyFactorVoice200ResponseInner.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "Action": Action,
    "ActivateFactorRequest": ActivateFactorRequest,
    "AddAccessTokenClaimRequest": AddAccessTokenClaimRequest,
    "AddClientAppRequest": AddClientAppRequest,
    "AddRoleUsers200ResponseInner": AddRoleUsers200ResponseInner,
    "AddScopeRequest": AddScopeRequest,
    "AuthServerConfiguration": AuthServerConfiguration,
    "ClientApp": ClientApp,
    "Condition": Condition,
    "Connector": Connector,
    "CreateAuthorizationServerRequest": CreateAuthorizationServerRequest,
    "CreateEnvironmentVariableRequest": CreateEnvironmentVariableRequest,
    "CreateRoles201ResponseInner": CreateRoles201ResponseInner,
    "Device": Device,
    "EnrollFactorRequest": EnrollFactorRequest,
    "Envvar": Envvar,
    "ErrorStatus": ErrorStatus,
    "ErrorStatusErrorsInner": ErrorStatusErrorsInner,
    "FactorInner": FactorInner,
    "FactorInnerFactorData": FactorInnerFactorData,
    "GenerateMfaToken200Response": GenerateMfaToken200Response,
    "GenerateMfaToken422Response": GenerateMfaToken422Response,
    "GenerateMfaToken422ResponseDetails": GenerateMfaToken422ResponseDetails,
    "GenerateMfaTokenRequest": GenerateMfaTokenRequest,
    "GenerateSamlAssertionRequest": GenerateSamlAssertionRequest,
    "GenerateToken200Response": GenerateToken200Response,
    "GenerateToken400Response": GenerateToken400Response,
    "GenerateTokenRequest": GenerateTokenRequest,
    "GetAuthorizationServer200Response": GetAuthorizationServer200Response,
    "GetAvailableFactors200ResponseInner": GetAvailableFactors200ResponseInner,
    "GetClientApps200ResponseInner": GetClientApps200ResponseInner,
    "GetClientApps200ResponseInnerScopesInner": GetClientApps200ResponseInnerScopesInner,
    "GetRateLimit200Response": GetRateLimit200Response,
    "GetRateLimit200ResponseData": GetRateLimit200ResponseData,
    "GetRiskScore200Response": GetRiskScore200Response,
    "GetRiskScore400Response": GetRiskScore400Response,
    "GetRiskScoreRequest": GetRiskScoreRequest,
    "GetScoreInsights200Response": GetScoreInsights200Response,
    "GetScoreInsights200ResponseScores": GetScoreInsights200ResponseScores,
    "GetUserApps200ResponseInner": GetUserApps200ResponseInner,
    "Hook": Hook,
    "HookConditionsInner": HookConditionsInner,
    "HookOptions": HookOptions,
    "HookStatus": HookStatus,
    "Id": Id,
    "ListAccessTokenClaims200ResponseInner": ListAccessTokenClaims200ResponseInner,
    "ListActions200ResponseInner": ListActions200ResponseInner,
    "ListAppUsers200ResponseInner": ListAppUsers200ResponseInner,
    "ListAuthorizationServers200ResponseInner": ListAuthorizationServers200ResponseInner,
    "ListAuthorizationServers200ResponseInnerConfiguration": ListAuthorizationServers200ResponseInnerConfiguration,
    "ListConditionOperators200ResponseInner": ListConditionOperators200ResponseInner,
    "ListConditionValues200ResponseInner": ListConditionValues200ResponseInner,
    "ListConditions200ResponseInner": ListConditions200ResponseInner,
    "ListMappingConditionOperators200ResponseInner": ListMappingConditionOperators200ResponseInner,
    "ListMappingConditions200ResponseInner": ListMappingConditions200ResponseInner,
    "ListScopes200ResponseInner": ListScopes200ResponseInner,
    "Log": Log,
    "Mapping": Mapping,
    "Registration": Registration,
    "RemoveRoleUsersRequest": RemoveRoleUsersRequest,
    "RevokeTokenRequest": RevokeTokenRequest,
    "RiskDevice": RiskDevice,
    "RiskRule": RiskRule,
    "RiskUser": RiskUser,
    "Role": Role,
    "Rule": Rule,
    "RuleId": RuleId,
    "Schema": Schema,
    "Schema1": Schema1,
    "Schema1AddedBy": Schema1AddedBy,
    "SchemaProvisioning": SchemaProvisioning,
    "Session": Session,
    "SetRoleApps200ResponseInner": SetRoleApps200ResponseInner,
    "Source": Source,
    "Status": Status,
    "Status1": Status1,
    "Status2": Status2,
    "Status2Status": Status2Status,
    "TrackEventRequest": TrackEventRequest,
    "UpdateAuthorizationServer400Response": UpdateAuthorizationServer400Response,
    "UpdateClientAppRequest": UpdateClientAppRequest,
    "UpdateEnvironmentVariableRequest": UpdateEnvironmentVariableRequest,
    "UpdateRole200Response": UpdateRole200Response,
    "User": User,
    "VerifyEnrollmentRequest": VerifyEnrollmentRequest,
    "VerifyFactorRequest": VerifyFactorRequest,
    "VerifyFactorSaml200Response": VerifyFactorSaml200Response,
    "VerifyFactorSamlRequest": VerifyFactorSamlRequest,
    "VerifyFactorVoice200ResponseInner": VerifyFactorVoice200ResponseInner,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
