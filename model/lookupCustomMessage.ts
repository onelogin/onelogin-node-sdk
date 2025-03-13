


export class LookupCustomMessage {
    'typeId'?: number;
    
    'typeName'?: string;

    'locale'?: string;

    'appId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "typeId",
            "baseName": "type_id",
            "type": "number"
        },
        {
            "name": "typeName",
            "baseName": "type_name",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "number"
        }
    ];

    static getAttributeTypeMap() {
        return LookupCustomMessage.attributeTypeMap;
    }
}


