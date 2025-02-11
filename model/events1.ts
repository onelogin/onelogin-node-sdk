import { Data1 } from "./data1";
import { RequestFile } from './models';
import { Status } from "./status";

export class Event {
    /**
    * Status of the response.
    */
    'status'?: Status;
    /**
    * Data array containing the items.
    */
    'data'?: Array<Data1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "Status"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Data1>"
        }
    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}


