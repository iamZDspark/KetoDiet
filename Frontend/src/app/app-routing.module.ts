import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginInfoComponent } from './login-info/login-info.component';
import { HomeComponent } from './home/home.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { DietTypeComponent } from './diet-type/diet-type.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MealTypeComponent } from './meal-type/meal-type.component';
import { NutrientsTypeComponent } from './nutrients-type/nutrients-type.component';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: '', component: LoginInfoComponent
  },
  {
    path: 'login', component: LoginInfoComponent
  },
  { 
    path: 'register', component: RegisterComponent 
  },
  {
    path: 'home', component: HomeComponent , children: [
      {
        path: '', component: UserInfoComponent
      },
      {
        path: 'userinfo', component: UserInfoComponent
      },
      {
        path: 'dietplan', component: DietPlanComponent
      },
      {
        path: 'diettype', component: DietTypeComponent
      },
      {
        path: 'ingredients', component: IngredientsComponent
      },
      {
        path: 'mealtype', component: MealTypeComponent
      },
      {
        path: 'nutrientstype', component: NutrientsTypeComponent
      },
      {
        path: 'recipemenu', component: RecipeMenuComponent
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
