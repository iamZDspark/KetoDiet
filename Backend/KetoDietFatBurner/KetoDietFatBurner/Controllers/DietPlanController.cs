using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KetoDietFatBurner.DTO;
using KetoDietFatBurner.Models;
using KetoDietFatBurner.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KetoDietFatBurner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DietPlanController : ControllerBase
    {
        private readonly DietPlanService _dietPlanService;
        public DietPlanController(DietPlanService service)
        {
            _dietPlanService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DietPlan>>> GetAll()
        {
            var dietPlan =  _dietPlanService.GetAllAsync();
            return Ok(dietPlan);
        }
        public async Task<ActionResult<DietPlan>> GetById(string id)
        {
            var dietPlan = await _dietPlanService.GetByIdAsync(id);
            if (dietPlan == null)
            {
                return NotFound();
            }
            return Ok(dietPlan);
        }
        [HttpPost]
        public async Task<IActionResult> Create(DietPlan dietPlan)
        {
            await _dietPlanService.CreateAsync(dietPlan);
            return Ok(dietPlan);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, DietPlan updatedDietPlan)
        {
            var queriedDietPlan = await _dietPlanService.GetByIdAsync(id);
            if (queriedDietPlan == null)
            {
                return NotFound();
            }
            await _dietPlanService.UpdateAsync(id, updatedDietPlan);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var dietPlan = await _dietPlanService.GetByIdAsync(id);
            if (dietPlan == null)
            {
                return NotFound();
            }
            await _dietPlanService.DeleteAsync(id);
            return NoContent();
        }
    }
}
