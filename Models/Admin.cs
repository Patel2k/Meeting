﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingManagment.Models
{
    [Table("MeetingAdmin")]

    public class Admin
    {
        [Key]
        public int AdminId { get; set; }
        [Required]
        public string AdminName { get; set; }=string.Empty;
        [Required]
        public string AdminEmail { get; set; } = string.Empty;
        [Required]
        public string AdminPassword { get; set; } =string.Empty;
        [Required]
        public string AdminPhone { get; set; }=string.Empty;
    }

}
