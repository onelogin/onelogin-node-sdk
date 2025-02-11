import { RequestFile } from './models';
import { Status } from "./status";
import { Types } from './types';

export class EventTypes {
    /**
    * Status of the response.
    */
    'status'?: Status;
    /**
    * Data array containing the items.
    */
    'data'?: Array<Types>;

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
            "type": "Array<Types>"
        }
    ];

    static getAttributeTypeMap() {
        return EventTypes.attributeTypeMap;
    }
}


