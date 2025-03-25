export class validateUserRiskResponse {
  "score": string;
  "reasons": Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "score",
      baseName: "score",
      type: "string",
    },
    {
      name: "reasons",
      baseName: "reasons",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap() {
    return validateUserRiskResponse.attributeTypeMap;
  }
}
