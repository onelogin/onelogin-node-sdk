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

import { AuthServerConfiguration } from "./authServerConfiguration";
import { RequestFile } from "./models";

export class CreateAuthorizationServerRequest {
  "name"?: string;
  "description"?: string;
  "configuration"?: AuthServerConfiguration;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "configuration",
      baseName: "configuration",
      type: "AuthServerConfiguration",
    },
  ];

  static getAttributeTypeMap() {
    return CreateAuthorizationServerRequest.attributeTypeMap;
  }
}
