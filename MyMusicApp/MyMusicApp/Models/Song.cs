using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MyMusicApp.Models
{
    public class Song
    {
        public int SongId { get; set; }

        public string SongName { get; set; }
        public string ArtistName { get; set; }
        public string SongURL { get; set; }

        public bool isFavorite { get; set; }
        public int SongRating { get; set; }

        public string DateCreated { get; set; }
        public string DateModified { get; set; }
        public string SongCover { get; set; }




    }
}
