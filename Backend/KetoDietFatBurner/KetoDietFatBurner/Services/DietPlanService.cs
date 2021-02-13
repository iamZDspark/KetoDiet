using KetoDietFatBurner.DTO;
using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class DietPlanService
    {
        private readonly IMongoCollection<DietPlan> _dietPlan;
      

        public DietPlanService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _dietPlan = (IMongoCollection<DietPlan>)database.GetCollection<DietPlan>(settings.DietPlanCollectionName);
        }
        public List<DietPlanDTO> GetAllAsync()
        {
            var dietPlan = _dietPlan.Aggregate()
                .Lookup("MealType", "MealType", "_id", "Meal")
                .Lookup("DietType", "DietType", "_id", "type")
                .Lookup("NutrientsType", "NutrientsType", "_id", "nutrients")
                .As<DietPlanDTO>()
                .ToList();
            return dietPlan.FindAll(s => true).ToList();
        }
        public async Task<DietPlan> GetByIdAsync(string id)
        {
            return await _dietPlan.Find<DietPlan>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<DietPlan> CreateAsync(DietPlan dietPlan)
        {
            await _dietPlan.InsertOneAsync( dietPlan);
            return dietPlan;
        }
        public async Task UpdateAsync(string id, DietPlan DietPlan)
        {
            await _dietPlan.ReplaceOneAsync(s => s.Id == id, DietPlan);
        }
        public async Task DeleteAsync(string id)
        {
            await _dietPlan.DeleteOneAsync(s => s.Id == id);
        }
    }
}
