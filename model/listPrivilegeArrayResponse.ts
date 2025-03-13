import { listPrivilegeStatementArrayResponse } from "./listPrivilegeStatementArrayResponse";

export class listPrivilegeArrayResponse {
  "Version"?: string;
  "Statement": Array<listPrivilegeStatementArrayResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "Version",
      baseName: "Version",
      type: "string",
    },
    {
      name: "Statement",
      baseName: "Statement",
      type: "Array<listPrivilegeStatementArrayResponse>",
    },
  ];

  static getAttributeTypeMap() {
    return listPrivilegeArrayResponse.attributeTypeMap;
  }
}
