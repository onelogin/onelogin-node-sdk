import { RequestFile } from './models';

export class GroupData {
    /**
    * Unique ID of the item.
    */
    'id'?: number;
    /**
    * Name of the item.
    */
    'name'?: string;
    /**
    * Reference of the item.
    */
    'reference'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return GroupData.attributeTypeMap;
    }
}