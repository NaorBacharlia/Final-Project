using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace web_api.Models
{
	public class AuthModel
	{
		public string email { get; set; }
		public string password { get; set; }
		public static JWTContainerModel GetJWTContainerModel(string username)
		{
			return new JWTContainerModel()
			{
				Claims = new Claim[] {
					new Claim(ClaimTypes.Name, username)
				}
			};
		}
	}
}