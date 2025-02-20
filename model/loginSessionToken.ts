import { Status } from "./status";

export class LoginSessionToken {
    /**
    * Status of the response.
    */
    'status'?: Status;
    /**
    * Data array containing the items.
    */
    'data'?: Array<object>;

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
            "type": "Array<object>"
        }
    ];

    static getAttributeTypeMap() {
        return LoginSessionToken.attributeTypeMap;
    }
}


