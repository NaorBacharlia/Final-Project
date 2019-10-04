using _01_DAL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_BLL
{
	class GameManager
	{
		public static string StartGamecard()
		{
			using (CambioEntities db = new CambioEntities())
			{	

				CardTable cards = db.CardTables.FirstOrDefault();

			}
			return "";
		}
	}
}
