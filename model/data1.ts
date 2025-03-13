
export class Data1 {
    /**
    * Unique identifier for the event.
    */
    'id'?: number;
    /**
    * Timestamp when the event was created.
    */
    'createdAt'?: string;
    /**
    * Account ID associated with the event.
    */
    'accountId'?: number;
    /**
    * User ID associated with the event.
    */
    'userId'?: number;
    /**
    * Event type identifier.
    */
    'eventTypeId'?: number;
    /**
    * Additional notes related to the event.
    */
    'notes'?: string | null;
    /**
    * IP address associated with the event.
    */
    'ipaddr'?: string | null;
    /**
    * Actor user ID responsible for the event.
    */
    'actorUserId'?: number | null;
    /**
    * Assuming acting user ID.
    */
    'assumingActingUserId'?: number | null;
    /**
    * Role ID associated with the event.
    */
    'roleId'?: number | null;
    /**
    * Application ID associated with the event.
    */
    'appId'?: number | null;
    /**
    * Group ID associated with the event.
    */
    'groupId'?: number | null;
    /**
    * OTP device ID associated with the event.
    */
    'otpDeviceId'?: number | null;
    /**
    * Policy ID associated with the event.
    */
    'policyId'?: number | null;
    /**
    * System acting as the event actor.
    */
    'actorSystem'?: string | null;
    /**
    * Custom message related to the event.
    */
    'customMessage'?: string | null;
    /**
    * Role name associated with the event.
    */
    'roleName'?: string | null;
    /**
    * Application name associated with the event.
    */
    'appName'?: string | null;
    /**
    * Group name associated with the event.
    */
    'groupName'?: string | null;
    /**
    * Actor's username.
    */
    'actorUserName'?: string | null;
    /**
    * User's name.
    */
    'userName'?: string;
    /**
    * Policy name associated with the event.
    */
    'policyName'?: string | null;
    /**
    * OTP device name associated with the event.
    */
    'otpDeviceName'?: string | null;
    /**
    * Operation name of the event.
    */
    'operationName'?: string | null;
    /**
    * Directory sync run ID.
    */
    'directorySyncRunId'?: number | null;
    /**
    * Directory ID associated with the event.
    */
    'directoryId'?: number | null;
    /**
    * Resolution status of the event.
    */
    'resolution'?: string | null;
    /**
    * Client ID associated with the event.
    */
    'clientId'?: number | null;
    /**
    * Resource type ID.
    */
    'resourceTypeId'?: number | null;
    /**
    * Description of any error encountered.
    */
    'errorDescription'?: string | null;
    /**
    * Proxy IP address.
    */
    'proxyIp'?: string | null;
    /**
    * Risk score of the event.
    */
    'riskScore'?: number | null;
    /**
    * Reasons for the assigned risk score.
    */
    'riskReasons'?: string | null;
    /**
    * Risk cookie ID.
    */
    'riskCookieId'?: string | null;
    /**
    * Browser fingerprint.
    */
    'browserFingerprint'?: string | null;
    /**
    * List of event type IDs.
    */
    'eventTypeIds'?: number[] | null;
    /**
    * Event validity until this timestamp.
    */
    'until'?: string | null;
    /**
    * Event validity since this timestamp.
    */
    'since'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        { 'name': 'id', 'baseName': 'id', 'type': 'number' },
        { 'name': 'createdAt', 'baseName': 'created_at', 'type': 'string' },
        { 'name': 'accountId', 'baseName': 'account_id', 'type': 'number' },
        { 'name': 'userId', 'baseName': 'user_id', 'type': 'number' },
        { 'name': 'eventTypeId', 'baseName': 'event_type_id', 'type': 'number' },
        { 'name': 'notes', 'baseName': 'notes', 'type': 'string | null' },
        { 'name': 'ipaddr', 'baseName': 'ipaddr', 'type': 'string | null' },
        { 'name': 'actorUserId', 'baseName': 'actor_user_id', 'type': 'number | null' },
        { 'name': 'assumingActingUserId', 'baseName': 'assuming_acting_user_id', 'type': 'number | null' },
        { 'name': 'roleId', 'baseName': 'role_id', 'type': 'number | null' },
        { 'name': 'appId', 'baseName': 'app_id', 'type': 'number | null' },
        { 'name': 'groupId', 'baseName': 'group_id', 'type': 'number | null' },
        { 'name': 'otpDeviceId', 'baseName': 'otp_device_id', 'type': 'number | null' },
        { 'name': 'policyId', 'baseName': 'policy_id', 'type': 'number | null' },
        { 'name': 'actorSystem', 'baseName': 'actor_system', 'type': 'string | null' },
        { 'name': 'customMessage', 'baseName': 'custom_message', 'type': 'string | null' },
        { 'name': 'roleName', 'baseName': 'role_name', 'type': 'string | null' },
        { 'name': 'appName', 'baseName': 'app_name', 'type': 'string | null' },
        { 'name': 'groupName', 'baseName': 'group_name', 'type': 'string | null' },
        { 'name': 'actorUserName', 'baseName': 'actor_user_name', 'type': 'string | null' },
        { 'name': 'userName', 'baseName': 'user_name', 'type': 'string' },
        { 'name': 'policyName', 'baseName': 'policy_name', 'type': 'string | null' },
        { 'name': 'otpDeviceName', 'baseName': 'otp_device_name', 'type': 'string | null' },
        { 'name': 'operationName', 'baseName': 'operation_name', 'type': 'string | null' },
        { 'name': 'directorySyncRunId', 'baseName': 'directory_sync_run_id', 'type': 'string | null' },
        { 'name': 'directoryId', 'baseName': 'directory_id', 'type': 'string | null' },
        { 'name': 'resolution', 'baseName': 'resolution', 'type': 'string | null' },
        { 'name': 'clientId', 'baseName': 'client_id', 'type': 'string | null' },
        { 'name': 'resourceTypeId', 'baseName': 'resource_type_id', 'type': 'string | null' },
        { 'name': 'errorDescription', 'baseName': 'error_description', 'type': 'string | null' },
        { 'name': 'proxyIp', 'baseName': 'proxy_ip', 'type': 'string | null' },
        { 'name': 'riskScore', 'baseName': 'risk_score', 'type': 'string | null' },
        { 'name': 'riskReasons', 'baseName': 'risk_reasons', 'type': 'string | null' },
        { 'name': 'riskCookieId', 'baseName': 'risk_cookie_id', 'type': 'string | null' },
        { 'name': 'browserFingerprint', 'baseName': 'browser_fingerprint', 'type': 'string | null' },
        { 'name': 'eventTypeIds', 'baseName': 'event_type_ids', 'type': 'Array<number> | null' },
        { 'name': 'until', 'baseName': 'until', 'type': 'string | null' },
        { 'name': 'since', 'baseName': 'since', 'type': 'string | null' }
    ];

    static getAttributeTypeMap() {
        return Data1.attributeTypeMap;
    }
}
