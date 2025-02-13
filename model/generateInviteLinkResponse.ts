import { Status2Status } from "./status2Status";

export class GenerateInviteLinkResponse {
  "data": Array<string>;
  "status"?: Status2Status;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "Array<string>",
    },
    {
      name: "status",
      baseName: "status",
      type: "Status2Status",
    },
  ];

  static getAttributeTypeMap() {
    return GenerateInviteLinkResponse.attributeTypeMap;
  }
}
