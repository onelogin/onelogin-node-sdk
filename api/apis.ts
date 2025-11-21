export * from './defaultApi';
import { DefaultApi } from './defaultApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DefaultApi];

// Export Client as an alias to DefaultApi for better compatibility
export { DefaultApi as Client };
