
export class MessageTemplate {
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

    'accountId'?: number;

    'updatedAt'?: string;

    'default'?: boolean;

    'brandId'?: number;
      

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MessageTemplateSchema.TypeEnum"
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
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "default",
            "baseName": "default",
            "type": "boolean"
        },{
            "name": "brandId",
            "baseName": "brand_id",
            "type": "number"
        }
    ];

    static getAttributeTypeMap() {
        return MessageTemplate.attributeTypeMap;
    }
}


