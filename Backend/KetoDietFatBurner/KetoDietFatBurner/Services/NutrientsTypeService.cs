using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class NutrientsTypeService
    {
        private readonly IMongoCollection<NutrientsType> _nutrients;
        public NutrientsTypeService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _nutrients = (IMongoCollection<NutrientsType>)database.GetCollection<NutrientsType>(settings.NutrientsTypeCollectionName);
        }
        public async Task<List<NutrientsType>> GetAllAsync()
        {
            return await _nutrients.Find(s => true).ToListAsync();
        }
        public async Task<NutrientsType> GetByIdAsync(string id)
        {
            return await _nutrients.Find<NutrientsType>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<NutrientsType> CreateAsync(NutrientsType NutrientsType)
        {
            await _nutrients.InsertOneAsync(NutrientsType);
            return NutrientsType;
        }
        public async Task UpdateAsync(string id, NutrientsType NutrientsType)
        {
            await _nutrients.ReplaceOneAsync(s => s.Id == id, NutrientsType);
        }
        public async Task DeleteAsync(string id)
        {
            await _nutrients.DeleteOneAsync(s => s.Id == id);
        }
    }
}
