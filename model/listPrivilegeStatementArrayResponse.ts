export class listPrivilegeStatementArrayResponse {
  "Effect"?: string;
  "Action": Array<string>;
  "Scope"?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "Effect",
      baseName: "Effect",
      type: "string",
    },
    {
      name: "Action",
      baseName: "Action",
      type: "Array<string>",
    },
    {
      name: "Scope",
      baseName: "Scope",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap() {
    return listPrivilegeStatementArrayResponse.attributeTypeMap;
  }
}
