export class Status2Status {
  "type"?: string;
  "code"?: number;
  "message"?: string;
  "error"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "code",
      baseName: "code",
      type: "number",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "error",
      baseName: "error",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap() {
    return Status2Status.attributeTypeMap;
  }
}
