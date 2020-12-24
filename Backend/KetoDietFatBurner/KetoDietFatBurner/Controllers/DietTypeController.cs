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
    public class DietTypeController : ControllerBase
    {
        private readonly DietTypeService _dietTypeService;
        public DietTypeController(DietTypeService service)
        {
            _dietTypeService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DietType>>> GetAll()
        {
            var dietType = await _dietTypeService.GetAllAsync();
            return Ok(dietType);
        }
        public async Task<ActionResult<DietType>> GetById(string id)
        {
            var dietType = await _dietTypeService.GetByIdAsync(id);
            if (dietType == null)
            {
                return NotFound();
            }
            return Ok(dietType);
        }
        [HttpPost]
        public async Task<IActionResult> Create(DietType dietType)
        {
            await _dietTypeService.CreateAsync(dietType);
            return Ok(dietType);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, DietType updatedDietType)
        {
            var queriedDietType = await _dietTypeService.GetByIdAsync(id);
            if (queriedDietType == null)
            {
                return NotFound();
            }
            await _dietTypeService.UpdateAsync(id, updatedDietType);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var dietType = await _dietTypeService.GetByIdAsync(id);
            if (dietType == null)
            {
                return NotFound();
            }
            await _dietTypeService.DeleteAsync(id);
            return NoContent();
        }
    }
}
