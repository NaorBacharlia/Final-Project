using _02_BOL;
using _03_BLL;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using web_api.Filters;

namespace web_api.Controllers
{
	[EnableCors("*", "*", "*")]
	public class UserController : ApiController
	{
		// http request method to register user.
		[Route("api/register")]
		public HttpResponseMessage Post([FromBody]UserInfoModel user)
		{
			if (UserManager.Register(user))
				return new HttpResponseMessage(HttpStatusCode.Created);
			return new HttpResponseMessage(HttpStatusCode.BadRequest);
		}


		// http request method to login.
		[BasicAuthFilter]
		[Route("api/login")]
		public HttpResponseMessage GetLogin()
		{
			//if we got to this line of code, we passed the "BasicAuthFilter" filter
			//so we can be sure that the user logged in successfully
			return Request.CreateResponse(HttpStatusCode.OK);
		}


		[BasicAuthFilter]
		[Route("api/GetUserInfo")]
		public HttpResponseMessage GetUserInfo()
		{
			int userId =int.Parse(RequestContext.Principal.Identity.Name);
			UserInfoModel info = UserManager.UserInfo(userId);
			if (info != null)
			{
				return Request.CreateResponse(HttpStatusCode.OK, info);
			}
			return Request.CreateResponse(HttpStatusCode.BadRequest, "error");

		}

		[BasicAuthFilter]
		[Route("api/updateuser")]
		public HttpResponseMessage PutUpdateUser([FromBody]UserInfoModel user)
		{
			int userId = int.Parse(RequestContext.Principal.Identity.Name);
			if (UserManager.UpdateUser(user, userId))
			{
				return new HttpResponseMessage(HttpStatusCode.OK);
			}
			return new HttpResponseMessage(HttpStatusCode.BadRequest);
		}

		[BasicAuthFilter]
		[Route("api/deleteuser")]
		public HttpResponseMessage DeleteUser()
		{
			int userId = int.Parse(RequestContext.Principal.Identity.Name);

			if (UserManager.DeleteUser(userId))
			{
				return Request.CreateResponse(HttpStatusCode.OK);

			}

			return Request.CreateResponse(HttpStatusCode.NotFound);

		}
	}
}
