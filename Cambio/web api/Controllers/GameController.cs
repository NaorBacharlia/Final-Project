using _02_BOL;
using _03_BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace web_api.Controllers
{
	[EnableCors("*", "*", "*")]
	public class GameController : ApiController
    {
		[Route("api/GetStartNewGame")]
		public HttpResponseMessage GetStartNewGame()
        {
			int id;
			id = Convert.ToInt32(Request.Headers.Authorization.Parameter);	
			try
			{
				GeneralGameInfoModel MyGame = new GeneralGameInfoModel();
				MyGame=GameManager.StartNewGame(id);
				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK, MyGame);
				return res;
			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.InternalServerError, "error");
			};
			
        }

		[Route("api/GetExitGame")]
		public HttpResponseMessage GetExitGame()
		{
			int id;
			id = Convert.ToInt32(Request.Headers.Authorization.Parameter);
			try
			{
				GameManager.ExitGameLogic(id);
				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK,"WinnerId=-1");
				return res;
			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.InternalServerError, "error");
			};

		}

		[Route("api/ContinueGame")]
		public HttpResponseMessage GetContinueGame()
		{
			int Gameid;
			Gameid = Convert.ToInt32(Request.Headers.Authorization.Parameter);
			try
			{
				GeneralGameInfoModel MyGame = new GeneralGameInfoModel();
				MyGame = GameManager.ContinueGame(Gameid);
				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK,MyGame);
				return res;
			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.InternalServerError, "error");
			};

		}


		[Route("api/OnGameRun")]
		public HttpResponseMessage PutOnGameRun([FromBody]GameOnRunModel gameOn)
		{
		
			try
			{
				GeneralGameInfoModel MyGame = new GeneralGameInfoModel();
				//MyGame = GameManager.GameOnRun(gameOn);
				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK,MyGame);
				return res;
			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.InternalServerError, "error");
			};

		}
	}
}
