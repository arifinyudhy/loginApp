using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API.Models;
using API.Service;

namespace API.Controllers
{
    public class LoginController : ApiController
    {
        private LoginService _loginService = new LoginService();
        // POST: api/Login
        [HttpPost]
        public IHttpActionResult Login([FromBody]User user)
        {
            var valid = _loginService.Login(user);
            if (valid.Id != 0)
            {
                valid.Id = 0;
                return Ok(valid);
            }
            else
                return BadRequest("Username or password invalid");
        }
    }
}
