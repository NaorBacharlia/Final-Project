using _03_BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Filters;
using System.Web.Http.Results;

namespace web_api.Filters
{
	public class BasicAuthFilter : Attribute, IAuthenticationFilter
	{
		public bool AllowMultiple => throw new NotImplementedException();

		public Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
		{
			var authHead = context.Request.Headers.Authorization;
			if (authHead != null && authHead.Scheme == "Basic")
			{
				string loginInfo = authHead.Parameter;
				if (loginInfo.Length < 66)
				{
					context.ErrorResult = new UnauthorizedResult(new AuthenticationHeaderValue[0], context.Request);
				}
				else
				{
					string password = loginInfo.Substring(0, 64);
					string name = loginInfo.Substring(64);
					int? userId = UserManager.getUserId(name, password);
					if (userId!=null)
					{
						var claims = new List<Claim>() { new Claim(ClaimTypes.Name, userId.ToString()) };

						var id = new ClaimsIdentity(claims,"Token");
						context.Principal = new ClaimsPrincipal(new[] { id });					}
					else
					{
						context.ErrorResult = new UnauthorizedResult(new AuthenticationHeaderValue[0], context.Request);
					}
				}	
			}
			return Task.FromResult(0);
		}

		
		public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
		{
			return Task.FromResult(0);
		}
	}
}