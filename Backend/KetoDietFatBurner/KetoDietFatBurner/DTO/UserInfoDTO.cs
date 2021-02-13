using KetoDietFatBurner.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.DTO
{
    public class UserInfoDTO
    {
        public UserInfoDTO()
        {
            name = new List<LoginInfo>();
            Type = new List<DietType>();
            dietChart = new List<DietPlan>();

        }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string Username { get; set; }
        public string Weight { get; set; }
        public string Height { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string DietType { get; set; }
        public string AssignDietPlan { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string DietPlan { get; set; }

        public List<LoginInfo> name { get; set; }
        public List<DietType> Type { get; set; }
        public List<DietPlan> dietChart { get; set; }
    }
}
