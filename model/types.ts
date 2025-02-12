import { RequestFile } from './models';

export class Types {
    /**
    * id of the type.
    */
    'id'?: number;
    /**
    * name of the type.
    */
    'name'?: string;
/** 
    * description of the type.
    */
    'description'?: string;
    

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return Types.attributeTypeMap;
    }
}


