using _01_DAL;
using _02_BOL;
using System;
using System.Linq;


namespace _03_BLL
{
	public class GameManager
	{
		#region new Used card
		public static int NewUsedCard(CardTableModel cardTableModel)
		{
			Random rnd = new Random();
			int randomNum;
			randomNum = rnd.Next(1, 56);
			using (CambioEntities db = new CambioEntities())
			{
				switch (randomNum)
				{
					case 1:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().OneOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;						
					case 2:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TwoOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 3:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().ThreeOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 4:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FourOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 5:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FiveOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 6:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SixOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 7:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SevenOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 8:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().EightOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 9:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().NineOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 10:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TenOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 11:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().JackOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 12:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().QueenOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 13:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().KingOfHearts == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 14:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().OneOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 15:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TwoOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 16:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().ThreeOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 17:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FourOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 18:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FiveOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 19:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SixOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 20:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SevenOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 21:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().EightOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 22:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().NineOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 23:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TenOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 24:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().JackOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 25:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().QueenOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 26:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().KingOfSpades == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 27:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().OneOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 28:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TwoOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 29:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().ThreeOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 30:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FourOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 31:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FiveOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 32:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SixOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 33:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SevenOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 34:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().EightOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 35:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().NineOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 36:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TenOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 37:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().JackOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 38:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().QueenOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 39:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().KingOfClover == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 40:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().OneOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 41:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TwoOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 42:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().ThreeOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 43:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FourOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 44:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FiveOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 45:
						if(db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SixOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 46:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SevenOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 47:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().EightOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 48:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().NineOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 49:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().TenOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 50:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().JackOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 51:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().QueenOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 52:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().KingOfDiamond == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 53:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().FirstJoker == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 54:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().SecondJoker == 1)
						{
							return randomNum;
						}
						else
							return 0;
					case 55:
						if (db.CardTables.Where(x => x.GameId == cardTableModel.GameId).FirstOrDefault().ThirdJoker == 1)
						{
							return randomNum;
						}
						else
							return 0;
				}

			}
			return 0;
		}
		#endregion

		#region Convert To Game Info Model
		public static GamesInfoModel ConvertToGameInfoModel(GameInfo game)
		{
			GamesInfoModel gamesInfoModel = new GamesInfoModel();

			gamesInfoModel.GameId = game.GameId;
			gamesInfoModel.DateOfGame = game.DateOfGame;
			gamesInfoModel.PlayerId1 = game.PlayerId1;
			

			return gamesInfoModel;
		}
		#endregion

