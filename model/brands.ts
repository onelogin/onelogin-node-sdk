import { RequestFile } from './models';

export class Brands {
    /**
    * id of bands
    */
    'id'?: number;
    /**
    * enabled or disabled
    */
    'enabled'?: boolean;
    /**
    * name of brans
    */
    'name'?: string;

    /**
    * name of brans
    */
    'master'?: boolean;

    /**
    * name of brans
    */
    'domainName'?: string;
    

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "master",
            "baseName": "master",
            "type": "boolean"
        },
        {
            "name": "domainName",
            "baseName": "domain_name",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return Brands.attributeTypeMap;
    }
}


