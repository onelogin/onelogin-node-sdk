
export class MessageTemplateSchema2 {
    'template'?: object;    

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [

        {
            "name": "template",
            "baseName": "template",
            "type": "object"
        }
    ];

    static getAttributeTypeMap() {
        return MessageTemplateSchema2.attributeTypeMap;
    }
}


