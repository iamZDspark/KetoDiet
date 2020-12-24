using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Models
{
    public class MyDietPlanDBDatabaseSettings : IMyDietPlanDBDatabaseSettings
    {
        public string DietPlanCollectionName { get; set; }
        public string DietTypeCollectionName { get; set; }
        public string IngredientsCollectionName { get; set; }
        public string LoginInfoCollectionName { get; set; }
        public string MealTypeCollectionName { get; set; }
        public string NutrientsTypeCollectionName { get; set; }
        public string RecipeMenuCollectionName { get; set; }
        public string UserInfoCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IMyDietPlanDBDatabaseSettings
    {
         string DietPlanCollectionName { get; set; }
         string DietTypeCollectionName { get; set; }
         string IngredientsCollectionName { get; set; }
         string LoginInfoCollectionName { get; set; }
         string MealTypeCollectionName { get; set; }
         string NutrientsTypeCollectionName { get; set; }
         string RecipeMenuCollectionName { get; set; }
         string UserInfoCollectionName { get; set; }
         string ConnectionString { get; set; }
         string DatabaseName { get; set; }
    }
}
