export interface AuthResponse {
    refresh_token: string;
    expires_in: number;
    token_type: string;
    access_token: string;
    scope: string;
}