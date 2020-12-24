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
    public class MealTypeController : ControllerBase
    {
        private readonly MealTypeService _mealTypeService;
        public MealTypeController(MealTypeService service)
        {
            _mealTypeService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MealType>>> GetAll()
        {
            var mealType = await _mealTypeService.GetAllAsync();
            return Ok(mealType);
        }
        public async Task<ActionResult<MealType>> GetById(string id)
        {
            var mealType = await _mealTypeService.GetByIdAsync(id);
            if (mealType == null)
            {
                return NotFound();
            }
            return Ok(mealType);
        }
        [HttpPost]
        public async Task<IActionResult> Create(MealType mealType)
        {
            await _mealTypeService.CreateAsync(mealType);
            return Ok(mealType);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, MealType updatedMealType)
        {
            var queriedMealType = await _mealTypeService.GetByIdAsync(id);
            if (queriedMealType == null)
            {
                return NotFound();
            }
            await _mealTypeService.UpdateAsync(id, updatedMealType);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var mealType = await _mealTypeService.GetByIdAsync(id);
            if (mealType == null)
            {
                return NotFound();
            }
            await _mealTypeService.DeleteAsync(id);
            return NoContent();
        }
    }
}
