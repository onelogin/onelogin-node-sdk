export class AssignRoleRequest {
  "roles": Array<number>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "roles",
      baseName: "roles",
      type: "Array<number>",
    },
  ];

  static getAttributeTypeMap() {
    return AssignRoleRequest.attributeTypeMap;
  }
}
