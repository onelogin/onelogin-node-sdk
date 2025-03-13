import { Data1 } from "./data1";
import { Pagination } from "./pagination";
import { RequestFile } from './models';
import { Status } from "./status";

export class Events {
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
    'data'?: Array<Data1>;

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
            "type": "Array<Data1>"
        }
    ];

    static getAttributeTypeMap() {
        return Events.attributeTypeMap;
    }
}


