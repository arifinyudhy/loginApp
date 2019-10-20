using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using API.Interface;
using API.Models;
using API.Repositories;

namespace API.Service
{
    public class UserService : UserInterface
    {
        UserRepository _userRepository = new UserRepository();
        public bool isExistUser(User user)
        {
            return _userRepository.isExistUser(user);
        }
    }
}