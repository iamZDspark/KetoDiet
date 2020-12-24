using KetoDietFatBurner.DTO;
using KetoDietFatBurner.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KetoDietFatBurner.Services
{
    public class RecipeMenuService
    {
        private readonly IMongoCollection<RecipeMenu> _menu;
        public RecipeMenuService(IMyDietPlanDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _menu = (IMongoCollection<RecipeMenu>)database.GetCollection<RecipeMenu>(settings.RecipeMenuCollectionName);
        }
        public List<RecipeMenuDTO> GetAllAsync()
        {
            var Menu = _menu.Aggregate()
                .Lookup("MealType", "MealType", "_id", "Meal")
                .Lookup("Ingredients", "Ingredients", "_id", "ingredient")
                .As<RecipeMenuDTO>()
                .ToList();
            return Menu.FindAll(s => true).ToList();

        }
        public async Task<RecipeMenu> GetByIdAsync(string id)
        {
            return await _menu.Find<RecipeMenu>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<RecipeMenu> CreateAsync(RecipeMenu RecipeMenu)
        {
            await _menu.InsertOneAsync(RecipeMenu);
            return RecipeMenu;
        }
        public async Task UpdateAsync(string id, RecipeMenu RecipeMenu)
        {
            await _menu.ReplaceOneAsync(s => s.Id == id, RecipeMenu);
        }
        public async Task DeleteAsync(string id)
        {
            await _menu.DeleteOneAsync(s => s.Id == id);
        }
    }
}
