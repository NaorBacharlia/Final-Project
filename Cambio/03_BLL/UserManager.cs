using System;
using System.Data.SqlClient;
using System.Linq;
using _01_DAL;
using _02_BOL;
namespace _03_BLL
{
	public class UserManager
	{
		public static int? getUserId(string userName, string password)
		{
			try
			{
				using (CambioEntities db = new CambioEntities())
				{
					UserInfo user = db.UserInfoes.FirstOrDefault(x => x.Email == userName && x.userPassword==password);
					if (user != null)
					{
						return user.Id;
					}
					return null;
				}
			}
			catch
			{
				return null;
			}
		}
		public static bool Register(UserInfoModel user)
		{

			try
			{
				using (CambioEntities db = new CambioEntities())
				{
					db.UserInfoes.Add(new UserInfo
					{
						FirstName = user.FirstName,
						LastName = user.LastName,
						Email = user.Email,
						Age = user.Age,
						Country = user.Country,
						UserImage = user.UserImage,
						userPassword = user.Password
					});

					db.SaveChanges();

					return true;
				}

			}
			catch (Exception e)
			{
				return false;
			}

	}


	// Retrieving all data of user info..
	public static UserInfoModel UserInfo(int userId)
	{
		try
		{
			using (CambioEntities db = new CambioEntities())
			{
				UserInfo u = db.UserInfoes.FirstOrDefault(user => user.Id == userId);
				UserInfoModel userinfo = new UserInfoModel();
				userinfo.Id = u.Id;
				userinfo.FirstName = u.FirstName;
				userinfo.LastName = u.LastName;
				userinfo.Email = u.Email;
				userinfo.Age = u.Age;
				userinfo.Country = u.Country;
				userinfo.UserImage = u.UserImage;
				return userinfo;

			}

		}
		catch
		{
			return null;
		}

	}

	public static bool UpdateUser(UserInfoModel user, int userId)
	{
		UserInfo userchanges = new UserInfo();

			try
			{

				using (CambioEntities db = new CambioEntities())
				{
					userchanges = db.UserInfoes.FirstOrDefault(x => x.Id == userId);
					if (userchanges != null)
					{
						if (user.FirstName != "")
						{
							userchanges.FirstName = user.FirstName;
						}
						if (user.LastName != "")
						{
							userchanges.LastName = user.LastName;
						}
						if (user.Email != "")
						{
							userchanges.Email = user.Email;
						}
						if (user.Age != 0)
						{
							userchanges.Age = user.Age;
						}
						if (user.Country != "")
						{
							userchanges.Country = user.Country;
						}
						if (user.UserImage != "")
						{
							userchanges.UserImage = user.UserImage;
						}
						if (user.Password != "")
						{
							userchanges.userPassword = user.Password;
						}
						db.SaveChanges();
						return true;

					}
					return false;
				}
			}
			catch
			{
				return false;
			}

		}


	public static bool DeleteUser(int userId)
	{
			try
			{

				using (CambioEntities db = new CambioEntities())
				{
					UserInfo user = db.UserInfoes.FirstOrDefault(x => x.Id == userId);
					if (user != null)
					{
						db.UserInfoes.Remove(user);
						db.SaveChanges();
						return true;
					}
					return false;
				}
			}
			catch
			{
				return false;
			}
			
	}
}


}
