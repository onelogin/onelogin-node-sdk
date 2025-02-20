import { RequestFile } from './models';

export class AccountBrand {
    /**
    * id of bands
    */
    'enabled'?: boolean;
    /**
    * enabled or disabled
    */
    'name'?: boolean;
    /**
    * name of brans
    */
    'customSupportEnabled'?: string;

    /**
    * name of brans
    */
    'customColor'?: boolean;

    /**
    * name of brans
    */
    'customAccentColor'?: string;

    'customMaskingOpacity'? : number;

    'enableCustomLabelForLoginScreen'?: boolean;

    'customLabelTextForLoginScreen'?: string;

    'loginInstructionTitle'?: string;

    'loginInstruction'? : string;

    'hide_onelogin_footer'?: boolean;

    'mfaEnrollmentMessage'?: string;

    'background'?: string;

    'logo'?: string;
    
    

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "customSupportEnabled",
            "baseName": "custom_support_enabled",
            "type": "string"
        },
        {
            "name": "customColor",
            "baseName": "custom_color",
            "type": "sting"
        },
        {
            "name": "customAccentColor",
            "baseName": "custom_accent_color",
            "type": "string"
        },
        {
            "name": "customMaskingOpacity",
            "baseName": "custom_masking_opacity",
            "type": "number"
        },
        {
            "name": "enable_custom_label_for_login_screen",
            "baseName": "enable_custom_label_for_login_screen",
            "type": "boolean"
        },
        {
            "name": "custom_label_text_for_login_screen",
            "baseName": "custom_label_text_for_login_screen",
            "type": "sting"
        },
        {
            "name": "loginInstructionTitle",
            "baseName": "login_instruction_title",
            "type": "sting"
        },
        {
            "name": "loginInstruction",
            "baseName": "login_instruction",
            "type": "sting"
        },
        {
            "name": "hideOneloginFooter",
            "baseName": "hide_onelogin_footer",
            "type": "boolean"
        },
        {
            "name": "mfa_enrollment_message",
            "baseName": "mfa_enrollment_message",
            "type": "string"
        },
        {
            "name": "background",
            "baseName": "background",
            "type": "string"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return AccountBrand.attributeTypeMap;
    }
}


