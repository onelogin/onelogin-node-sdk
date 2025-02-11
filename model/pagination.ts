import { RequestFile } from './models';

export class Pagination {
    /**
    * Cursor for the previous page.
    */
    'before_cursor'?: string | null;
    /**
    * Cursor for the next page.
    */
    'after_cursor'?: string | null;
    /**
    * Link to the previous page.
    */
    'previous_link'?: string | null;
    /**
    * Link to the next page.
    */
    'next_link'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "before_cursor",
            "baseName": "before_cursor",
            "type": "string"
        },
        {
            "name": "after_cursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "previous_link",
            "baseName": "previous_link",
            "type": "string"
        },
        {
            "name": "next_link",
            "baseName": "next_link",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
}