import { validateUserRiskResponse } from "./validateUserRiskResponse";
import { verifyMFATokenRequest } from "./verifyMFATokenRequest";

export class validateUserResponse {
  "user_id": number;
  "risk": validateUserRiskResponse;
  "mfa": verifyMFATokenRequest;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "user_id",
      baseName: "user_id",
      type: "number",
    },
    {
      name: "risk",
      baseName: "risk",
      type: "validateUserRiskResponse",
    },
    {
      name: "mfa",
      baseName: "mfa",
      type: "verifyMFATokenRequest",
    },
  ];

  static getAttributeTypeMap() {
    return validateUserResponse.attributeTypeMap;
  }
}
