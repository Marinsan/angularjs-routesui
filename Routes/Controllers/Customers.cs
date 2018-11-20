using Routes.Controllers;
using Routes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Routes.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetCustomers()
        {
            CustomersEntities entities = new CustomersEntities();
            return Json(entities.Customers);
        }

        [HttpPost]
        public JsonResult InsertCustomer(Customers customer)
        {
            using (CustomersEntities entities = new CustomersEntities())
            {
                entities.Customers.Add(customer);
                entities.SaveChanges();
            }

            return Json(customer);
        }

        [HttpPost]
        public ActionResult UpdateCustomer(Customers customer)
        {
            using (CustomersEntities entities = new CustomersEntities())
            {
                Customers updatedCustomer = (from c in entities.Customers
                                            where c.CustomerId == customer.CustomerId
                                            select c).FirstOrDefault();
                updatedCustomer.Name = customer.Name;
                updatedCustomer.Country = customer.Country;
                entities.SaveChanges();
            }

            return new EmptyResult();
        }

        [HttpPost]
        public ActionResult DeleteCustomer(int customerId)
        {
            using (CustomersEntities entities = new CustomersEntities())
            {
                Customers customer = (from c in entities.Customers
                                     where c.CustomerId == customerId
                                     select c).FirstOrDefault();
                entities.Customers.Remove(customer);
                entities.SaveChanges();
            }
            return new EmptyResult();
        }
    }
}