


export class MessageTemplateType {
    /**
    * Status of the response.
    */
    'type'?: string;
    /**
    * Data array containing the items.
    */
    'locale'?: string;

    'template'?: object;  
    
    'templateClass'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "object"
        },
        {
            "name": "templateClass",
            "baseName": "template_class",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return MessageTemplateType.attributeTypeMap;
    }
}


