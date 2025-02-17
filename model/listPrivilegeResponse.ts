import { listPrivilegeArrayResponse } from "./listPrivilegeArrayResponse";

export class ListPrivilegeResponse {
  "id"?: string;
  "name": string;
  "description"?: string;
  "privilege"?: listPrivilegeArrayResponse;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
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
      name: "privilege",
      baseName: "privilege",
      type: "listPrivilegeArrayResponse",
    },
  ];

  static getAttributeTypeMap() {
    return ListPrivilegeResponse.attributeTypeMap;
  }
}
