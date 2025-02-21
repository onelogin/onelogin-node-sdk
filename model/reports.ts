

export class Reports {
    /**
    * timeStamp of the response.
    */
    'timeStamp'?: string;
    /**
    * description containing the info.
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timeStamp",
            "baseName": "timeStamp",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return Reports.attributeTypeMap;
    }
}


