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
import { AboutKetoComponent} from './about-keto/about-keto.component';
import { StartKetoComponent} from './start-keto/start-keto.component';
import { BenifitsKetoComponent } from './benifits-keto/benifits-keto.component';
import { UserInfoComponent } from './user-info/user-info.component';
const routes: Routes = [
  {
    path: '', component: LoginInfoComponent
  },
  {
    path: 'login', component: LoginInfoComponent
  },
  {
    path: 'home', component: HomeComponent , children: [
      {
        path: '', component: AboutKetoComponent
      },
      {
        path: 'about-keto', component: AboutKetoComponent
      },
      {
        path: 'start-keto', component: StartKetoComponent
      },
      {
        path: 'benifits-keto', component: BenifitsKetoComponent
      },
      {
        path: 'user-info', component: UserInfoComponent
      },
      {
        path: 'diet-plan', component: DietPlanComponent
      },
      {
        path: 'diet-type', component: DietTypeComponent
      },
      {
        path: 'ingredients', component: IngredientsComponent
      },
      {
        path: 'meal-type', component: MealTypeComponent
      },
      {
        path: 'nutrients-type', component: NutrientsTypeComponent
      },
      {
        path: 'recipe-menu', component: RecipeMenuComponent
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
