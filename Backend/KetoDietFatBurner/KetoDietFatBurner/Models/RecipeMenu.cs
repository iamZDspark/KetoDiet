using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Models
{
    public class RecipeMenu
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        
        [BsonRepresentation(BsonType.ObjectId)]
        public string MealType { get; set; }
       
        [BsonRepresentation(BsonType.ObjectId)]
        public string Ingredients { get; set; }
        public string Method { get; set; }
    }
}
