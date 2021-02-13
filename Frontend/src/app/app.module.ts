import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { DietTypeComponent } from './diet-type/diet-type.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { NutrientsTypeComponent } from './nutrients-type/nutrients-type.component';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from '../services/auth/auth-interceptor/auth.interceptor';
import { AboutKetoComponent } from './about-keto/about-keto.component';
import { BenifitsKetoComponent } from './benifits-keto/benifits-keto.component';
import { StartKetoComponent } from './start-keto/start-keto.component';
import { DietPlanHttpService } from '../services/diet-plan/diet-plan-http-service/diet-plan.http.service';
import { DietPlanService } from '../services/diet-plan/diet-plan-service/diet-plan.service';
import { ErrorHandlerService } from '../services/shared/error-handler/error-handler.service';
import { UserInfoService } from 'src/services/user-info/user-info-service/user-info.service';
import { MealTypeService } from 'src/services/meal-type/meal-type-service/meal-type.service';
import { IngredientsService } from 'src/services/ingredients/ingredients-service/ingredients.service';
import { NutrientsTypeService } from 'src/services/nutrients-type/nutrients-type-service/nutrients-type.service';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DietPlanComponent,
    DietTypeComponent,
    IngredientsComponent,
    LoginInfoComponent,
    MealTypeComponent,
    NutrientsTypeComponent,
    RecipeMenuComponent,
    HomeComponent,
    AboutKetoComponent,
    BenifitsKetoComponent,
    StartKetoComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    authInterceptorProviders,
    DietPlanHttpService,
    DietPlanService,
    ErrorHandlerService,
    UserInfoService,
    MealTypeService,
    IngredientsService,
    NutrientsTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
