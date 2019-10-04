using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace web_api.Models
{
	//interface that  be required by any authentication service.
	public interface IAuthContainerModel
	{
		#region Members
		string SecretKey { get; set; }
		string SecurityAlgorithm { get; set; }
		int ExpireMinutes { get; set; }

		Claim[] Claims { get; set; }
		#endregion
	}
}
