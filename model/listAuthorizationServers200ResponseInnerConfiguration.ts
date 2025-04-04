/**
 * OneLogin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0-alpha.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

export class ListAuthorizationServers200ResponseInnerConfiguration {
  "resourceIdentifier"?: string;
  "audiences"?: Array<string>;
  "refresh_token_expiration_minutes"?: number;
  "access_token_expiration_minutes"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "resourceIdentifier",
      baseName: "resource_identifier",
      type: "string",
    },
    {
      name: "audiences",
      baseName: "audiences",
      type: "Array<string>",
    },
    {
      name: "refreshTokenExpirationMinutes",
      baseName: "refresh_token_expiration_minutes",
      type: "number",
    },
    {
      name: "accessTokenExpirationMinutes",
      baseName: "access_token_expiration_minutes",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return ListAuthorizationServers200ResponseInnerConfiguration.attributeTypeMap;
  }
}
