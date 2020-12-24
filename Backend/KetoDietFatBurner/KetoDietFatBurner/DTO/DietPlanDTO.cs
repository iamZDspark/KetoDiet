using KetoDietFatBurner.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.DTO
{
    public class DietPlanDTO 
    {
        public DietPlanDTO()
        {
            Meal = new List<MealType>();
            type = new List<DietType>();
            nutrients = new List<NutrientsType>();
        }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string MealType { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string NutrientsType { get; set; }
        public string DayCounter { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string DietType { get; set; }
        public List<MealType> Meal { get; set; }
        public List<DietType> type { get; set; }
        public List<NutrientsType> nutrients { get; set; }
    }
}
