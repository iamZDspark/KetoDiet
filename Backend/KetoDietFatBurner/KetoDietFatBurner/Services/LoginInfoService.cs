using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class LoginInfoService
    {
        private readonly IMongoCollection<LoginInfo> _login;
        public LoginInfoService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _login = (IMongoCollection<LoginInfo>)database.GetCollection<LoginInfo>(settings.LoginInfoCollectionName);
        }
        public async Task<List<LoginInfo>> GetAllAsync()
        {
            return await _login.Find(s => true).ToListAsync();
        }
        public async Task<LoginInfo> GetByIdAsync(string id)
        {
            return await _login.Find<LoginInfo>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<LoginInfo> CreateAsync(LoginInfo LoginInfo)
        {
            await _login.InsertOneAsync(LoginInfo);
            return LoginInfo;
        }
        public async Task UpdateAsync(string id, LoginInfo LoginInfo)
        {
            await _login.ReplaceOneAsync(s => s.Id == id, LoginInfo);
        }
        public async Task DeleteAsync(string id)
        {
            await _login.DeleteOneAsync(s => s.Id == id);
        }
    }
}
