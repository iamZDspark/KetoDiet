using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Models
{
    public class DietPlan

    { 
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
    }
}
