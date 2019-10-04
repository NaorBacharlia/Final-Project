using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_BOL
{
	public class UserInfoModel
	{

		public int Id { get; set; }

		[Required, MinLength(2), MaxLength(20)]
		public string FirstName { get; set; }

		[Required, MinLength(2), MaxLength(20)]
		public string LastName { get; set; }

		[Required, Range(18, 120)]
		public int Age { get; set; }

		[Required, MinLength(2), MaxLength(20)]
		public string Country { get; set; }

		//[Required, RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")]
		public string Email { get; set; }

		[Required, RegularExpression("\\.jpg$|\\.png$\\.jpeg$")]
		public string UserImage { get; set; }

		[Required, StringLength(64)]
		public string Password { get; set; }
	}


}
