import { CustomAttributeResponse } from "./customAttributeResponse";

export class CreateCustomAttributeRequest {
  "user_field": CustomAttributeResponse;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "user_field",
      baseName: "user_field",
      type: "CustomAttributeResponse",
    },
  ];

  static getAttributeTypeMap() {
    return CreateCustomAttributeRequest.attributeTypeMap;
  }
}
