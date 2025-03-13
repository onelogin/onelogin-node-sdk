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

export class ListScopes200ResponseInner {
  "id"?: number;
  "value"?: string;
  "description"?: string;
  "inherited"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "number",
    },
    {
      name: "value",
      baseName: "value",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "inherited",
      baseName: "inherited",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap() {
    return ListScopes200ResponseInner.attributeTypeMap;
  }
}