		#region convert cardtable to cardtablemodel
		public static CardTableModel ConvertToCardTableModel(CardTable cardTable)
		{
			CardTableModel cardTableModel = new CardTableModel();
			#region set deck of card
			cardTableModel.GameId = cardTable.GameId;
			cardTableModel.OneOfHearts = cardTable.OneOfHearts;
			cardTableModel.TwoOfHearts = cardTable.TwoOfHearts;
			cardTableModel.ThreeOfHearts = cardTable.ThreeOfHearts;
			cardTableModel.FourOfHearts = cardTable.FourOfHearts;
			cardTableModel.FiveOfHearts = cardTable.FiveOfHearts;
			cardTableModel.SixOfHearts = cardTable.SixOfHearts;
			cardTableModel.SevenOfHearts = cardTable.SevenOfHearts;
			cardTableModel.EightOfHearts = cardTable.EightOfHearts;
			cardTableModel.NineOfHearts = cardTable.NineOfHearts;
			cardTableModel.TenOfHearts = cardTable.TenOfHearts;
			cardTableModel.JackOfHearts = cardTable.JackOfHearts;
			cardTableModel.QueenOfHearts = cardTable.QueenOfHearts;
			cardTableModel.KingOfHearts = cardTable.KingOfHearts;

			//Spades
			cardTableModel.OneOfSpades = cardTable.OneOfSpades;
			cardTableModel.TwoOfSpades = cardTable.TwoOfSpades;
			cardTableModel.ThreeOfSpades = cardTable.ThreeOfSpades;
			cardTableModel.FourOfSpades = cardTable.FourOfSpades;
			cardTableModel.FiveOfSpades = cardTable.FiveOfSpades;
			cardTableModel.SixOfSpades = cardTable.SixOfSpades;
			cardTableModel.SevenOfSpades = cardTable.SevenOfSpades;
			cardTableModel.EightOfSpades = cardTable.EightOfSpades;
			cardTableModel.NineOfSpades = cardTable.NineOfSpades;
			cardTableModel.TenOfSpades = cardTable.TenOfSpades;
			cardTableModel.JackOfSpades = cardTable.JackOfSpades;
			cardTableModel.QueenOfSpades = cardTable.QueenOfSpades;
			cardTableModel.KingOfSpades = cardTable.KingOfSpades;

			//Clover
			cardTableModel.OneOfClover = cardTable.OneOfClover;
			cardTableModel.TwoOfClover = cardTable.TwoOfClover;
			cardTableModel.ThreeOfClover = cardTable.ThreeOfClover;
			cardTableModel.FourOfClover = cardTable.FourOfClover;
			cardTableModel.FiveOfClover = cardTable.FiveOfClover;
			cardTableModel.SixOfClover = cardTable.SixOfClover;
			cardTableModel.SevenOfClover = cardTable.SevenOfClover;
			cardTableModel.EightOfClover = cardTable.EightOfClover;
			cardTableModel.NineOfClover = cardTable.NineOfClover;
			cardTableModel.TenOfClover = cardTable.TenOfClover;
			cardTableModel.JackOfClover = cardTable.JackOfClover;
			cardTableModel.QueenOfClover = cardTable.QueenOfClover;
			cardTableModel.KingOfClover = cardTable.KingOfClover;

			//Diamond
			cardTableModel.OneOfDiamond = cardTable.OneOfDiamond;
			cardTableModel.TwoOfDiamond = cardTable.TwoOfDiamond;
			cardTableModel.ThreeOfDiamond = cardTable.ThreeOfDiamond;
			cardTableModel.FourOfDiamond = cardTable.FourOfDiamond;
			cardTableModel.FiveOfDiamond = cardTable.FiveOfDiamond;
			cardTableModel.SixOfDiamond = cardTable.SixOfDiamond;
			cardTableModel.SevenOfDiamond = cardTable.SevenOfDiamond;
			cardTableModel.EightOfDiamond = cardTable.EightOfDiamond;
			cardTableModel.NineOfDiamond = cardTable.NineOfDiamond;
			cardTableModel.TenOfDiamond = cardTable.TenOfDiamond;
			cardTableModel.JackOfDiamond = cardTable.JackOfDiamond;
			cardTableModel.QueenOfDiamond = cardTable.QueenOfDiamond;
			cardTableModel.KingOfDiamond = cardTable.KingOfDiamond;

			//Joker
			cardTableModel.FirstJoker = cardTable.FirstJoker;
			cardTableModel.SecondJoker = cardTable.SecondJoker;
			cardTableModel.ThirdJoker = cardTable.ThirdJoker;
			#endregion
			return cardTableModel;
		}
		#endregion

