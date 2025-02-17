import { RequestFile } from './models';

export class Brand {
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
    * name of brand
    */
    'domainName'?: string;

    'customLinks'? : Array<string>;

    'useCustomSmtpSetting'?: boolean;

    'enableCustomLabelForLoginScreen'?: boolean;
    

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
        },
        {
            "name": "customLinks",
            "baseName": "custom_links",
            "type": "Array<string>"
        },
        {
            "name": "useCustomSmtpSetting",
            "baseName": "use_custom_smtp_setting",
            "type": "boolean"
        },
        {
            "name": "enableCustomLabelForLoginScreen",
            "baseName": "enable_custom_label_for_login_screen",
            "type": "boolean"
        }
    ];

    static getAttributeTypeMap() {
        return Brand.attributeTypeMap;
    }
}


