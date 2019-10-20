using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using API.Interface;
using API.Models;
using API.Repositories;

namespace API.Service
{
    public class LoginService : ILoginInterface
    {
        LoginRepository _loginRepository = new LoginRepository();
        public User Login(User user)
        {
           return _loginRepository.Login(user);
        }
    }
}