


export class MessageTemplateSchema {
    /**
    * Status of the response.
    */
    'type'?: MessageTemplateSchema.TypeEnum;
    /**
    * Data array containing the items.
    */
    'locale'?: string;

    'template'?: object;    

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
        }
    ];

    static getAttributeTypeMap() {
        return MessageTemplateSchema.attributeTypeMap;
    }
}

export namespace MessageTemplateSchema {
    export enum TypeEnum {
      EmailForgotPassword = <any>"email_forgot_password",
      EmailCodeRegistration = <any>"email_code_registration",
      EmailCodeLoginVerification = <any>"email_code_login_verification",
      EmailCodeAppVerification = <any>"email_code_app_verification",
      EmailCodePwResetVerification = <any>"email_code_pw_reset_verification",
      EmailMagiclinkRegistration = <any>"email_magiclink_registration",
      EmailMagiclinkLoginVerification = <any>"email_magiclink_login_verification",
      EmailMagiclinkAppVerification = <any>"email_magiclink_app_verification",
      EmailMagiclinkPwResetVerification = <any>"email_magiclink_pw_reset_verification",
      SmsRegistration = <any>"sms_registration",
      SmsLoginVerification = <any>"sms_login_verification",
      SmsAppVerification = <any>"sms_app_verification",
      SmsPwResetVerification = <any>"sms_pw_reset_verification",
    }
  }
