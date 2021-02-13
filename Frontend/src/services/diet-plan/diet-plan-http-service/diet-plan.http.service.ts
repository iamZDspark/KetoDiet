import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDietPlan } from '../../../model/IDietPlan';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '../../../services/shared/error-handler/error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class DietPlanHttpService {
    private apiURL = "http://localhost:5009/api/DietPlan";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient, private errorHandlerService : ErrorHandlerService) { }

    getAll(): Observable<IDietPlan[]> {
        return this.httpClient.get<IDietPlan[]>(this.apiURL)
            .pipe(
                catchError(this.errorHandlerService.errorHandler)
            )
    }

    create(post): Observable<IDietPlan> {
        return this.httpClient.post<IDietPlan>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
            .pipe(
                catchError(this.errorHandlerService.errorHandler)
            )
    }

    find(id): Observable<IDietPlan> {
        return this.httpClient.get<IDietPlan>(this.apiURL + '/posts/' + id)
            .pipe(
                catchError(this.errorHandlerService.errorHandler)
            )
    }

    update(id, post): Observable<IDietPlan> {
        return this.httpClient.put<IDietPlan>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
            .pipe(
                catchError(this.errorHandlerService.errorHandler)
            )
    }

    delete(id) {
        return this.httpClient.delete<IDietPlan>(this.apiURL + '/posts/' + id, this.httpOptions)
            .pipe(
                catchError(this.errorHandlerService.errorHandler)
            )
    }
}