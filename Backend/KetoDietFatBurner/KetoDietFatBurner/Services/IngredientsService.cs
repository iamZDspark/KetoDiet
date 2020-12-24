using KetoDietFatBurner.DTO;
using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class IngredientsService
    {
        private readonly IMongoCollection<Ingredients> _ingredients;
        public IngredientsService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _ingredients = (IMongoCollection<Ingredients>)database.GetCollection<Ingredients>(settings.IngredientsCollectionName);

        }
        public List<IngredientsDTO> GetAllAsync()
        {
            var ingredients = _ingredients.Aggregate()
                .Lookup("DietType", "DietType", "_id", "type")
                .As<IngredientsDTO>()
                .ToList();
            return ingredients.FindAll(s => true).ToList();

        }
        public async Task<Ingredients> GetByIdAsync(string id)
        {
            return await _ingredients.Find<Ingredients>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<Ingredients> CreateAsync(Ingredients Ingredients)
        {
            await _ingredients.InsertOneAsync(Ingredients);
            return Ingredients;
        }
        public async Task UpdateAsync(string id, Ingredients Ingredients)
        {
            await _ingredients.ReplaceOneAsync(s => s.Id == id, Ingredients);
        }
        public async Task DeleteAsync(string id)
        {
            await _ingredients.DeleteOneAsync(s => s.Id == id);
        }
    }
}
