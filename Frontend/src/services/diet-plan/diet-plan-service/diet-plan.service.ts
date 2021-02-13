import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDietPlan } from '../../../model/IDietPlan';
import { DietPlanHttpService } from '../diet-plan-http-service/diet-plan.http.service';

@Injectable({
  providedIn: 'root'
})
export class DietPlanService {

  constructor(private dietPlanHttpService: DietPlanHttpService) {


  }

  getAll(): Observable<IDietPlan[]> {
    return this.dietPlanHttpService.getAll();
  }

  create(post): Observable<IDietPlan> {
    return this.dietPlanHttpService.create(post);
  }

  find(id): Observable<IDietPlan> {
    return this.dietPlanHttpService.find(id);
  }

  update(id, post): Observable<IDietPlan> {
    return this.dietPlanHttpService.update(id, post);
  }

  delete(id) {
    return this.dietPlanHttpService.delete(id);
  }
}
