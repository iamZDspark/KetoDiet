using KetoDietFatBurner.DTO;
using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class UserInfoService
    {
        private readonly IMongoCollection<UserInfo> _user;
        public UserInfoService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _user = (IMongoCollection<UserInfo>)database.GetCollection<UserInfo>(settings.UserInfoCollectionName);
        }
        public List<UserInfoDTO> GetAllAsync()
        {
            var user = _user.Aggregate()
               .Lookup("LoginInfo", "Username", "_id", "name")
               .Lookup("DietType", "DietType", "_id", "Type")
               .Lookup("DietPlan", "DietPlan", "_id", "dietChart")
               .As<UserInfoDTO>()
               .ToList();
            return user.FindAll(s => true).ToList();
        }
        public async Task<UserInfo> GetByIdAsync(string id)
        {
            return await _user.Find<UserInfo>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<UserInfo> CreateAsync(UserInfo UserInfo)
        {
            await _user.InsertOneAsync(UserInfo);
            return UserInfo;
        }
        public async Task UpdateAsync(string id, UserInfo UserInfo)
        {
            await _user.ReplaceOneAsync(s => s.Id == id, UserInfo);
        }
        public async Task DeleteAsync(string id)
        {
            await _user.DeleteOneAsync(s => s.Id == id);
        }
    }
}
