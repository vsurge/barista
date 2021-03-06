/**
 * Barista API
 * REST API documentation for the Barista system
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ModuleSearchChildRecordDto } from '../model/module-search-child-record-dto';
import { ModuleSearchParentRecordDto } from '../model/module-search-parent-record-dto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class GlobalSearchApiService {

    protected basePath = 'http://localhost/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * @param pageSize 
     * @param page 
     * @param modulePartialName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public globalSearchSearchModule1ModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ModuleSearchParentRecordDto>>;
    public globalSearchSearchModule1ModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModuleSearchParentRecordDto>>>;
    public globalSearchSearchModule1ModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModuleSearchParentRecordDto>>>;
    public globalSearchSearchModule1ModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling globalSearchSearchModule1ModulePartialNamePagePageSizeGet.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling globalSearchSearchModule1ModulePartialNamePagePageSizeGet.');
        }
        if (modulePartialName === null || modulePartialName === undefined) {
            throw new Error('Required parameter modulePartialName was null or undefined when calling globalSearchSearchModule1ModulePartialNamePagePageSizeGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<ModuleSearchParentRecordDto>>(`${this.configuration.basePath}/global-search/search-module-1/${encodeURIComponent(String(modulePartialName))}/${encodeURIComponent(String(page))}/${encodeURIComponent(String(pageSize))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param pageSize 
     * @param page 
     * @param modulePartialName 
     * @param projectId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, projectId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ModuleSearchChildRecordDto>>;
    public globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, projectId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModuleSearchChildRecordDto>>>;
    public globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, projectId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModuleSearchChildRecordDto>>>;
    public globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet(pageSize: number, page: number, modulePartialName: string, projectId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet.');
        }
        if (modulePartialName === null || modulePartialName === undefined) {
            throw new Error('Required parameter modulePartialName was null or undefined when calling globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet.');
        }
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling globalSearchSearchModule2ProjectIdModulePartialNamePagePageSizeGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<ModuleSearchChildRecordDto>>(`${this.configuration.basePath}/global-search/search-module-2/${encodeURIComponent(String(projectId))}/${encodeURIComponent(String(modulePartialName))}/${encodeURIComponent(String(page))}/${encodeURIComponent(String(pageSize))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
