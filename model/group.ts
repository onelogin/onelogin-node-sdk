import { GroupData } from "./groupData";
import { Pagination } from "./pagination";
import { RequestFile } from './models';
import { Status } from "./status";

export class Group {
    /**
    * Status of the response.
    */
    'status'?: Status;
    /**
    * Data array containing the items.
    */
    'data'?: Array<GroupData>;

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
            "type": "Array<GroupData>"
        }
    ];

    static getAttributeTypeMap() {
        return Group.attributeTypeMap;
    }
}


