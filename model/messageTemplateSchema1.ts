


export class MessageTemplateSchema1 {
    'locale'?: string;

    'template'?: object;    

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "object"
        }
    ];

    static getAttributeTypeMap() {
        return MessageTemplateSchema1.attributeTypeMap;
    }
}


