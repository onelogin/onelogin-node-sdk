export class GenerateMfaToken200Response {
  "mfaToken"?: string;

  "reusable"?: boolean;

  "expiresAt"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "mfaToken",
      baseName: "mfa_token",
      type: "string",
    },
    {
      name: "reusable",
      baseName: "reusable",
      type: "boolean",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return GenerateMfaToken200Response.attributeTypeMap;
  }
}
