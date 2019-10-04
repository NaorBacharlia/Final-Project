using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace web_api.Models
{
	public class JWTContainerModel : IAuthContainerModel
	{
		#region Public Methods
		public int ExpireMinutes { get; set; } = 10000; // 7 days.
		public string SecretKey { get; set; } = "a2daca33239afc2e8656496a0e2dde84"; // This is secret key should be moved to some configurations outter server.
		public string SecurityAlgorithm { get; set; } = SecurityAlgorithms.HmacSha256Signature;

		public Claim[] Claims { get; set; }
		#endregion


	}
}