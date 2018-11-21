using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Routes.Models;
using Routes.Controllers;
using System.Text;
using System.Web.Security;

namespace Routes.Controllers
{
    public class LoginController : Controller
    {

        // GET: /Login/  
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public string Login(Logins data)
        {
            bool isPasswordCorrect = false;
            string un = data.UserName;
            string Password = data.Password;
            using (UsersEntities entity = new UsersEntities())
            {
                var user = entity.Logins.Where(u => u.UserName == un).FirstOrDefault();
                if (user != null)
                {
                    if (Password == user.Password)
                    {
                        Session["LoginID"] = user.Id;
                        Session["Username"] = user.Fname + ' ' + user.Lname;
                        return user.Id.ToString();
                    }
                    else
                    {
                        return "0";
                    }
                }
                else
                {
                    return "-1";
                }
            }
        }
    }
} 