		#region send card table to db
		public static CardTableModel SendValuesOfCardTableModel(CardTableModel cardTable)
		{
			CardTable game = new CardTable();
			using (CambioEntities db = new CambioEntities())
			{

				game = db.CardTables.FirstOrDefault(x => x.GameId == cardTable.GameId);
				try
				{
					
					#region set deck of card
					game.OneOfHearts = cardTable.OneOfHearts;
					game.TwoOfHearts = cardTable.TwoOfHearts;
					game.ThreeOfHearts = cardTable.ThreeOfHearts;
					game.FourOfHearts = cardTable.FourOfHearts;
					game.FiveOfHearts = cardTable.FiveOfHearts;
					game.SixOfHearts = cardTable.SixOfHearts;
					game.SevenOfHearts = cardTable.SevenOfHearts;
					game.EightOfHearts = cardTable.EightOfHearts;
					game.NineOfHearts = cardTable.NineOfHearts;
					game.TenOfHearts = cardTable.TenOfHearts;
					game.JackOfHearts = cardTable.JackOfHearts;
					game.QueenOfHearts = cardTable.QueenOfHearts;
					game.KingOfHearts = cardTable.KingOfHearts;

					//Spades
					game.OneOfSpades = cardTable.OneOfSpades;
					game.TwoOfSpades = cardTable.TwoOfSpades;
					game.ThreeOfSpades = cardTable.ThreeOfSpades;
					game.FourOfSpades = cardTable.FourOfSpades;
					game.FiveOfSpades = cardTable.FiveOfSpades;
					game.SixOfSpades = cardTable.SixOfSpades;
					game.SevenOfSpades = cardTable.SevenOfSpades;
					game.EightOfSpades = cardTable.EightOfSpades;
					game.NineOfSpades = cardTable.NineOfSpades;
					game.TenOfSpades = cardTable.TenOfSpades;
					game.JackOfSpades = cardTable.JackOfSpades;
					game.QueenOfSpades = cardTable.QueenOfSpades;
					game.KingOfSpades = cardTable.KingOfSpades;

					//Clover
					game.OneOfClover = cardTable.OneOfClover;
					game.TwoOfClover = cardTable.TwoOfClover;
					game.ThreeOfClover = cardTable.ThreeOfClover;
					game.FourOfClover = cardTable.FourOfClover;
					game.FiveOfClover = cardTable.FiveOfClover;
					game.SixOfClover = cardTable.SixOfClover;
					game.SevenOfClover = cardTable.SevenOfClover;
					game.EightOfClover = cardTable.EightOfClover;
					game.NineOfClover = cardTable.NineOfClover;
					game.TenOfClover = cardTable.TenOfClover;
					game.JackOfClover = cardTable.JackOfClover;
					game.QueenOfClover = cardTable.QueenOfClover;
					game.KingOfClover = cardTable.KingOfClover;

					//Diamond
					game.OneOfDiamond = cardTable.OneOfDiamond;
					game.TwoOfDiamond = cardTable.TwoOfDiamond;
					game.ThreeOfDiamond = cardTable.ThreeOfDiamond;
					game.FourOfDiamond = cardTable.FourOfDiamond;
					game.FiveOfDiamond = cardTable.FiveOfDiamond;
					game.SixOfDiamond = cardTable.SixOfDiamond;
					game.SevenOfDiamond = cardTable.SevenOfDiamond;
					game.EightOfDiamond = cardTable.EightOfDiamond;
					game.NineOfDiamond = cardTable.NineOfDiamond;
					game.TenOfDiamond = cardTable.TenOfDiamond;
					game.JackOfDiamond = cardTable.JackOfDiamond;
					game.QueenOfDiamond = cardTable.QueenOfDiamond;
					game.KingOfDiamond = cardTable.KingOfDiamond;

					//Joker
					game.FirstJoker = cardTable.FirstJoker;
					game.SecondJoker = cardTable.SecondJoker;
					game.ThirdJoker = cardTable.ThirdJoker;
					#endregion
					db.SaveChanges();
					return cardTable;
				}
				catch (Exception e)
				{
					throw new Exception(e + "error");

				}


			};

		}

		#endregion

		#region Set random cards
		public static int[] SetRandomCards(int[] randomArray)
		{
			Random rnd = new Random();
			int randomNum;
			for (int i = 0; i < randomArray.Length; i++)
			{
				randomNum = rnd.Next(1, 56);

				for (int j = 0; j < i; j++)
				{
					if (randomNum == randomArray[j])
					{
						randomNum = rnd.Next(1, 56);
					}
				}
				randomArray[i] = randomNum;
			}
			return randomArray;
		}
		#endregion

