using KetoDietFatBurner.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.DTO
{
    public class IngredientsDTO
    {
        public IngredientsDTO()
        {
            type =new List<DietType>();
        }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
       
        [BsonRepresentation(BsonType.ObjectId)]
        public string DietType { get; set; }
        public List<DietType> type { get; set; }


    }
}
