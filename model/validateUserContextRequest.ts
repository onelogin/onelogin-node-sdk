export class validateUserContextRequest {
  "ip": string;
  "user_agent": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "ip",
      baseName: "ip",
      type: "string",
    },
    {
      name: "user_agent",
      baseName: "user_agent",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return validateUserContextRequest.attributeTypeMap;
  }
}
