import { GroupData } from "./groupData";
import { Pagination } from "./pagination";
import { RequestFile } from './models';
import { Status } from "./status";

export class Groups {
    /**
    * Status of the response.
    */
    'status'?: Status;
    /**
    * Pagination information.
    */
    'pagination'?: Pagination;
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
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GroupData>"
        }
    ];

    static getAttributeTypeMap() {
        return Groups.attributeTypeMap;
    }
}


