import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {

    url = 'http://localhost:5000';

    constructor(private _http: HttpClient) { }

    get(endpoint: string, params?: any, reqOpts?: any) {
        return this._http.get(this.url + '/' + endpoint, reqOpts);
    }

    post(endpoint: string, body: any, reqOpts?: any) {
        return this._http.post(this.url + '/' + endpoint, body, reqOpts);
    }

    put(endpoint: string, body: any, reqOpts?: any) {
        return this._http.put(this.url + '/' + endpoint, body, reqOpts);
    }

    delete(endpoint: string, reqOpts?: any) {
        return this._http.delete(this.url + '/' + endpoint, reqOpts);
    }

    patch(endpoint: string, body: any, reqOpts?: any) {
        return this._http.patch(this.url + '/' + endpoint, body, reqOpts);
    }
}
