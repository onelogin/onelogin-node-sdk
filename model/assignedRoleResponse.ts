export class AssignedRoleResponse {
  "total"?: number;
  "roles": Array<number>;
  "beforeCursor"?: string;
  "previousLink"?: string;
  "afterCursor"?: string;
  "nextLink"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "total",
      baseName: "total",
      type: "number",
    },
    {
      name: "roles",
      baseName: "roles",
      type: "Array<number>",
    },
    {
      name: "beforeCursor",
      baseName: "beforeCursor",
      type: "string",
    },
    {
      name: "previousLink",
      baseName: "previousLink",
      type: "string",
    },
    {
      name: "afterCursor",
      baseName: "afterCursor",
      type: "string",
    },
    {
      name: "nextLink",
      baseName: "nextLink",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return AssignedRoleResponse.attributeTypeMap;
  }
}
