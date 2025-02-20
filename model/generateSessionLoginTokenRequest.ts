import { RequestFile } from './models';

export class GenerateSessionLoginTokenRequest {
    /**
    * Set this to the username or email of the OneLogin user accessing the app for which you want to generate a SAML token.
    */
    'usernameOrEmail': string;
    /**
    * Password of the OneLogin user accessing the app for which you want to generate a SAML token.
    */
    'password': string;
    /**
    * Set to the subdomain of the OneLogin user accessing the app for which you want to generate a SAML token.
    */
    'subdomain': string;

    'fields'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "usernameOrEmail",
            "baseName": "username_or_email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "string"
        }   ];

    static getAttributeTypeMap() {
        return GenerateSessionLoginTokenRequest.attributeTypeMap;
    }
}

