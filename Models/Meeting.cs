using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MeetingManagment.Models
{
    [Table("MeetingMeet")]

    public class Meeting
    {
        [Key]
        public int MeetingId { get; set; }
        [Required]
        public string  MeetingDetails { get; set; }=string.Empty;
        [Required]
        public string StartDate { get; set; } = string.Empty;
        
        //[Required]
        public string EndDate { get; set; }=string.Empty;
        
        public string StartTime { get; set; } = string.Empty;
        [Required]
        
        public string EndTime { get; set; }= string.Empty;
        [ForeignKey(nameof(EmployeeId))]
        public int? EmployeeId { get; set; }
        [ForeignKey(nameof(RoomId))]
        public int? RoomId { get; set; }
       

    }
}
