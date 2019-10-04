using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using web_api.Models;

namespace web_api.Managers
{
	public interface IAuthService
	{
		string SecretKey { get; set; }
		bool IsTokenValid(string Token);
		string GenerateToken(IAuthContainerModel model);
		IEnumerable<Claim> GetTokenClaims(string Token);
	}
}
