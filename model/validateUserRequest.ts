import { validateUserContextRequest } from "./validateUserContextRequest";

export class validateUserRequest {
  "user_identifier": string;
  "email": string;
  "phone": string;
  "context": validateUserContextRequest;
  "risk_threshold"?: number;
  "firstname"?: string;
  "lastname"?: string;
  "expires_in"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "user_identifier",
      baseName: "user_identifier",
      type: "string",
    },
    {
      name: "email",
      baseName: "email",
      type: "string",
    },
    {
      name: "phone",
      baseName: "phone",
      type: "string",
    },
    {
      name: "context",
      baseName: "context",
      type: "validateUserContextRequest",
    },
    {
      name: "risk_threshold",
      baseName: "risk_threshold",
      type: "number",
    },
    {
      name: "firstname",
      baseName: "firstname",
      type: "string",
    },
    {
      name: "lastname",
      baseName: "lastname",
      type: "string",
    },
    {
      name: "expires_in",
      baseName: "expires_in",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return validateUserRequest.attributeTypeMap;
  }
}
