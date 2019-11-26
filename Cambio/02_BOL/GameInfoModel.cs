using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_BOL
{
	public class GamesInfoModel
	{
		public int GameId { get; set; }

		public Nullable<System.DateTime> DateOfGame { get; set; }

		[Required, Range(18, 120)]
		public int PlayerId1 { get; set; }

		public int WinnerId { get; set; }
		
	}
}
