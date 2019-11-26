using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_BOL
{
	public class GameOnRunModel
	{
		public int GameId { get; set; }

		public int FirstPlayerFrontRight { get; set; }

		public int FirstPlayerFrontLeft { get; set; }

		public int FirstPlayerBackRight { get; set; }

		public int FirstPlayerBackLeft { get; set; }

		public int SecondPlayerFrontRight { get; set; }

		public int SecondPlayerFrontLeft { get; set; }

		public int SecondPlayerBackRight { get; set; }

		public int SecondPlayerBackLeft { get; set; }

		public int UsedCard { get; set; }
	}
}
