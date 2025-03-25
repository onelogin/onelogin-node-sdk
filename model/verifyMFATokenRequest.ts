export class verifyMFATokenRequest {
  "otp_sent": string;
  "state_token": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "otp_sent",
      baseName: "otp_sent",
      type: "string",
    },
    {
      name: "state_token",
      baseName: "state_token",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return verifyMFATokenRequest.attributeTypeMap;
  }
}
