using _02_BOL;
using _03_BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using web_api.Filters;

namespace web_api.Controllers
{
	[EnableCors("*", "*", "*")]
	[BasicAuthFilter]
	public class GameController : ApiController
    {

		[Route("api/GetStartNewGame")]
		public HttpResponseMessage GetStartNewGame()
        {
			int userId = int.Parse(RequestContext.Principal.Identity.Name);
			try
			{
				GeneralGameInfoModel MyGame = GameManager.StartNewGame(userId);
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
			int userId = int.Parse(RequestContext.Principal.Identity.Name);
			try
			{
				GameManager.ExitGameLogic(userId);
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
			int userId = int.Parse(RequestContext.Principal.Identity.Name);
			try
			{
				GeneralGameInfoModel MyGame = new GeneralGameInfoModel();
				MyGame = GameManager.ContinueGame(userId);
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
				MyGame = GameManager.GameOnRun(gameOn);
				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.Accepted,MyGame);
				return res;
			}
			catch(Exception ex)
			{
				Console.WriteLine(ex.Message);
				if (ex.Message == "game over")
				{
					return Request.CreateResponse(HttpStatusCode.Accepted, "game over");
				}
				return Request.CreateResponse(HttpStatusCode.InternalServerError, "error");
			};
		}
	}
}