		#region  SetLocationCard
		public static CardTableModel SetLocationCard(CardTableModel cardTable, int index, int IdOfLocation)
		{
			switch (index)
			{
				case 1:
					cardTable.OneOfHearts = IdOfLocation;
					break;
				case 2:
					cardTable.TwoOfHearts = IdOfLocation;
					break;
				case 3:
					cardTable.ThreeOfHearts = IdOfLocation;
					break;
				case 4:
					cardTable.FourOfHearts = IdOfLocation;
					break;
				case 5:
					cardTable.FiveOfHearts = IdOfLocation;
					break;
				case 6:
					cardTable.SixOfHearts = IdOfLocation;
					break;
				case 7:
					cardTable.SevenOfHearts = IdOfLocation;
					break;
				case 8:
					cardTable.EightOfHearts = IdOfLocation;
					break;
				case 9:
					cardTable.NineOfHearts = IdOfLocation;
					break;
				case 10:
					cardTable.TenOfHearts = IdOfLocation;
					break;
				case 11:
					cardTable.JackOfHearts = IdOfLocation;
					break;
				case 12:
					cardTable.QueenOfHearts = IdOfLocation;
					break;
				case 13:
					cardTable.KingOfHearts = IdOfLocation;
					break;
				case 14:
					cardTable.OneOfSpades = IdOfLocation;
					break;
				case 15:
					cardTable.TwoOfSpades = IdOfLocation;
					break;
				case 16:
					cardTable.ThreeOfSpades = IdOfLocation;
					break;
				case 17:
					cardTable.FourOfSpades = IdOfLocation;
					break;
				case 18:
					cardTable.FiveOfSpades = IdOfLocation;
					break;
				case 19:
					cardTable.SixOfSpades = IdOfLocation;
					break;
				case 20:
					cardTable.SevenOfSpades = IdOfLocation;
					break;
				case 21:
					cardTable.EightOfSpades = IdOfLocation;
					break;
				case 22:
					cardTable.NineOfSpades = IdOfLocation;
					break;
				case 23:
					cardTable.TenOfSpades = IdOfLocation;
					break;
				case 24:
					cardTable.JackOfSpades = IdOfLocation;
					break;
				case 25:
					cardTable.QueenOfSpades = IdOfLocation;
					break;
				case 26:
					cardTable.KingOfSpades = IdOfLocation;
					break;
				case 27:
					cardTable.OneOfClover = IdOfLocation;
					break;
				case 28:
					cardTable.TwoOfClover = IdOfLocation;
					break;
				case 29:
					cardTable.ThreeOfClover = IdOfLocation;
					break;
				case 30:
					cardTable.FourOfClover = IdOfLocation;
					break;
				case 31:
					cardTable.FiveOfClover = IdOfLocation;
					break;
				case 32:
					cardTable.SixOfClover = IdOfLocation;
					break;
				case 33:
					cardTable.SevenOfClover = IdOfLocation;
					break;
				case 34:
					cardTable.EightOfClover = IdOfLocation;
					break;
				case 35:
					cardTable.NineOfClover = IdOfLocation;
					break;
				case 36:
					cardTable.TenOfClover = IdOfLocation;
					break;
				case 37:
					cardTable.JackOfClover = IdOfLocation;
					break;
				case 38:
					cardTable.QueenOfClover = IdOfLocation;
					break;
				case 39:
					cardTable.KingOfClover = IdOfLocation;
					break;
				case 40:
					cardTable.OneOfDiamond = IdOfLocation;
					break;
				case 41:
					cardTable.TwoOfDiamond = IdOfLocation;
					break;
				case 42:
					cardTable.ThreeOfDiamond = IdOfLocation;
					break;
				case 43:
					cardTable.FourOfDiamond = IdOfLocation;
					break;
				case 44:
					cardTable.FiveOfDiamond = IdOfLocation;
					break;
				case 45:
					cardTable.SixOfDiamond = IdOfLocation;
					break;
				case 46:
					cardTable.SevenOfDiamond = IdOfLocation;
					break;
				case 47:
					cardTable.EightOfDiamond = IdOfLocation;
					break;
				case 48:
					cardTable.NineOfDiamond = IdOfLocation;
					break;
				case 49:
					cardTable.TenOfDiamond = IdOfLocation;
					break;
				case 50:
					cardTable.JackOfDiamond = IdOfLocation;
					break;
				case 51:
					cardTable.QueenOfDiamond = IdOfLocation;
					break;
				case 52:
					cardTable.KingOfDiamond = IdOfLocation;
					break;
				case 53:
					cardTable.FirstJoker = IdOfLocation;
					break;
				case 54:
					cardTable.SecondJoker = IdOfLocation;
					break;
				case 55:
					cardTable.ThirdJoker = IdOfLocation;
					break;

			}
			return cardTable;
		}
		#endregion

		#region Exit Game function
		public static void ExitGameLogic(int id)
		{
			
			using (CambioEntities db = new CambioEntities())
			{
				
				try
				{
					GameInfo game = db.GameInfoes.Where(x => x.PlayerId1 == id).FirstOrDefault(x=>x.WinnerId == null);
					game.WinnerId = -1;
					db.SaveChanges();
				}
				catch (Exception)
				{
					throw new Exception("error");
				}
			}

		}
		#endregion

		#region Contiue Game logic
		public static GeneralGameInfoModel ContinueGame(int gameId)
		{
			GeneralGameInfoModel myGame = new GeneralGameInfoModel();
			using (CambioEntities db = new CambioEntities())
			{

				try
				{
					GameInfo game = db.GameInfoes.Where(x => x.GameId == gameId).FirstOrDefault(x => x.WinnerId == null);
					CardTable cardTable = db.CardTables.Where(x => x.GameId == game.GameId).FirstOrDefault();
					myGame.gameInfo = ConvertToGameInfoModel(game);
					myGame.cardTable = ConvertToCardTableModel(cardTable);
					return myGame;
				}
				catch (Exception)
				{
					throw new Exception("error");
				}
			}
		}
		#endregion

		#region comptuer moves
		public static int[] ComputerIsPlaying(int[] allBoardCards)
		{
			Random rnd = new Random();
			int randomNum=rnd.Next(7,11);
			int temp;
			var randomCall= rnd.Next(2);
			if (randomCall == 1)
			{
				temp = allBoardCards[randomNum];
				allBoardCards[randomNum] = allBoardCards[8];
				allBoardCards[8] = temp;
			}
			return allBoardCards;
		}
		#endregion

