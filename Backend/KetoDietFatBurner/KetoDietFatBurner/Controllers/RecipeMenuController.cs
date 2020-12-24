using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KetoDietFatBurner.Models;
using KetoDietFatBurner.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KetoDietFatBurner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeMenuController : ControllerBase
    {
        private readonly RecipeMenuService _recipeMenuService;
        public RecipeMenuController(RecipeMenuService service)
        {
            _recipeMenuService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeMenu>>> GetAll()
        {
            var recipeMenu = _recipeMenuService.GetAllAsync();
            return Ok(recipeMenu);
        }
        public async Task<ActionResult<RecipeMenu>> GetById(string id)
        {
            var recipeMenu = await _recipeMenuService.GetByIdAsync(id);
            if (recipeMenu == null)
            {
                return NotFound();
            }
            return Ok(recipeMenu);
        }
        [HttpPost]
        public async Task<IActionResult> Create(RecipeMenu recipeMenu)
        {
            await _recipeMenuService.CreateAsync(recipeMenu);
            return Ok(recipeMenu);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, RecipeMenu updatedDietType)
        {
            var queriedRecipeMenu = await _recipeMenuService.GetByIdAsync(id);
            if (queriedRecipeMenu == null)
            {
                return NotFound();
            }
            await _recipeMenuService.UpdateAsync(id, updatedDietType);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var _recipeMenu = await _recipeMenuService.GetByIdAsync(id);
            if (_recipeMenu == null)
            {
                return NotFound();
            }
            await _recipeMenuService.DeleteAsync(id);
            return NoContent();
        }
    }
}
