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
    public class LoginInfoController : ControllerBase
    {
        private readonly LoginInfoService _loginInfoService;
        public LoginInfoController(LoginInfoService service)
        {
            _loginInfoService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoginInfo>>> GetAll()
        {
            var loginInfo = await _loginInfoService.GetAllAsync();
            return Ok(loginInfo);
        }
        public async Task<ActionResult<LoginInfo>> GetById(string id)
        {
            var loginInfo = await _loginInfoService.GetByIdAsync(id);
            if (loginInfo == null)
            {
                return NotFound();
            }
            return Ok(loginInfo);
        }
        [HttpPost]
        public async Task<IActionResult> Create(LoginInfo loginInfo)
        {
            await _loginInfoService.CreateAsync(loginInfo);
            return Ok(loginInfo);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, LoginInfo updatedDietType)
        {
            var queriedDietType = await _loginInfoService.GetByIdAsync(id);
            if (queriedDietType == null)
            {
                return NotFound();
            }
            await _loginInfoService.UpdateAsync(id, updatedDietType);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var dietType = await _loginInfoService.GetByIdAsync(id);
            if (dietType == null)
            {
                return NotFound();
            }
            await _loginInfoService.DeleteAsync(id);
            return NoContent();
        }
    }
}