		#region start new game 
		public static GeneralGameInfoModel StartNewGame(int userId)
		{
			GamesInfoModel NewGameInfo = new GamesInfoModel();
			NewGameInfo.PlayerId1 = userId;
			NewGameInfo.DateOfGame = DateTime.Today;

			GameInfo newDbGame = new GameInfo
			{
				DateOfGame = NewGameInfo.DateOfGame,
				PlayerId1 = NewGameInfo.PlayerId1
			};

			using (CambioEntities db = new CambioEntities())
			{

				db.GameInfoes.Add(newDbGame);
				try
				{
					db.SaveChanges();
				}
				catch (Exception)
				{
					throw new Exception("error");
				}

			}
			NewGameInfo.GameId = newDbGame.GameId;
			CardTableModel cardTable = new CardTableModel();
			cardTable.GameId = newDbGame.GameId;
			using (CambioEntities db = new CambioEntities())
			{
				CardTable NewDbCardTable = new CardTable();
				NewDbCardTable.GameId = cardTable.GameId;
				db.CardTables.Add(NewDbCardTable);
				try
				{
					db.SaveChanges();
				}
				catch (Exception)
				{
					throw new Exception("error");
				}
			}
			int[] randomCards = new int[8];
			//************** INSERT TO EACH ELEMENT IN THE ARRAY A NUMBER IN RANGE 1-55 *************************//
			SetRandomCards(randomCards);
			for (int i = 0; i < randomCards.Length; i++)
			{
				SetLocationCard(cardTable, randomCards[i], i + 3);
			}
			cardTable = SendValuesOfCardTableModel(cardTable);
			GeneralGameInfoModel newGame = new GeneralGameInfoModel();
			newGame.gameInfo = NewGameInfo;
			newGame.cardTable = cardTable;
			return newGame;
		}
		#endregion

		#region game on run 
		public static GeneralGameInfoModel GameOnRun(GameOnRunModel gameOn)
		{
			CardTableModel cardtablemodel = new CardTableModel();
			GamesInfoModel gamesInfoModel = new GamesInfoModel();
			GeneralGameInfoModel generalGameInfo = new GeneralGameInfoModel();
			// Choosing the appropriate game
			using (CambioEntities db = new CambioEntities())
			{
				try
				{
					GameInfo gameInfo= db.GameInfoes.FirstOrDefault(x => x.GameId == gameOn.GameId);
					CardTable cardTable = db.CardTables.FirstOrDefault(x => x.GameId == gameOn.GameId);
					cardtablemodel = ConvertToCardTableModel(cardTable);
					gamesInfoModel = ConvertToGameInfoModel(gameInfo);
				}
				catch (Exception)
				{
					throw new Exception("error");
				}
			}
			// Array for the function that set the location cards...
			int[] gameOnRunCards = new int[9];
			gameOnRunCards[0] = gameOn.FirstPlayerFrontRight;
			gameOnRunCards[1] = gameOn.FirstPlayerFrontLeft;
			gameOnRunCards[2] = gameOn.FirstPlayerBackRight;
			gameOnRunCards[3] = gameOn.FirstPlayerBackLeft;

			gameOnRunCards[4] = gameOn.SecondPlayerFrontRight;
			gameOnRunCards[5] = gameOn.SecondPlayerFrontLeft;
			gameOnRunCards[6] = gameOn.SecondPlayerBackRight;
			gameOnRunCards[7] = gameOn.SecondPlayerBackLeft;

			gameOnRunCards[8] = gameOn.UsedCard;
			// A loop that send to the function with the location and value from CardMap table...
			for (int i = 0; i < gameOnRunCards.Length-1; i++)
			{
				SetLocationCard(cardtablemodel, gameOnRunCards[i], i + 3);
			}
			SetLocationCard(cardtablemodel, gameOnRunCards[8], 2); // send the used card
			cardtablemodel = SendValuesOfCardTableModel(cardtablemodel);
			gameOnRunCards[8] = NewUsedCard(cardtablemodel);// get a new used card
			while (gameOnRunCards[8] == 0)
			{
				gameOnRunCards[8] = NewUsedCard(cardtablemodel);
			}
			//**********************computer moved******************
			ComputerIsPlaying(gameOnRunCards);
			for (int i =4; i < gameOnRunCards.Length - 1; i++)
			{
				SetLocationCard(cardtablemodel, gameOnRunCards[i], i + 3);
			}
			SetLocationCard(cardtablemodel, gameOnRunCards[8], 2);
			cardtablemodel = SendValuesOfCardTableModel(cardtablemodel);
			generalGameInfo.gameInfo = gamesInfoModel;
			generalGameInfo.cardTable = cardtablemodel;
			return generalGameInfo;
		}
		#endregion
	}
}
