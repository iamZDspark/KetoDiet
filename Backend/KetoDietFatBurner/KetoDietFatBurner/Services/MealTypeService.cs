using KetoDietFatBurner.DTO;
using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class MealTypeService
    {
        private readonly IMongoCollection<MealType> _meal;
        public MealTypeService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _meal = (IMongoCollection<MealType>)database.GetCollection<MealType>(settings.MealTypeCollectionName);
        }
      
        public async Task<List<MealType>> GetAllAsync()
        {
            return await _meal.Find(s => true).ToListAsync();
        }
        public async Task<MealType> GetByIdAsync(string id)
        {
            return await _meal.Find<MealType>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<MealType> CreateAsync(MealType MealType)
        {
            await _meal.InsertOneAsync(MealType);
            return MealType;
        }
        public async Task UpdateAsync(string id, MealType MealType)
        {
            await _meal.ReplaceOneAsync(s => s.Id == id, MealType);
        }
        public async Task DeleteAsync(string id)
        {
            await _meal.DeleteOneAsync(s => s.Id == id);
        }
    }
}
