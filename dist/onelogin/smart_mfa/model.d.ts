export interface SmartMFAContext {
    user_agent: string;
    ip: string;
    session_id?: string;
    device_id?: string;
    device_fingerprint?: string;
}
export interface SmartMFARequest {
    user_identifier: string;
    context: SmartMFAContext;
}
export interface SmartSMSRequest extends SmartMFARequest {
    phone: string;
}
export interface SmartEmailRequest extends SmartMFARequest {
    email: string;
}
export interface OTP {
    state_token: string;
    otp_token: string;
}
export interface SmartMFAResponse {
    user_id: number | string;
    risk: {
        score: number;
        reasons: string[];
    };
    mfa: {
        otp_sent: boolean;
        state_token: string;
        state_token_expires_at?: string;
        verify_url?: string;
        factor_type?: string;
    };
}
