using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class DietTypeService
    {
        private readonly IMongoCollection<DietType> _dietType;
        public DietTypeService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _dietType = (IMongoCollection<DietType>)database.GetCollection<DietType>(settings.DietTypeCollectionName);
        }
        public async Task<List<DietType>> GetAllAsync()
        {
            return await _dietType.Find(s => true).ToListAsync();
        }
        public async Task<DietType> GetByIdAsync(string id)
        {
            return await _dietType.Find<DietType>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<DietType> CreateAsync(DietType DietType)
        {
            await _dietType.InsertOneAsync(DietType);
            return DietType;
        }
        public async Task UpdateAsync(string id, DietType DietType)
        {
            await _dietType.ReplaceOneAsync(s => s.Id == id, DietType);
        }
        public async Task DeleteAsync(string id)
        {
            await _dietType.DeleteOneAsync(s => s.Id == id);
        }
    }
}
