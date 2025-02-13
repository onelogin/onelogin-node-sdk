export class AssignUsersRequest {
  "users": Array<number>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "users",
      baseName: "users",
      type: "Array<number>",
    },
  ];

  static getAttributeTypeMap() {
    return AssignUsersRequest.attributeTypeMap;
  }
}
