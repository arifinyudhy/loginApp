using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API.Models;

namespace API.Interface
{
    interface ILoginInterface
    {
        User Login(User user);
    }
}
