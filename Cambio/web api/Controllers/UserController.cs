using _02_BOL;
using _03_BLL;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using web_api.Managers;
using web_api.Models;

namespace web_api.Controllers
{
	[EnableCors("*", "*", "*")]
	public class UserController : ApiController
	{
		// http request method to register user.
		[Route("api/register")]
		public HttpResponseMessage Post([FromBody]UserInfoModel user)
		{

			return new HttpResponseMessage(HttpStatusCode.Created)
			{
				Content = new ObjectContent<string>(UserManager.Register(user), new JsonMediaTypeFormatter())
			};

		}


		// http request method to login.
		[Route("api/login")]
		public HttpResponseMessage GetLogin()
		{

			string userLoginInfo = Request.Headers.Authorization.Parameter;
			string[] authModel = userLoginInfo.Split(' ');
			string userName = authModel[0];
			string password = authModel[1];

			IAuthContainerModel authContainerModel = AuthModel.GetJWTContainerModel(userName);
			IAuthService authService = new JWTService(authContainerModel.SecretKey);

			string token = authService.GenerateToken(authContainerModel);
			if (UserManager.Login(userName, password))
			{

				HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, new { token = token });
				//response.Headers.Add("Content-Type", "application/json");
				response.Headers.Add("Authorization", "Basic " + token);
				return response;
			}
			else
			{
				return Request.CreateResponse(HttpStatusCode.BadRequest, "error");
			}
		}



		[Route("api/GetUserInfo")]
		public HttpResponseMessage GetUserInfo()
		{
			UserInfoModel MyUserInfo = new UserInfoModel();

			string userName = Request.Headers.Authorization.Parameter;
			try
			{
				MyUserInfo = UserManager.UserInfo(userName);
				HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK, MyUserInfo);

				return res;
			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.BadRequest, "error");
			};
		}


		[Route("api/updateuser")]
		public HttpResponseMessage PutUpdateUser([FromBody]UserInfoModel user)
		{
			return new HttpResponseMessage(HttpStatusCode.OK)
			{
				Content = new ObjectContent<string>(UserManager.UpdateUser(user), new JsonMediaTypeFormatter())
			};
		}

		[Route("api/deleteuser")]
		public HttpResponseMessage DeleteUser()
		{
			string userName = Request.Headers.Authorization.Parameter;
			try
			{
				if (UserManager.DeleteUser(userName))
				{
					HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.OK);
					return res;
				}
				else
				{
					HttpResponseMessage res = Request.CreateResponse(HttpStatusCode.NotFound);
					return res;
				}

			}
			catch
			{
				return Request.CreateResponse(HttpStatusCode.BadRequest, "error");
			}

		}
	}
}
