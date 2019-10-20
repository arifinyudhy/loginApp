using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using API.Models;
namespace API.Repositories
{
    public class LoginRepository
    {
        private taskEntities db = new taskEntities();
        public User Login(User user)
        {
            var existing = db.Users.Where(x =>
                x.Username.ToLower() == user.Username.ToLower() &&
                x.Password == user.Password).FirstOrDefault();
            if (existing != null)
                return existing;
            else
                return new User();
        }
    }
}