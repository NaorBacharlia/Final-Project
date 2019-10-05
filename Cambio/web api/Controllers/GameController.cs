using _02_BOL;
using _03_BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace web_api.Controllers
{
	[EnableCors("*", "*", "*")]
	public class GameController : ApiController
    {
        // GET: api/Game

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

		[Route("api/GetStartNewGame")]
		public HttpResponseMessage GetStartNewGame()
        {
			UserInfoModel MyUserInfo = new UserInfoModel();
			int userId;
			CardTableModel MyGameCardTable = new CardTableModel();
			string userName = Request.Headers.Authorization.Parameter;
			try
			{
				MyUserInfo = UserManager.UserInfo(userName);
				userId = MyUserInfo.Id;
				MyGameCardTable = GameManager.StartNewGame(userId);

				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK, MyGameCardTable);
				return res;
			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.BadRequest, "error");
			};
			
        }

        // POST: api/Game
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Game/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Game/5
        public void Delete(int id)
        {
        }
    }
}
