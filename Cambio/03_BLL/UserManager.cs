using System;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using _01_DAL;
using _02_BOL;
namespace _03_BLL
{
	public class UserManager
	{

		// Function to hashing password ...
		public static string Sha256(string randomString)
		{
			var crypt = new SHA256Managed();
			string hash = String.Empty;
			byte[] crypto = crypt.ComputeHash(Encoding.ASCII.GetBytes(randomString));
			foreach (byte theByte in crypto)
			{
				hash += theByte.ToString("x2");
			}
			return hash;
		}


		public static string Register(UserInfoModel user)
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
					userPassword = Sha256(user.Password)
				});
				try
				{
					db.SaveChanges();
				}
				catch (Exception e)
				{
					return "{ 'msg':" + e.Message + "}";
				}
				return "{ 'msg': 'user add' }";
			}
		}


		public static bool Login(string username, string password)
		{

			using (CambioEntities db = new CambioEntities())
			{
				
				return db.UserInfoes.Where(user => user.Email == username).FirstOrDefault().userPassword == Sha256(password);
			}
		}

		// Retrieving all data of user info..
		public static UserInfoModel UserInfo(string username)
		{
			using (CambioEntities db = new CambioEntities())
			{
				UserInfo u = db.UserInfoes.FirstOrDefault(user => user.Email == username);	
				UserInfoModel userinfo = new UserInfoModel();
				userinfo.Id = u.Id;
				userinfo.FirstName = u.FirstName;
				userinfo.LastName = u.LastName;
				userinfo.Email = username;
				userinfo.Age = u.Age;
				userinfo.Country = u.Country;
				userinfo.UserImage = u.UserImage;
				return userinfo;

			}
		}

		public static string UpdateUser(UserInfoModel user)
		{
			UserInfo userchanges = new UserInfo(); 
			using (CambioEntities db = new CambioEntities())
			{
				userchanges = db.UserInfoes.FirstOrDefault(x => x.Id == user.Id);
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
					if (user.Age!=0)
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
						Sha256(user.Password);
						userchanges.userPassword = user.Password;
					}
					db.SaveChanges();
					return "{ 'msg': 'user has been updated' }";
				}
				return "{ 'msg': 'Not Found' }";
			}
			
		}


		public static bool DeleteUser(string username)
		{
			UserInfo user = new UserInfo();
			using (CambioEntities db = new CambioEntities())
			{
				user = db.UserInfoes.FirstOrDefault(x => x.Email == username);
				if (user != null)
				{
					db.UserInfoes.Remove(user);
					db.SaveChanges();
					return true;
				}
				else
				{
					return false;
				}
			}
		}
	}


}
