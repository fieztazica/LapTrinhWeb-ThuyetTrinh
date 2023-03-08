using LapTrinhWeb_ThuyetTrinh.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace LapTrinhWeb_ThuyetTrinh.Controllers
{
    public class BookController : ApiController
    {
        private BookDbDataContext dbContext = new BookDbDataContext();

        // GET: api/Book
        public IEnumerable<Sach> Get()
        {
            Sach[] listSach = dbContext.Saches.ToList().ToArray();

            return listSach;
        }

        // GET: api/Book/5
        public Sach Get(int id)
        {
            Sach sach = dbContext.Saches.FirstOrDefault(s => s.masach == id);

            return sach;
        }

        // POST: api/Book
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Book/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Book/5
        public void Delete(int id)
        {
        }
    }
}
