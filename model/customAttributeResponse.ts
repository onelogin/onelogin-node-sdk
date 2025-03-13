export class CustomAttributeResponse {
  "name": string;
  "shortname": string;
  "position"?: number;
  "id"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "shortname",
      baseName: "shortname",
      type: "string",
    },
    {
      name: "position",
      baseName: "position",
      type: "number",
    },
    {
      name: "id",
      baseName: "id",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return CustomAttributeResponse.attributeTypeMap;
  }
}
