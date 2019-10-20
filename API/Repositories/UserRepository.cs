using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Repositories
{
    
    public class UserRepository
    {
        private taskEntities db = new taskEntities();
        public bool isExistUser(User user)
        {
            var exist = db.Users.Where(x => x.Username.ToLower() == user.Username.ToLower()).FirstOrDefault();
            if (exist != null)
            {
                return false;
            }
            else
            {
                db.Users.Add(user);
                db.SaveChanges();
                return true;
            }
        }
    }
}