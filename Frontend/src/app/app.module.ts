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
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from '../services/auth/auth-interceptor/auth.interceptor';



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
    UserInfoComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
