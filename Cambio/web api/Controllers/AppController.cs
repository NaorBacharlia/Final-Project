using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace web_api.Controllers
{
	[EnableCors("*", "*", "*")]
	public class AppController : ApiController
    {
        // GET: api/App
        public IEnumerable<string> Get()
        {
			
            return new string[] { "value1", "value2" };
        }

        // GET: api/App/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/App
		[HttpPost] 
		public void Post([FromBody]string value)
        {
			Console.WriteLine(value);
        }

        // PUT: api/App/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/App/5
        public void Delete(int id)
        {
        }
    }
}
