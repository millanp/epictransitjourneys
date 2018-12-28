export interface AuthResponse {
    refresh_token: string;
    expires_in: number;
    token_type: string;
    access_token: string;
    scope: string;
}

export interface JourneyManifest {
    name: string;
    first_published: Date;
    last_updated: Date;
    written_by: string;
    pk: number;
}

export interface JourneyManifestResponse {
    [index: number]: JourneyManifest
}

export interface JourneysResponse {
    [index: number]: Journey;
}

export interface Journey {
    name: string;
    markdown: string;
}

export interface JourneyWithPk extends Journey {
    pk: number;
}