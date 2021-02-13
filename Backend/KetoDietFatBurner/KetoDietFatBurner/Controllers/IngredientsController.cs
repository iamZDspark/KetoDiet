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
    public class IngredientsController : ControllerBase
    {
        private readonly IngredientsService _ingredientsService;
        public IngredientsController(IngredientsService service)
        {
            _ingredientsService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ingredients>>> GetAll()
        {
            var ingredients = _ingredientsService.GetAllAsync();
            return Ok(ingredients);
        }
        public async Task<ActionResult<Ingredients>> GetById(string id)
        {
            var ingredients = await _ingredientsService.GetByIdAsync(id);
            if (ingredients == null)
            {
                return NotFound();
            }
            return Ok(ingredients);
        }
        [HttpPost]
        public async Task<IActionResult> Create(Ingredients ingredients)
        {
            await _ingredientsService.CreateAsync(ingredients);
            return Ok(ingredients);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, Ingredients updatedIngredient)
        {
            var queriedIngredient = await _ingredientsService.GetByIdAsync(id);
            if (queriedIngredient == null)
            {
                return NotFound();
            }
            await _ingredientsService.UpdateAsync(id, updatedIngredient);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var dietType = await _ingredientsService.GetByIdAsync(id);
            if (dietType == null)
            {
                return NotFound();
            }
            await _ingredientsService.DeleteAsync(id);
            return NoContent();
        }
    }
}
