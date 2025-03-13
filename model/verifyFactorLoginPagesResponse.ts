import { RequestFile, Status } from './models';

export class VerifyFactorLoginPagesResponse {
    /**
    * Provides the SAML assertion.
    */
    'data'?: Array<object>;
    /**
    * Plain text description describing the outcome of the response.
    */
    'status'?: Status;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<object>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Status"
        }    ];

    static getAttributeTypeMap() {
        return VerifyFactorLoginPagesResponse.attributeTypeMap;
    }
}

