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
    public class NutrientsTypeController : ControllerBase
    {
        private readonly NutrientsTypeService _nutrientsTypeService;
        public NutrientsTypeController(NutrientsTypeService service)
        {
            _nutrientsTypeService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NutrientsType>>> GetAll()
        {
            var nutrientsType = await _nutrientsTypeService.GetAllAsync();
            return Ok(nutrientsType);
        }
        public async Task<ActionResult<NutrientsType>> GetById(string id)
        {
            var nutrientsType = await _nutrientsTypeService.GetByIdAsync(id);
            if (nutrientsType == null)
            {
                return NotFound();
            }
            return Ok(nutrientsType);
        }
        [HttpPost]
        public async Task<IActionResult> Create(NutrientsType nutrientsType)
        {
            await _nutrientsTypeService.CreateAsync(nutrientsType);
            return Ok(nutrientsType);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, NutrientsType updatedNutrientsType)
        {
            var queriedNutrientsType = await _nutrientsTypeService.GetByIdAsync(id);
            if (queriedNutrientsType == null)
            {
                return NotFound();
            }
            await _nutrientsTypeService.UpdateAsync(id, updatedNutrientsType);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var dietType = await _nutrientsTypeService.GetByIdAsync(id);
            if (dietType == null)
            {
                return NotFound();
            }
            await _nutrientsTypeService.DeleteAsync(id);
            return NoContent();
        }
    }
}
