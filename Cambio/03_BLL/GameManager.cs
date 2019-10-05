using _01_DAL;
using _02_BOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_BLL
{
	
	public class GameManager
	{
		
		#region set the packet cards in array ...
		public static int[] NewPacket(CardTableModel cardTable)
		{
			int[] newPacket = new int[55];

			newPacket[1] = cardTable.OneOfHearts;
			newPacket[2] = cardTable.TwoOfHearts;
			newPacket[3] = cardTable.ThreeOfHearts;
			newPacket[4] = cardTable.FourOfHearts;
			newPacket[5] = cardTable.FiveOfHearts;
			newPacket[6] = cardTable.SixOfHearts;
			newPacket[7] = cardTable.SevenOfHearts;
			newPacket[8] = cardTable.EightOfHearts;
			newPacket[9] = cardTable.NineOfHearts;
			newPacket[10] = cardTable.TenOfHearts;
			newPacket[11] = cardTable.JackOfHearts;
			newPacket[12] = cardTable.QueenOfHearts;
			newPacket[13] = cardTable.KingOfHearts;

			//Spades
			newPacket[14] = cardTable.OneOfSpades;
			newPacket[15] = cardTable.TwoOfSpades;
			newPacket[16] = cardTable.ThreeOfSpades;
			newPacket[17] = cardTable.FourOfSpades;
			newPacket[18] = cardTable.FiveOfSpades;
			newPacket[19] = cardTable.SixOfSpades;
			newPacket[20] = cardTable.SevenOfSpades;
			newPacket[21] = cardTable.EightOfSpades;
			newPacket[22] = cardTable.NineOfSpades;
			newPacket[23] = cardTable.TenOfSpades;
			newPacket[24] = cardTable.JackOfSpades;
			newPacket[25] = cardTable.QueenOfSpades;
			newPacket[26] = cardTable.KingOfSpades;

			//Clover
			newPacket[27] = cardTable.OneOfClover;
			newPacket[28] = cardTable.TwoOfClover;
			newPacket[29] = cardTable.ThreeOfClover;
			newPacket[30] = cardTable.FourOfClover;
			newPacket[31] = cardTable.FiveOfClover;
			newPacket[32] = cardTable.SixOfClover;
			newPacket[33] = cardTable.SevenOfClover;
			newPacket[34] = cardTable.EightOfClover;
			newPacket[35] = cardTable.NineOfClover;
			newPacket[36] = cardTable.TenOfClover;
			newPacket[37] = cardTable.JackOfClover;
			newPacket[38] = cardTable.QueenOfClover;
			newPacket[39] = cardTable.KingOfClover;

			//Diamond
			newPacket[40] = cardTable.OneOfDiamond;
			newPacket[41] = cardTable.TwoOfDiamond;
			newPacket[42] = cardTable.ThreeOfDiamond;
			newPacket[43] = cardTable.FourOfDiamond;
			newPacket[44] = cardTable.FiveOfDiamond;
			newPacket[45] = cardTable.SixOfDiamond;
			newPacket[46] = cardTable.SevenOfDiamond;
			newPacket[47] = cardTable.EightOfDiamond;
			newPacket[48] = cardTable.NineOfDiamond;
			newPacket[49] = cardTable.TenOfDiamond;
			newPacket[50] = cardTable.JackOfDiamond;
			newPacket[51] = cardTable.QueenOfDiamond;
			newPacket[52] = cardTable.KingOfDiamond;

			//Joker
			newPacket[53] = cardTable.FirstJoker;
			newPacket[54] = cardTable.SecondJoker;
			newPacket[55] = cardTable.ThirdJoker;
			return newPacket;
		}
		#endregion

		#region get random board
		public static int[][] GetPlayerBoard(int[] packet)
		{
			int[][] playerBoard = new int[2][];
			Random random = new Random();
			int randomCardNumber;
			randomCardNumber = random.Next(1, 55);
			for (int i = 0; i <2; i++)
			{
				for (int j = 0; j < 2; j++)
				{
					randomCardNumber = random.Next(1, 55);
					playerBoard[i][j] = packet[randomCardNumber];
				}
			}
			return playerBoard;
		}
		#endregion

		#region  SetLocationCard
		public static CardTableModel SetLocationCard(CardTableModel cardTable, int index,int IdOfLocation)
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

		#region setlocationbyboards
		public static CardTableModel SetValueByBoarders(CardTableModel cardTable,int[]packet, int[][] board1, int[][] board2)
		{
			int cardValue = 0;
			
			for (int i = 0; i< 2; i++)
			{
				for (int j= 0; j< 2;j++)
				{
					cardValue = Array.FindIndex(packet, (x) => x == board1[i][j]);
					if ((i == 0) && (j == 0))
					{
						packet[i] = 6;
						cardTable=SetLocationCard(cardTable, cardValue, packet[i]);
					}
					else if ((i == 0) && (j == 1))
					{
						packet[i] = 5;
						cardTable=SetLocationCard(cardTable, cardValue, packet[i]);
					}
					else if ((i == 1) && (j == 0))
					{
						packet[i] = 4;
						cardTable=SetLocationCard(cardTable, cardValue, packet[i]);
					}
					else if ((i == 1) && (j == 1))
					{
						packet[i] = 3;
						cardTable=SetLocationCard(cardTable, cardValue, packet[i]);
					}	
				}
			}
			for (int i = 0; i < 2; i++)
			{
				for (int j = 0; j < 2; j++)
				{
					cardValue = Array.FindIndex(packet, (x) => x == board2[i][j]);
					if ((i == 0) && (j == 0))
					{
						packet[i] = 10;
						cardTable = SetLocationCard(cardTable, cardValue, packet[i]);
					}
					else if ((i == 0) && (j == 1))
					{
						packet[i] = 9;
						cardTable = SetLocationCard(cardTable, cardValue, packet[i]);
					}
					else if ((i == 1) && (j == 0))
					{
						packet[i] = 8;
						cardTable = SetLocationCard(cardTable, cardValue, packet[i]);
					}
					else if ((i == 1) && (j == 1))
					{
						packet[i] = 7;
						cardTable = SetLocationCard(cardTable, cardValue, packet[i]);
					}
				}
			}

			return cardTable;
		}
		#endregion

		#region Set Value One of the
		public static CardTableModel SetValueOne(CardTableModel DeckOfCards)
		{
			#region Deck of cards
			//Hearts
			DeckOfCards.OneOfHearts = 1;
			DeckOfCards.TwoOfHearts = 1;
			DeckOfCards.ThreeOfHearts = 1;
			DeckOfCards.FourOfHearts = 1;
			DeckOfCards.FiveOfHearts = 1;
			DeckOfCards.SixOfHearts = 1;
			DeckOfCards.SevenOfHearts = 1;
			DeckOfCards.EightOfHearts = 1;
			DeckOfCards.NineOfHearts = 1;
			DeckOfCards.TenOfHearts = 1;
			DeckOfCards.JackOfHearts = 1;
			DeckOfCards.QueenOfHearts = 1;
			DeckOfCards.KingOfHearts = 1;

			//Spades
			DeckOfCards.OneOfSpades = 1;
			DeckOfCards.TwoOfSpades = 1;
			DeckOfCards.ThreeOfSpades = 1;
			DeckOfCards.FourOfSpades = 1;
			DeckOfCards.FiveOfSpades = 1;
			DeckOfCards.SixOfSpades = 1;
			DeckOfCards.SevenOfSpades = 1;
			DeckOfCards.EightOfSpades = 1;
			DeckOfCards.NineOfSpades = 1;
			DeckOfCards.TenOfSpades = 1;
			DeckOfCards.JackOfSpades = 1;
			DeckOfCards.QueenOfSpades = 1;
			DeckOfCards.KingOfSpades = 1;

			//Clover
			DeckOfCards.OneOfClover = 1;
			DeckOfCards.TwoOfClover = 1;
			DeckOfCards.ThreeOfClover = 1;
			DeckOfCards.FourOfClover = 1;
			DeckOfCards.FiveOfClover = 1;
			DeckOfCards.SixOfClover = 1;
			DeckOfCards.SevenOfClover = 1;
			DeckOfCards.EightOfClover = 1;
			DeckOfCards.NineOfClover = 1;
			DeckOfCards.TenOfClover = 1;
			DeckOfCards.JackOfClover = 1;
			DeckOfCards.QueenOfClover = 1;
			DeckOfCards.KingOfClover = 1;

			//Diamond
			DeckOfCards.OneOfDiamond = 1;
			DeckOfCards.TwoOfDiamond = 1;
			DeckOfCards.ThreeOfDiamond = 1;
			DeckOfCards.FourOfDiamond = 1;
			DeckOfCards.FiveOfDiamond = 1;
			DeckOfCards.SixOfDiamond = 1;
			DeckOfCards.SevenOfDiamond = 1;
			DeckOfCards.EightOfDiamond = 1;
			DeckOfCards.NineOfDiamond = 1;
			DeckOfCards.TenOfDiamond = 1;
			DeckOfCards.JackOfDiamond = 1;
			DeckOfCards.QueenOfDiamond = 1;
			DeckOfCards.KingOfDiamond = 1;

			//Joker
			DeckOfCards.FirstJoker = 1;
			DeckOfCards.SecondJoker = 1;
			DeckOfCards.ThirdJoker = 1;
			#endregion

			return DeckOfCards;
		}
		#endregion

		#region send card table to db
		public static CardTableModel SendValuesOfCardTableModel(CardTableModel cardTable)
		{
			using (CambioEntities db = new CambioEntities())
			{
				 db.CardTables.Add(new CardTable
				{
					#region set deck of card
					GameId = cardTable.GameId,
					OneOfHearts = cardTable.OneOfHearts,
					TwoOfHearts = cardTable.TwoOfHearts,
					ThreeOfHearts = cardTable.ThreeOfHearts,
					FourOfHearts = cardTable.FourOfHearts,
					FiveOfHearts = cardTable.FiveOfHearts,
					SixOfHearts = cardTable.SixOfHearts,
					SevenOfHearts = cardTable.SevenOfHearts,
					EightOfHearts = cardTable.EightOfHearts,
					NineOfHearts = cardTable.NineOfHearts,
					TenOfHearts = cardTable.TenOfHearts,
					JackOfHearts = cardTable.JackOfHearts,
					QueenOfHearts = cardTable.QueenOfHearts,
					KingOfHearts = cardTable.KingOfHearts,

					//Spades
					OneOfSpades = cardTable.OneOfSpades,
					TwoOfSpades = cardTable.TwoOfSpades,
					ThreeOfSpades = cardTable.ThreeOfSpades,
					FourOfSpades = cardTable.FourOfSpades,
					FiveOfSpades = cardTable.FiveOfSpades,
					SixOfSpades = cardTable.SixOfSpades,
					SevenOfSpades = cardTable.SevenOfSpades,
					EightOfSpades = cardTable.EightOfSpades,
					NineOfSpades = cardTable.NineOfSpades,
					TenOfSpades = cardTable.TenOfSpades,
					JackOfSpades = cardTable.JackOfSpades,
					QueenOfSpades = cardTable.QueenOfSpades,
					KingOfSpades = cardTable.KingOfSpades,

					//Clover
					OneOfClover = cardTable.OneOfClover,
					TwoOfClover = cardTable.TwoOfClover,
					ThreeOfClover = cardTable.ThreeOfClover,
					FourOfClover = cardTable.FourOfClover,
					FiveOfClover = cardTable.FiveOfClover,
					SixOfClover = cardTable.SixOfClover,
					SevenOfClover = cardTable.SevenOfClover,
					EightOfClover = cardTable.EightOfClover,
					NineOfClover = cardTable.NineOfClover,
					TenOfClover = cardTable.TenOfClover,
					JackOfClover = cardTable.JackOfClover,
					QueenOfClover = cardTable.QueenOfClover,
					KingOfClover = cardTable.KingOfClover,

					//Diamond
					OneOfDiamond = cardTable.OneOfDiamond,
					TwoOfDiamond = cardTable.TwoOfDiamond,
					ThreeOfDiamond = cardTable.ThreeOfDiamond,
					FourOfDiamond = cardTable.FourOfDiamond,
					FiveOfDiamond = cardTable.FiveOfDiamond,
					SixOfDiamond = cardTable.SixOfDiamond,
					SevenOfDiamond = cardTable.SevenOfDiamond,
					EightOfDiamond = cardTable.EightOfDiamond,
					NineOfDiamond = cardTable.NineOfDiamond,
					TenOfDiamond = cardTable.TenOfDiamond,
					JackOfDiamond = cardTable.JackOfDiamond,
					QueenOfDiamond = cardTable.QueenOfDiamond,
					KingOfDiamond = cardTable.KingOfDiamond,

					//Joker
					FirstJoker = cardTable.FirstJoker,
					SecondJoker = cardTable.SecondJoker,
					ThirdJoker = cardTable.ThirdJoker
					#endregion

				});
				try
				{
					db.SaveChanges();
					return cardTable;
				}
				catch (Exception)
				{
					throw new Exception("error");
					
				}
			}
		}
		#endregion
		public static CardTableModel StartNewGame(int UserId)
		{
			int PlayerId1;
			int PlayerId2;
			int[] packet = new int[55];
			int[][] boardP1 = new int[2][];
			int[][] boardP2 = new int[2][];
			DateTime today = DateTime.Today;
			GamesInfoModel newGame = new GamesInfoModel();
			int UserIdWaiting = -1;
			if (UserIdWaiting == -1)
			{
				UserIdWaiting = UserId;
				PlayerId1 = UserId;
				newGame.PlayerId1 = PlayerId1;
				newGame.CurrentPlayer = PlayerId1;
			}
			else
			{
				PlayerId2 = UserId;
				newGame.PlayerId2 = PlayerId2;
				newGame.DateOfGame = today;
			}

			using (CambioEntities db = new CambioEntities())
			{

				db.GameInfoes.Add(new GameInfo
				{
					DateOfGame = newGame.DateOfGame,
					PlayerId1 = newGame.PlayerId1,
					PlayerId2 = newGame.PlayerId2,
					CurrentPlayer = newGame.CurrentPlayer
				});
				try
				{
					db.SaveChanges();
					newGame.GameId = db.GameInfoes.Where(x => x.PlayerId1 == newGame.PlayerId1).FirstOrDefault().GameId;
				}
				catch (Exception)
				{
					throw new Exception("error");

				}

			}
			
			CardTableModel cardTable = new CardTableModel();
			cardTable=SetValueOne(cardTable);
			cardTable.GameId = newGame.GameId;
			cardTable=SendValuesOfCardTableModel(cardTable);
			packet = NewPacket(cardTable);
			boardP1 = GetPlayerBoard(packet);
			boardP2 = GetPlayerBoard(packet);
			cardTable=SetValueByBoarders(cardTable,packet, boardP1, boardP2);
			cardTable = SendValuesOfCardTableModel(cardTable);
			return cardTable;
		}
		
			
	
	}
}
