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
using web_api.Managers;
using web_api.Models;

namespace web_api.Filters
{
	public class BasicAuthFilter : Attribute, IAuthenticationFilter
	{
		public bool AllowMultiple => throw new NotImplementedException();

		readonly IAuthContainerModel model;



		public Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
		{
			IAuthService authService = new JWTService("a2daca33239afc2e8656496a0e2dde84");

			// Store the Authorization Line content in the application header...
			var authHead = context.Request.Headers.Authorization;

			//Checking whether the client has submitted content in the authorization lines..
			if (authHead != null && authHead.Scheme == "Basic")
			{
				if (authService.IsTokenValid(authHead.Parameter))
				{
					List<Claim> claims = authService.GetTokenClaims(authHead.Parameter).ToList();
					var id = new ClaimsIdentity(claims, "Token");
					context.Principal = new ClaimsPrincipal(new[] { id });
				}
				else
					context.ErrorResult = new UnauthorizedResult(new AuthenticationHeaderValue[0], context.Request);

			}
			return Task.FromResult(0);

		}

		public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
		{
			return Task.FromResult(0);

		}

		//	public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken);

	}
}