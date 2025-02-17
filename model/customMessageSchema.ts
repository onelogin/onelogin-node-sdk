


export class CustomMessageSchema {
    'typeId'?: number;
    
    'typeName'?: string;

    'locale'?: string;

    'id'?: number;

    'title'?: string;

    'description'?: string;

    'message'?: string;
    

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
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return CustomMessageSchema.attributeTypeMap;
    }
}


