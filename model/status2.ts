import { Status2Status } from "./status2Status";
export class Status2 {
  "status"?: Status2Status;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "status",
      baseName: "status",
      type: "Status2Status",
    },
  ];

  static getAttributeTypeMap() {
    return Status2.attributeTypeMap;
  }
}
