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
    public class UserInfoController : ControllerBase
    {
        private readonly UserInfoService _userInfoService;
        public UserInfoController(UserInfoService service)
        {
            _userInfoService = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserInfo>>> GetAll()
        {
            var userInfo =  _userInfoService.GetAllAsync();
            return Ok(userInfo);
        }
        public async Task<ActionResult<UserInfo>> GetById(string id)
        {
            var userInfo = await _userInfoService.GetByIdAsync(id);
            if (userInfo == null)
            {
                return NotFound();
            }
            return Ok(userInfo);
        }
        [HttpPost]
        public async Task<IActionResult> Create(UserInfo userInfo)
        {
            await _userInfoService.CreateAsync(userInfo);
            return Ok(userInfo);
        }
        [HttpPut]
        public async Task<IActionResult> Update(string id, UserInfo updatedUserInfo)
        {
            var queriedUserInfo = await _userInfoService.GetByIdAsync(id);
            if (queriedUserInfo == null)
            {
                return NotFound();
            }
            await _userInfoService.UpdateAsync(id, updatedUserInfo);
            return NoContent();
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            var userInfo = await _userInfoService.GetByIdAsync(id);
            if (userInfo == null)
            {
                return NotFound();
            }
            await _userInfoService.DeleteAsync(id);
            return NoContent();
        }
    }
}
