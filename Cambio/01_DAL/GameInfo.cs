//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace _01_DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class GameInfo
    {
        public int GameId { get; set; }
        public Nullable<System.DateTime> DateOfGame { get; set; }
        public int PlayerId1 { get; set; }
        public int PlayerId2 { get; set; }
        public Nullable<int> WinnerId { get; set; }
        public int CurrentPlayer { get; set; }
    
        public virtual CardTable CardTable { get; set; }
        public virtual UserInfo UserInfo { get; set; }
        public virtual UserInfo UserInfo1 { get; set; }
    }
}
