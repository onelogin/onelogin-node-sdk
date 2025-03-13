export class GenerateSendInviteLinkRequest {
  "email": string;
  "personal_email"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "email",
      baseName: "email",
      type: "string",
    },
    {
      name: "personal_email",
      baseName: "personal_email",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return GenerateSendInviteLinkRequest.attributeTypeMap;
  }
}
