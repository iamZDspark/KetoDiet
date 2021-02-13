using KetoDietFatBurner.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.DTO
{
    public class RecipeMenuDTO
    {
        public RecipeMenuDTO()
        {
            Meal = new List<MealType>();
            ingredient = new List<Ingredients>();
        }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string MealType { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string Ingredients { get; set; }
        public string Method { get; set; }
        public List<MealType> Meal { get; set; }
        public List<Ingredients> ingredient { get; set; }

    }

}
