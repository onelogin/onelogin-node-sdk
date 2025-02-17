export class StatusMessage {
  "status"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "status",
      baseName: "status",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap() {
    return StatusMessage.attributeTypeMap;
  }
}
